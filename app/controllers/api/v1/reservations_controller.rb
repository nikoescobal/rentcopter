class Api::V1::ReservationsController < ApplicationController
  load_and_authorize_resource
  # GET /reservations
  def index
    @reservations = current_user.reservations
    render json: @reservations
  end

  # GET /reservations/1
  def show
    render json: Reservation.find(params[:id])
  end

  # POST /reservations
  def create
    @reservation = current_user.reservations.new(reservation_params)

    if @reservation.save
      render json: @reservation, status: :created
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reservations/1
  def destroy
    @reservation.destroy
  end

  private

  # Only allow a list of trusted parameters through.
  def reservation_params
    params.require(:reservation).permit(:date_start, :date_end, :helicopter_id)
  end
end
