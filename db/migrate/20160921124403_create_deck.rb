class CreateDeck < ActiveRecord::Migration
  def change
    create_table :decks do |t|
      t.integer :game_id, null: false
    end
    add_index :decks, :game_id, unique: true
  end
end
