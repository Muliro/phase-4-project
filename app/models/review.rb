







class Review < ApplicationRecord
    validates :review, presence: true
    
    belongs_to :movie
    belongs_to :user
end
