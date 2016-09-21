# == Schema Information
#
# Table name: cards
#
#  id            :integer          not null, primary key
#  game_id       :integer          not null
#  num           :integer          not null
#  location_id   :integer          not null
#  location_type :string           not null
#  position      :integer          not null
#

class Card < ActiveRecord::Base


end
