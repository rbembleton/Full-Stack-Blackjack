# == Schema Information
#
# Table name: cards
#
#  id            :integer          not null, primary key
#  game_id       :integer          not null
#  num           :integer          not null
#  location_id   :integer          not null
#  location_type :string           not null
#  order         :integer          not null
#

class Card < ActiveRecord::Base
  validates :game_id, :num, :location_id, :location_type, :order, presence: true

  belongs_to :location, polymorphic: true
  belongs_to :game

end
