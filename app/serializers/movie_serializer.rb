






class MovieSerializer < ActiveModel::Serializer
  attributes :lead_actor, :movie_poster
  has_many :reviews
end
