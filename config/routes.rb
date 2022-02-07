Rails.application.routes.draw do
  devise_for :user_logins
  resources :users
  root "articles#index"

  resources :articles do
    resources :comments
  end
end
