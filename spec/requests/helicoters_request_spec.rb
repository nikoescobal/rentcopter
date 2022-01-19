require 'rails_helper'

RSpec.describe 'Helicopters API', type: :request do
  describe 'GET /helicopters' do
    before do
      user = User.create(name: 'Tester')
      Helicopter.create!(name: "Copter-X", model:"Z", image:"copter-x.png", description: "Ultra Luxury Heli. Comes with jacuzzi.", rental_cost:50000, user_id:user)
      Helicopter.create!(name: "Apache-Y", model:"Z", image:"apache-y.png", description: "Military Escort Heli. Comes with three soldiers.",rental_cost:40000, user_id:user)
      Helicopter.create!(name: "Deli-Heli", model:"Z", image:"deli-heli.png", description: "Get your deli meats with Deli-heli. Comes with charcuterie and gelato.",rental_cost:40000, user_id:user)
      Helicopter.create!(name: "Airstriker", model:"Z", image:"airstriker.ng", description: "Airstrikes on demand. Deploy a desired hitman of choice to finish off targets.",rental_cost:100000, user_id:user)
      get '/api/v1/helicopters'
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end

    it 'returns helicopters' do
      json = JSON.parse(response.body)
      expect(json).not_to be_empty
      expect(json.size).to eq(3)
    end
  end

  describe 'GET /helicopters/:id' do
    before do
      user = User.create(name: 'Tester')
      house1 = Helicopter.create(title: 'Helicopter_1', house_description: 'First helicopter description', location: 'London',
                            image: 'img_url', price: 250, availability: 24, discount: 2.5, user: user)
      Helicopter.create(title: 'Helicopter_2', house_description: 'Second helicopter description', location: 'Rome',
                   image: 'img_url', price: 350, availability: 12, discount: 2.5, user: user)
      Helicopter.create(title: 'Helicopter_3', house_description: 'Third helicopter description', location: 'Paris',
                   image: 'img_url', price: 450, availability: 12, discount: 3, user: user)

      get "/api/v1/users/#{user.id}/helicopters/#{house1.id}"
    end

    it 'returns the helicopter with id=1' do
      json = JSON.parse(response.body)
      expect(json['title']).to eq('Helicopter_1')
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'POST /helicopters' do
    before do
      @user = User.create(name: 'Tester')
    end

    it 'creates a new helicopter' do
      expect do
        post "/api/v1/users/#{@user.id}/helicopters", params: {
          helicopter: {
            title: 'Helicopter_4',
            house_description: 'Fourth helicopter description',
            location: 'Berlin',
            image: 'no-image',
            price: 150,
            availability: 24,
            discount: 2.5,
            user_id: @user.id
          }
        }
      end.to change { Helicopter.count }.from(0).to(1)

      expect(response).to have_http_status(:created)
    end
  end

  describe 'DELETE /helicopters/:id' do
    before do
      @user = User.create(name: 'Tester')
      @helicopter1 = Helicopter.create!(name: "Copter-X", model:"Z", image:"copter-x.png", description: "Ultra Luxury Heli. Comes with jacuzzi.", rental_cost:50000, user_id:1)
      @helicopter2 = Helicopter.create!(name: "Apache-Y", model:"Z", image:"apache-y.png", description: "Military Escort Heli. Comes with three soldiers.",rental_cost:40000, user_id:2)
      @helicopter3 = Helicopter.create!(name: "Airstriker", model:"Z", image:"airstriker.png", description: "Airstrikes on demand. Deploy a desired hitman of choice to finish off targets.",rental_cost:100000, user_id:4)
    end

    it 'deletes a helicopter' do
      expect do
        delete "/api/v1/users/#{@user.id}/helicopters/#{@helicopter1.id}"
      end.to change { Helicopter.count }.from(3).to(2)

      expect(response).to have_http_status(:no_content)
    end
  end
end