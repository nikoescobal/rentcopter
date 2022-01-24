class AddFieldsToHelicopters < ActiveRecord::Migration[6.1]
  def change
    add_column :helicopters, :capacity, :integer
    add_column :helicopters, :flying_range, :integer
    add_column :helicopters, :flying_speed, :integer
    add_column :helicopters, :image, :string
  end
end
