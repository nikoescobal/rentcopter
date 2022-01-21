class User < ApplicationRecord
  devise :database_authenticatable,
         :registerable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  has_many :helicopters, dependent: :destroy
  has_many :reservations, dependent: :destroy

  validates :name, :email, :password, presence: true
end
