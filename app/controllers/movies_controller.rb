





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
        def update
            bird = Bird.find_by(id: params[:id])
            if bird
              bird.update(bird_params)
              render json: bird
            else
              render json: { error: "Bird not found" }, status: :not_found
            end
        end
    end
    
    private
    
    def movie_params
        params.permit(:name, :lead_actor, :movie_poster)
    end
end
