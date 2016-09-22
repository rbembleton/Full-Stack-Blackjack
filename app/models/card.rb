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

  RANK_CONV = {
    1 => :ace,
    2 => :two,
    3 => :three,
    4 => :four,
    5 => :five,
    6 => :six,
    7 => :seven,
    8 => :eight,
    9 => :nine,
    10 => :ten,
    11 => :jack,
    12 => :queen,
    13 => :king
  }

  def value
    val = self.num % 13 + 1
    return val > 10 ? 10 : val
  end

  def rank
    RANK_CONV[self.num % 13 + 1]
  end

  def ace?
    self.rank == 1
  end

  def suit
    SUIT_CONV[self.num / 13]
  end

  def color
    COLOR_CONV[suit]
  end

  def uncover
    self.update!(hidden: false)
  end

  def name
    return "#{self.rank.to_s.capitalize} of #{self.suit.to_s.capitalize}"
  end

end
