class User < ApplicationRecord
  has_many :helicopters, dependent: :destroy
  has_many :reservations, dependent: :destroy
end
