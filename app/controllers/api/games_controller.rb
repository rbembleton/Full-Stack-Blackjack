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
      @game.make_move(:move)
    else
      render json: @game.errors.full_messages
    end

  end

  private

  def game_params
    params.require(:game).permit(:move)
  end


end
