class AddNextOrderIdToGames < ActiveRecord::Migration
  def change
    add_column :games, :next_order_num, :integer, null: false, default: 0
  end
end
