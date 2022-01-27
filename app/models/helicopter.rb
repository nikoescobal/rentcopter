class Helicopter < ApplicationRecord
  belongs_to :user
  has_many :reservations, dependent: :destroy

  validates :name, :description, :rental_cost, :capacity, :image, presence: true
end
