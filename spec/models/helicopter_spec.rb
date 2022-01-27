require 'rails_helper'

RSpec.describe User, type: :model do
  before :each do
    User.create(
      id: 1,
      name: 'Rubén Pire',
      email: 'rubenpire7@gmail.com',
      password: 'iloveburgers'
    )
  end

  subject do
    Helicopter.new(
      id: 1,
      user_id: 1,
      name: 'Copter',
      description: 'Fly like the angel of destruction.',
      rental_cost: 1000,
      capacity: 6,
      image: 'copter.png'
    )
  end

  before { subject.save }

  it 'checks for the presence of "name"' do
    subject.name = nil
    expect(subject).to_not be_valid
  end

  it 'checks for the presence of "description"' do
    subject.description = nil
    expect(subject).to_not be_valid
  end

  it 'checks for the presence of "rental cost"' do
    subject.rental_cost = nil
    expect(subject).to_not be_valid
  end

  it 'checks for the presence of "capacity"' do
    subject.capacity = nil
    expect(subject).to_not be_valid
  end

  it 'checks for the presence of "image"' do
    subject.image = nil
    expect(subject).to_not be_valid
  end
end
