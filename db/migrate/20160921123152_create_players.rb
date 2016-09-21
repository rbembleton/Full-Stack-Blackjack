class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :username, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.integer :game_id
    end
    add_index :players, :username, unique: true
    add_index :players, :session_token, unique: true
  end
end
