# == Schema Information
#
# Table name: hands
#
#  id          :integer          not null, primary key
#  player_id   :integer          not null
#  player_type :string           not null
#

class Hand < ActiveRecord::Base

  has_many :cards, as: :location
  belongs_to :player, polymorphic: true
  # has_one :game, through: :player



end
