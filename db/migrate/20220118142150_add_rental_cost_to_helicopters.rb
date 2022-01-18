class AddRentalCostToHelicopters < ActiveRecord::Migration[6.1]
  def change
    add_column :helicopters, :rental_cost, :integer
  end
end
