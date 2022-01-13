class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.date :date_start
      t.date :date_end

      t.timestamps
    end
  end
end
