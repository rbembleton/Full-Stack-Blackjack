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

  def is_busted?
    self.best_value > 21
  end

  def best_value
    aces = self.cards.count { |card| card.rank == 1 }
    sum = lowest_value

    while aces >= 1 && sum <= 11
      aces -= 1
      sum += 10
    end

    sum

  end

  def lowest_value
    self.cards.inject { |accum, card| accum + card.rank }
  end


end
