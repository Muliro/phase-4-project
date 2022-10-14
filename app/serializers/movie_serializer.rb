






class MovieSerializer < ActiveModel::Serializer
  attributes :lead_actor, :movie_poster, :director, :id
  has_many :reviews
end
