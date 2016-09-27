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

ActiveRecord::Schema.define(version: 20160926223039) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.integer "game_id",                       null: false
    t.integer "num",                           null: false
    t.integer "location_id",                   null: false
    t.string  "location_type",                 null: false
    t.integer "order",                         null: false
    t.boolean "hidden",        default: false
  end

  add_index "cards", ["game_id"], name: "index_cards_on_game_id", using: :btree
  add_index "cards", ["location_id", "location_type"], name: "index_cards_on_location_id_and_location_type", using: :btree

  create_table "dealers", force: :cascade do |t|
    t.integer "game_id", null: false
  end

  add_index "dealers", ["game_id"], name: "index_dealers_on_game_id", unique: true, using: :btree

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
    t.integer  "turn_id",    default: 0
    t.string   "turn_type"
    t.string   "status",     default: "new"
  end

  add_index "games", ["turn_id", "turn_type"], name: "index_games_on_turn_id_and_turn_type", using: :btree

  create_table "hands", force: :cascade do |t|
    t.integer "player_id",   null: false
    t.string  "player_type", null: false
  end

  add_index "hands", ["player_id", "player_type"], name: "index_hands_on_player_id_and_player_type", using: :btree

  create_table "users", force: :cascade do |t|
    t.string  "username",        null: false
    t.string  "session_token",   null: false
    t.string  "password_digest", null: false
    t.integer "game_id"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
