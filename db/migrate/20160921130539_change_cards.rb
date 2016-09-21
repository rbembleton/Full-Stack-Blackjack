class ChangeCards < ActiveRecord::Migration
  def change
    remove_column :cards, :position
    add_column :cards, :order, :integer, null: false
  end
end
