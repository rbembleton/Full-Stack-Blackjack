class ChangeCardsAddPolymorphicIndex < ActiveRecord::Migration
  def change
    add_index :cards, [:location_id, :location_type]
  end
end
