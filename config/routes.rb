Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  
  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :helicopters, only: [:index, :create, :destroy, :show]
      resources :sessions, only: [:create, :destroy]
      resources :users, only: [:create] do
        resources :reservations, only: [:index, :create, :destroy]
      end
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
 