require 'test_helper'

class HelicoptersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @helicopter = helicopters(:one)
  end

  test 'should get index' do
    get helicopters_url, as: :json
    assert_response :success
  end

  test 'should create helicopter' do
    assert_difference('Helicopter.count') do
      post helicopters_url, params: { helicopter: {} }, as: :json
    end

    assert_response 201
  end

  test 'should show helicopter' do
    get helicopter_url(@helicopter), as: :json
    assert_response :success
  end

  test 'should update helicopter' do
    patch helicopter_url(@helicopter), params: { helicopter: {} }, as: :json
    assert_response 200
  end

  test 'should destroy helicopter' do
    assert_difference('Helicopter.count', -1) do
      delete helicopter_url(@helicopter), as: :json
    end

    assert_response 204
  end
end
