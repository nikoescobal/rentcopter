class Helicopter < ApplicationRecord
  mount_uploader :avatar, AvatarUploader
  belongs_to :user
  has_many :reservations, dependent: :destroy

  validates :name, :description, :model, :image, presence: true
end
