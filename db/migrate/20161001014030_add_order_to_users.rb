class AddOrderToUsers < ActiveRecord::Migration
  def change
    add_column :users, :order_in_game, :integer
  end
end
