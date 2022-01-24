class AddAvatarToHelicopters < ActiveRecord::Migration[6.1]
  def change
    add_column :helicopters, :avatar, :string
  end
end
