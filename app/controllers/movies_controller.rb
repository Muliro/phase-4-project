





class MoviesController < ApplicationController
    def index
        render json: Movie.all
    end
    
    def create
        movie = @current_user.movies.create!(movie_params)
        render json: movie, status: :created
    end

    def destroy
        movie = Movie.find_by(id: params[:id])
        if movie
          movie.destroy
          head :no_content
        else
          render json: { error: "Movie not found" }, status: :not_found
        end
    end

    def update
        movie = Movie.find_by(id: params[:id])
        if movie
          movie.update(movie_params)
          render json: movie
        else
          render json: { error: "Movie not found" }, status: :not_found
        end
    end
    
    private
    
    def movie_params
        params.permit(:name, :lead_actor, :movie_poster, :director)
    end
end
