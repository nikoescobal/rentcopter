class HelicopterSerializer < ActiveModel::Serializer
  attributes :id, :name, :model, :description
  belongs_to :user
  has_many :reservations, dependent: :destroy
end
