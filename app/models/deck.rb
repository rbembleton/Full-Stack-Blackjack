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
    ro = (1..52).to_a.shuffle

    1.upto(52) do |card_num|
      Card.create!(
        game_id: game_id,
        num: card_num,
        location_id: d.id,
        location_type: 'Deck',
        order: ro[card_num - 1]
      )
    end

    d
  end

  def deal(num)
    self.cards.order(:order).count(num)
  end

end
