






class ReviewsController < ApplicationController
    def create
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def index
        reviews = Review.all
        render json: reviews
    end

    def update
        review = Review.find_by(id: params[:id])
        if review
          review.update(review_params)
          render json: review
        else
          render json: { error: "Review not found" }, status: :not_found
        end
    end

    def destroy
        review = Review.find_by(id: params[:id])
        if review
          review.destroy
          head :no_content
        else
          render json: { error: "Review not found" }, status: :not_found
        end
    end

    private

    def review_params
        params.permit(:review, :user_id, :movie_id)
    end
end
