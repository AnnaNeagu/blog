Rails.application.routes.draw do
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  devise_for :users, controller: {
    sessions: 'users/session'
  }

  root "articles#index"

  resources :articles do
    resources :comments
  end


  namespace :apis do
    namespace :articles do
      namespace :v1 do
        get 'articles', to: "articles#articles"
      end
    end
  end
end
