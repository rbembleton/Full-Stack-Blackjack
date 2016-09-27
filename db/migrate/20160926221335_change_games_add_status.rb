class ChangeGamesAddStatus < ActiveRecord::Migration
  def change
    add_column :games, :status, :string, default: 'new'
  end
end
