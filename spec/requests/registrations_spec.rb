require 'swagger_helper'

RSpec.describe 'registrations', type: :request do
  path '/signup' do
    post('create registration') do
      tags 'User registration'
      consumes 'aplication/json'
      parameter name: :sign_up, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          email: { type: :string },
          password: { type: :string }
        },
        required: %w[name email password]
      }
      response(200, '') do
        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end
end
