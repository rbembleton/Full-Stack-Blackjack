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

  def update
    @user = User.find(params[:id])

    if @user
      if game_params[:game_id] && game_params[:action_type] == 'join'
        @user.join(game_params[:game_id])
        broadcast_game_update(game_params[:game_id])
      elsif game_params[:action_type] == 'leave'
        game_id = @user.game_id
        @user.leave()
        broadcast_game_update(game_id)
      end
      render :show
    else
      render json: "User not found"
    end

  end


  private

  def sign_up_params
    params.require(:user).permit(
      :password,
      :username
    )
  end

  def game_params
    params.require(:user).permit(
      :game_id,
      :action_type
    )
  end

end
