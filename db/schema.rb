# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160921130856) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.integer "game_id",       null: false
    t.integer "num",           null: false
    t.integer "location_id",   null: false
    t.string  "location_type", null: false
    t.integer "order",         null: false
  end

  add_index "cards", ["game_id"], name: "index_cards_on_game_id", using: :btree
  add_index "cards", ["location_id", "location_type"], name: "index_cards_on_location_id_and_location_type", using: :btree

  create_table "decks", force: :cascade do |t|
    t.integer "game_id", null: false
  end

  add_index "decks", ["game_id"], name: "index_decks_on_game_id", unique: true, using: :btree

  create_table "discard_piles", force: :cascade do |t|
    t.integer "game_id", null: false
  end

  add_index "discard_piles", ["game_id"], name: "index_discard_piles_on_game_id", using: :btree

  create_table "games", force: :cascade do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "hands", force: :cascade do |t|
    t.integer "player_id", null: false
  end

  add_index "hands", ["player_id"], name: "index_hands_on_player_id", unique: true, using: :btree

  create_table "players", force: :cascade do |t|
    t.string  "username",        null: false
    t.string  "session_token",   null: false
    t.string  "password_digest", null: false
    t.integer "game_id"
  end

  add_index "players", ["session_token"], name: "index_players_on_session_token", unique: true, using: :btree
  add_index "players", ["username"], name: "index_players_on_username", unique: true, using: :btree

end
