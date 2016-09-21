# == Schema Information
#
# Table name: discard_piles
#
#  id      :integer          not null, primary key
#  game_id :integer          not null
#

class DiscardPile < ActiveRecord::Base

  belongs_to :game
  has_many :cards, as: :location

end
