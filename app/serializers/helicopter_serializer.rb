class HelicopterSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :rental_cost, :capacity, :flying_range, :flying_speed, :image
  belongs_to :user
  has_many :reservations, dependent: :destroy
end
