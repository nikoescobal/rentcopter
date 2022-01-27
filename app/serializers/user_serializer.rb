class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :admin, :username
  has_many :helicopters, dependent: :destroy
  has_many :reservations, dependent: :destroy
end
