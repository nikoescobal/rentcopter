class HelicopterSerializer < ActiveModel::Serializer
  attributes :id, :name, :model, :description, :rental_cost
  belongs_to :user
  has_many :reservations, dependent: :destroy
end
