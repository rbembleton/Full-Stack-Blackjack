class RemoveWinnerColumn < ActiveRecord::Migration
  def change
    remove_column :games, :winner
  end
end
