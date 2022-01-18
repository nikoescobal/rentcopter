Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :helicopters, only: [:index, :create, :destroy, :show]
      resources :users, only: [:index, :create] do
        resources :reservations, only: [:index, :create, :destroy]
      end
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
