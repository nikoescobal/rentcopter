class CreateHelicopters < ActiveRecord::Migration[6.1]
  def change
    create_table :helicopters do |t|
      t.string :name
      t.text :image
      t.text :description

      t.timestamps
    end
  end
end
