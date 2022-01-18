class Api::V1::HelicoptersController < ApplicationController
  before_action :set_helicopter, only: %i[show update destroy]

  # GET /helicopters
  def index
    @helicopters = Helicopter.all

    render json: @helicopters
  end

  # GET /helicopters/1
  def show
    render json: @helicopter
  end

  # POST /helicopters
  def create
    @helicopter = Helicopter.new(helicopter_params)

    if @helicopter.save
      render json: @helicopter, status: :created, location: @helicopter
    else
      render json: @helicopter.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /helicopters/1
  def update
    if @helicopter.update(helicopter_params)
      render json: @helicopter
    else
      render json: @helicopter.errors, status: :unprocessable_entity
    end
  end

  # DELETE /helicopters/1
  def destroy
    @helicopter.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_helicopter
    @helicopter = Helicopter.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def helicopter_params
    params.fetch(:helicopter, {})
  end
end