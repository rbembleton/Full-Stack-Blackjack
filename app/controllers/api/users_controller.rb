class Api::UsersController < ApplicationController

  def create
    @user = User.new(sign_up_params)

    if @user.save
      sign_in(@user)
      render :show
    else
      render json:  @user.errors.full_messages, status: 422
    end

  end

  def show
    @user = User.find(params[:id])

    if @user
      render :show
    else
      render json: "User not found"
    end
  end

  def


  private

  def sign_up_params
    params.require(:user).permit(
      :password,
      :username
    )
  end

  def 

end
