class Api::GamesController < ApplicationController

  def create
    @game = Game.new()

    if @game.save
      render :show
    else
      render json: @game.errors.full_messages
    end
  end

  def index
    @games = Game.all()

    if @games
      render :index
    else
      render json: @games.errors.full_messages
    end
  end

  def show
    @game = Game.find(params[:id])

    if @game.save
      render :show
    else
      render json: @game.errors.full_messages
    end
  end

  def destroy
    @game = Game.find(params[:id])

    if @game
      @game.clear
      @game.destroy
      render :show
    else
      render json: @game.errors.full_messages
    end

  end

  def update
    @game = Game.find(params[:id])

    if @game
      if game_params[:game_action]
        if game_params[:game_action] == 'start'
          @game.start
        elsif game_params[:game_action] == 'reset'
          @game.reset
        end
      elsif game_params[:move]
        @game.make_move(game_params[:move].to_sym)
      end
      @game.reload
      render :show
    else
      render json: @game.errors.full_messages
    end

  end

  private

  def game_params
    params.require(:game).permit(:move, :game_action)
  end


end
