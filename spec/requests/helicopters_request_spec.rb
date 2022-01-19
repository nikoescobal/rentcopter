require 'rails_helper'

RSpec.describe 'Helicopters API', type: :request do
  describe 'GET /helicopters' do
    before do
      User.create!(name: 'Tester', email:"user@gmail.com", password:"123456", admin: true, id:1)
      Helicopter.create!(name: "Copter-X", model:"Z", image:"copter-x.png", description: "Ultra Luxury Heli. Comes with jacuzzi.", rental_cost:50000, user_id:1, id:1)
      Helicopter.create!(name: "Apache-Y", model:"Z", image:"apache-y.png", description: "Military Escort Heli. Comes with three soldiers.",rental_cost:40000, user_id:1, id:2)
      Helicopter.create!(name: "Deli-Heli", model:"Z", image:"deli-heli.png", description: "Get your deli meats with Deli-heli. Comes with charcuterie and gelato.",rental_cost:40000, user_id:1, id:3)
      Helicopter.create!(name: "Airstriker", model:"Z", image:"airstriker.ng", description: "Airstrikes on demand. Deploy a desired hitman of choice to finish off targets.",rental_cost:100000, user_id:1, id:4)
      get '/api/v1/helicopters'
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end

    it 'returns helicopters' do
      json = JSON.parse(response.body)
      expect(json).not_to be_empty
      expect(json.size).to eq(4)
    end
  end

  describe 'GET /helicopters/:id' do
    before do
      user = User.create!(name: 'Tester', email:"user@gmail.com", password:"123456", admin: true, id: 4)
      Helicopter.create!(name: "Copter-X", model:"Z", image:"copter-x.png", description: "Ultra Luxury Heli. Comes with jacuzzi.", rental_cost:50000, user_id:4, id:1)
      Helicopter.create!(name: "Apache-Y", model:"Z", image:"apache-y.png", description: "Military Escort Heli. Comes with three soldiers.",rental_cost:40000, user_id:4, id:2)
      Helicopter.create!(name: "Deli-Heli", model:"Z", image:"deli-heli.png", description: "Get your deli meats with Deli-heli. Comes with charcuterie and gelato.",rental_cost:40000, user_id:4, id:3)
      Helicopter.create!(name: "Airstriker", model:"Z", image:"airstriker.ng", description: "Airstrikes on demand. Deploy a desired hitman of choice to finish off targets.",rental_cost:100000, user_id:4, id:4)

      get "/api/v1/helicopters/#{user.id}"
    end

    it 'returns the helicopter with id=4' do
      json = JSON.parse(response.body)
      expect(json['name']).to eq('Airstriker')
      expect(response).to have_http_status(:ok)
    end
  end

  # describe 'POST /helicopters' do
  #   before do
  #     @user = User.create(name: 'Tester')
  #   end

  #   it 'creates a new helicopter' do
  #     expect do
  #       post "/api/v1/users/#{@user.id}/helicopters", params: {
  #         helicopter: {
  #           name: 'Helicopter_4',
  #           helicopter_description: 'Fourth helicopter description',
  #           location: 'Berlin',
  #           image: 'no-image',
  #           price: 150,
  #           availability: 24,
  #           discount: 2.5,
  #           user_id: @user.id
  #         }
  #       }
  #     end.to change { Helicopter.count }.from(0).to(1)

  #     expect(response).to have_http_status(:created)
  #   end
  # end

  # describe 'DELETE /helicopters/:id' do
  #   before do
  #     user = User.create!(name: 'Tester', email:"user@gmail.com", password:"123456", admin: true)
  #     @helicopter1 = Helicopter.create!(name: "Copter-X", model:"Z", image:"copter-x.png", description: "Ultra Luxury Heli. Comes with jacuzzi.", rental_cost:50000, user_id:1)
  #     @helicopter2 = Helicopter.create!(name: "Apache-Y", model:"Z", image:"apache-y.png", description: "Military Escort Heli. Comes with three soldiers.",rental_cost:40000, user_id:2)
  #     @helicopter3 = Helicopter.create!(name: "Airstriker", model:"Z", image:"airstriker.png", description: "Airstrikes on demand. Deploy a desired hitman of choice to finish off targets.",rental_cost:100000, user_id:4)
  #   end

  #   it 'deletes a helicopter' do
  #     expect do
  #       delete "/api/v1/users/#{@user.id}/helicopters/#{@helicopter1.id}"
  #     end.to change { Helicopter.count }.from(3).to(2)

  #     expect(response).to have_http_status(:no_content)
  #   end
  # end
end