class AddIndexForPolyTurn < ActiveRecord::Migration
  def change
    add_index :games, [:turn_id, :turn_type]
  end
end
