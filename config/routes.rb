Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  
  devise_for :users,
    defaults: { format: :json },
    path: '',
    path_names: {
      sign_in: '/login',
      sign_out: '/logout',
      registration: '/signup'
    },
    controllers: {
      sessions: 'sessions',
      registrations: 'registrations'
    }
  namespace :api do
    namespace :v1 do
      resources :helicopters, only: [:index, :create, :destroy, :show]
      resources :sessions, only: [:create, :destroy]
      resources :reservations, only: [:index, :create, :destroy]
      resources :users, only: [:index, :create, :show] 
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
 