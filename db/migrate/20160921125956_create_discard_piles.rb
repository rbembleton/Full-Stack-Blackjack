class CreateDiscardPiles < ActiveRecord::Migration
  def change
    create_table :discard_piles do |t|
      t.integer :game_id, null: false
    end
    add_index :discard_piles, :game_id
  end
end
