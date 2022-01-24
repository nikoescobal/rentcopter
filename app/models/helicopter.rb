class Helicopter < ApplicationRecord
  mount_uploader :avatar, AvatarUploader
  belongs_to :user
  has_many :reservations, dependent: :destroy

  validates :name, :description, :model, presence: true
end
