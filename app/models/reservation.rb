class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :helicopter

  validates :date_start, :date_end, presence: true
end
