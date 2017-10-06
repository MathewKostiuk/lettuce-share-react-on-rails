class UsersController < ApplicationController
  skip_before_action :authenticate, raise: false

  def create
    user = User.new(user_params)
    puts "password=#{user_params[:password]}"
    if user.save!
      jwt = Auth.issue({user: user.id})
      render json: {jwt: jwt}
    else
      render json: {error: 'An erro has occured'}
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
