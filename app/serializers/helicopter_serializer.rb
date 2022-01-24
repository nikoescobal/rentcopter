class HelicopterSerializer < ActiveModel::Serializer
  attributes :id, :name, :model, :description, :rental_cost, :capacity, :flying_range, :flying_speed, :avatar
  belongs_to :user
  has_many :reservations, dependent: :destroy
end
