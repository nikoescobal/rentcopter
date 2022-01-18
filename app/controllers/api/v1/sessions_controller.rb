class Api::V1::SessionsController < ApplicationController
  def create
    user = User.where(email: params[:email]).first
    if user&.valid_password?(params[:password])
      render json: user.as_json(only: %i[id email authentication_token]), status: :created
    else
      render json: { error: 'Invalid credentials' }, status: :unauthorized
    end
  end

  def destroy
    current_user&.authentication_token = nil
    if current_user&.save
      head(:ok)
    else
      render json: { error: 'Something Went Wrong' }, status: :unauthorized
    end
  end
end
