class AddTurnToGame < ActiveRecord::Migration
  def change
    add_column :games, :turn_id, :integer, default: 0
  end
end
