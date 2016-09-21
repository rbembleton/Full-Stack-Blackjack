# == Schema Information
#
# Table name: games
#
#  id         :integer          not null, primary key
#  created_at :datetime
#  updated_at :datetime
#

class Game < ActiveRecord::Base

  has_many :users
  has_one :deck
  has_many :cards
  has_one :discard_pile
  has_one :dealer

  def players
    self.users + self.dealer
  end

  def start
    d = Deck.new_full_deck(self.id)
    dp = DiscardPile.create!(game_id: self.id)
    dlr = Dealer.create!(game_id: self.id)

    self.players.each do |player|
      h = player.hand || Hand.create!(player_id: player.id, player_type: player.class.to_s)

      d.deal(2).each.with_index do |card, idx|
        card.update!({
          order: idx,
          location_id: h.id,
          location_type: 'Hand'
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
