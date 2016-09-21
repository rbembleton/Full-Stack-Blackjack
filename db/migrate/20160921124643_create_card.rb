class CreateCard < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.integer :game_id, null: false
      t.integer :num, null: false 
      t.integer :location_id, polymorphic: true, null: false
      t.string :location_type, null: false
      t.integer :position, null: false
    end
    add_index :cards, :game_id
  end
end
