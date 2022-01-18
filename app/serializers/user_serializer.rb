class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :admin
  has_many :helicopters, dependent: :destroy
  has_many :reservations, dependent: :destroy
end
