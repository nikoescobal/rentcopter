class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :date_start, :date_end
  belongs_to :user
  belongs_to :helicopter
end
