# == Schema Information
#
# Table name: hands
#
#  id        :integer          not null, primary key
#  player_id :integer          not null
#

class Hand < ActiveRecord::Base

  has_many :cards, as: :location
  belongs_to :player

end
