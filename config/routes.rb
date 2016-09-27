Rails.application.routes.draw do

  root to: 'static_pages#root'



  namespace :api, defaults: { format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :games, only: [:create, :index, :show, :update, :destroy]
  end

  match "*path", to: "static_pages#root", via: :all

end
