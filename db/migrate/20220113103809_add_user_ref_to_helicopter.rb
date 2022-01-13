class AddUserRefToHelicopter < ActiveRecord::Migration[6.1]
  def change
    add_reference :helicopters, :user, null: false, foreign_key: true
  end
end
