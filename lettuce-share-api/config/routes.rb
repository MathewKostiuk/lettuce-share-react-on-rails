Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :posts
    post '/login', to: 'sessions#create'
    post '/register', to: 'users#create'
  end
end
