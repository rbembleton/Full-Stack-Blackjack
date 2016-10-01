class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :signed_in?

  private

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def sign_out
    sign_out_and_leave_games
    @current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def sign_out_and_leave_games
    current_game_id = @current_user.game_id
    @current_user.leave()
    broadcast_game_update(current_game_id)
    broadcast_all_games_update()
  end

  def sign_in(user)
    sign_out
    @current_user = user
    session[:session_token] = @current_user.reset_session_token!
  end

  def signed_in?
    !!current_user
  end

  def broadcast_game_update(game_id)
    return unless game_id
    Pusher.trigger(
      "game_channel_#{game_id}",
      'update_game',
      {}
    )
  end

  def broadcast_all_games_update()
    Pusher.trigger(
      "all_games_channel",
      'update_games',
      {}
    )
  end

end
