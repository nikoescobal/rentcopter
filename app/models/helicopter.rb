class Helicopter < ApplicationRecord
  belongs_to :user
  has_many :reservations, dependent: :destroy

  validates :name, :description, :model, :image, presence: true
end
