class CreateHands < ActiveRecord::Migration
  def change
    create_table :hands do |t|
      t.integer :player_id, null: false
    end
    add_index :hands, :player_id, unique: true
  end
end
