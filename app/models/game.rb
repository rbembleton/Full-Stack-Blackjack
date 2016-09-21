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

  def end
    Deck.destroy_all(game_id: self.id)
    DiscardPile.destroy_all(game_id: self.id)
    Card.where(game_id: self.id).destroy_all
    Hand.where(player_id: (self.users.select(:id).to_a + self.dealer.select(:id))).destroy_all
    Dealer.destroy_all(game_id: self.id)
  end

end
