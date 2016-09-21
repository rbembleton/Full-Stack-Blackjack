# == Schema Information
#
# Table name: dealers
#
#  id      :integer          not null, primary key
#  game_id :integer          not null
#

class Dealer < ActiveRecord::Base

  validates :game_id, presence: true, uniqueness: true

  belongs_to :game
  has_one :hand, as: :player

  def hit_me
    self.game.deck.deal.update!(
      location_id: self.hand.id,
      location_type: 'Hand',
      order: self.hand.count
    )
  end

end
