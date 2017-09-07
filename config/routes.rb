Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#index'
  resources :campers, only: [:index, :show], to: 'static_pages#index'
end
