class GamesController < ApplicationController
  def index
  end

  def new
    @sentences = Sentence.order("RAND()").limit(10).pluck(:text5)
    render json: @sentences
    @rank = Rank.new
  end

  def create
    @rank = Rank.new(rank_params)
    if @rank.save
      redirect_to game_path
    else
      render 'new'
    end
  end

  def show
    @rank = Rank.find(params[:id])
  end

  private

  def rank_params
    params.require(:rank).permit(:time, :nickname)
  end

end
