class ChangeHands < ActiveRecord::Migration
  def change
    add_column :hands, :player_type, :string, null: false
    remove_index :hands, :player_id
    add_index :hands, [:player_id, :player_type]
  end
end
