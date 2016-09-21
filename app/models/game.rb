# == Schema Information
#
# Table name: games
#
#  id         :integer          not null, primary key
#  created_at :datetime
#  updated_at :datetime
#  turn_id    :integer          default(0)
#  turn_type  :string
#

class Game < ActiveRecord::Base

  has_many :users
  has_one :deck
  has_many :cards
  has_one :discard_pile
  has_one :dealer

  belongs_to :current_player, polymorphic: true, foreign_key: :turn_id

  def players
    self.users + self.dealer
  end

  def start
    return if self.users.count == 0

    d = Deck.new_full_deck(self.id)
    dp = DiscardPile.create!(game_id: self.id)
    dlr = Dealer.create!(game_id: self.id)
    self.update(turn_id: self.users.first.id, turn_type: 'User')

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

  end

  def make_move(move_type)
    return if @current_user.id != self.turn_id

    case move_type
    when :hit
      User.find(self.turn_id).hit_me
    when :stand
      next_player
    end
  end

  def next_player

    game_players = players.to_a
    curr_idx = game_players.find_index { |player| player.class.to_s == turn_type && player.id == turn_id }

    self.update!(turn_id: players[curr_idx + 1].id, turn_type: players[curr_idx + 1].class.to_s)

    if self.turn_type == 'Dealer'
      finish_game
    end

  end

  def finish_game
    dealer.take_turn
    winner
  end

  def winner
    highest_hand = 0
    current_winner = nil
    self.hands.each do |hand|
      if !hand.busted? && hand.best_value > highest_hand
        highest_hand = hand.best_value
        current_winner = { player_id: hand.player_id, player_type: hand.player_type }
      end
    end

    current_winner
  end

  def clear
    Deck.destroy_all(game_id: self.id)
    DiscardPile.destroy_all(game_id: self.id)
    Card.where(game_id: self.id).destroy_all
    Hand.where(player_id: (self.users.select(:id).to_a + self.dealer.select(:id))).destroy_all
    Dealer.destroy_all(game_id: self.id)
  end

end
