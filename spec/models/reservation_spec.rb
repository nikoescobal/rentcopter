require 'rails_helper'

RSpec.describe User, type: :model do
  before :each do
    User.create(
      id: 1,
      name: 'Rubén Pire',
      email: 'rubenpire7@gmail.com',
      password: 'iloveburgers'
    )

    Helicopter.create(
      id: 1,
      user_id: 1,
      name: 'Matanga',
      description: 'Fly like the angel of destruction.',
      rental_cost: 1000
    )
  end

  subject do
    Reservation.new(
      id: 1,
      user_id: 1,
      helicopter_id: 1,
      date_start: 'today',
      date_end: 'tomorrow'
    )
  end

  before { subject.save }

  it 'checks for the presence of "start-date"' do
    subject.date_start = nil
    expect(subject).to_not be_valid
  end

  it 'checks for the presence of "end-date"' do
    subject.date_end = nil
    expect(subject).to_not be_valid
  end
end
