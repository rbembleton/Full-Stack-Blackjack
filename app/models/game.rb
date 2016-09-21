# == Schema Information
#
# Table name: games
#
#  id         :integer          not null, primary key
#  created_at :datetime
#  updated_at :datetime
#

class Game < ActiveRecord::Base

  has_many :players
  has_one :deck
  has_many :cards
  has_one :discard_pile

  def start()
    d = Deck.new_full_deck(self.id)
    dp = DiscardPile.create!(game_id: self.id)

    self.players.each do |player|
      h = Hand.create!(player_id: player.id)
      d.deal(2).each_with_index do |card, idx|
        card.update!({
            order: idx,
            location_id: h.id,
            location_type: 'Hand'
        })
      end
    end

  ends

  def end()
    self.deck.destroy!
    self.hand.destroy!
    self.discard_pile.destroy!
    self.cards.destroy!
    self.players.each { |player| player.update!(game_id: null) }
  end

end
