# == Schema Information
#
# Table name: decks
#
#  id      :integer          not null, primary key
#  game_id :integer          not null
#

class Deck < ActiveRecord::Base

  validates :game_id, null: false

  belongs_to :game
  has_many :cards, as: :location

  def self.new_full_deck(game_id)
    d = Deck.create!(game_id: game_id)
    ro = (0..51).to_a.shuffle

    0.upto(51) do |card_num|
      Card.create!(
        game_id: game_id,
        num: card_num,
        location_id: d.id,
        location_type: 'Deck',
        order: ro[card_num]
      )
    end

    d
  end

  def reshuffle
    ro = (0..51).to_a.shuffle
    self.game.cards.each.with_index do |card, idx|
      card.update!(
        location_id: self.id,
        location_type: 'Deck',
        order: ro[idx]
      )
    end
  end

  def deal(num = 1)
    return (num == 1 ) ?
      self.cards.order(:order).first :
      self.cards.order(:order).limit(num)
  end

end
