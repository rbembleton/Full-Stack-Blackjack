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

end
