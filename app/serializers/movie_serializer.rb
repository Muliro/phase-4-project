






class MovieSerializer < ActiveModel::Serializer
  attributes :lead_actor, :movie_poster, :director
  has_many :reviews
end
