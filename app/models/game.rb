# == Schema Information
#
# Table name: games
#
#  id         :integer          not null, primary key
#  created_at :datetime
#  updated_at :datetime
#  turn_id    :integer          default(0)
#  turn_type  :string
#  status     :string           default("new")
#

class Game < ActiveRecord::Base

  has_many :users
  has_one :deck, dependent: :destroy
  has_many :cards, dependent: :destroy
  has_one :discard_pile, dependent: :destroy
  has_one :dealer, dependent: :destroy

  after_create :create_dependencies

  def hands
    self.players.map { |player| player.hand }
  end

  def players
    return self.users + Dealer.where(game_id: self.id)
  end

  def current_player
    if turn_type == 'User'
      return User.find(turn_id)
    elsif turn_type == 'Dealer'
      return Dealer.find(turn_id)
    end
    nil
  end

  def create_dependencies
    Deck.new_full_deck(self.id)
    DiscardPile.create!(game_id: self.id)
    Dealer.create!(game_id: self.id)
  end

  def start
    return if self.users.count == 0
    self.reload
    self.update!(turn_id: self.users.first.id, turn_type: 'User', status: 'started')
    d, dp, dlr = self.deck, self.discard_pile, self.dealer

    self.players.each do |player|
      h = player.hand || Hand.create!(player_id: player.id, player_type: player.class.to_s)

      d.deal(2).each.with_index do |card, idx|
        card.update!({
          order: idx,
          location_id: h.id,
          location_type: 'Hand',
          hidden: idx == 0
        })
      end
    end

    self.reload
  end

  def make_move(move_type)
    # return if @current_user.id != self.turn_id

    case move_type
    when :hit
      User.find(self.turn_id).hit_me
    when :stand
      next_player
    end
    self.reload
  end

  def next_player
    game_players = players.to_a
    curr_idx = game_players.find_index { |player| player.class.to_s == turn_type && player.id == turn_id }
    return nil if curr_idx >= game_players.length

    self.update!(turn_id: players[curr_idx + 1].id, turn_type: players[curr_idx + 1].class.to_s)

    if self.turn_type == 'Dealer'
      return finish_game
    end

  end

  def finish_game
    self.dealer.take_turn
    self.update!(status: 'finished')
    self.players.each { |plr| plr.hand.cards.each { |c| c.update!(hidden: false) } }
    winner
  end

  def winner
    highest_hand, current_winner = 0, nil
    self.reload
    self.hands.each do |hand|
      if hand && !hand.busted? && hand.best_value > highest_hand
        highest_hand = hand.best_value
        current_winner = hand.player
      end
    end
    current_winner
  end

  def reset
    self.update!(status: 'cleared')
    self.deck.reshuffle
    self.hands.each { |hand| hand.reload if hand }
  end

end
