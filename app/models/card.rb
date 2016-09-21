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
#  hidden        :boolean          default(FALSE)
#

class Card < ActiveRecord::Base
  validates :game_id, :num, :location_id, :location_type, :order, presence: true

  belongs_to :location, polymorphic: true
  belongs_to :game

  SUIT_CONV = {
    0 => :clubs,
    1 => :diamonds,
    2 => :hearts,
    3 => :spades
  }

  COLOR_CONV = {
    clubs: :black,
    spades: :black,
    hearts: :red,
    diamonds: :red
  }

  def rank
    self.num % 13 + 1
  end

  def ace?
    rank == 1
  end

  def suit
    SUIT_CONV[self.num / 4]
  end

  def color
    COLOR_CONV[suit]
  end

  def uncover
    self.update!(hidden: false)
  end

end
