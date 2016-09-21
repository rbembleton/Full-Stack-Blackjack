class CreateDealer < ActiveRecord::Migration
  def change
    create_table :dealers do |t|
      t.integer :game_id, null: false
    end
    add_index :dealers, :game_id, unique: true
  end
end
