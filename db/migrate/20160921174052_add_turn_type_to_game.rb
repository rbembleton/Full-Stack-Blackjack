class AddTurnTypeToGame < ActiveRecord::Migration
  def change
    add_column :games, :turn_type, :string
  end
end
