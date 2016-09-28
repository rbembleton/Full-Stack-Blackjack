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

  def busted?
    self.best_value > 21
  end

  def best_value
    aces = self.cards.to_a.count { |card| card.value == 1 }
    sum = lowest_value

    while aces >= 1 && sum <= 11
      aces -= 1
      sum += 10
    end

    sum

  end

  def lowest_value
    self.cards.inject(0) { |accum, card| accum + card.value }
  end

  def show
    show_arr = []
    cards.each do |card|
      show_arr.push(card.name)
    end
    show_arr
  end



end
