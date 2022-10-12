# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Movie.create({"name": "bullet train", "lead_actor": "Tom hanks", "director": "Guillermo Del Toro", "movie_poster": "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbullet-train&psig=AOvVaw3EVTmlIaToX_eQu0A4GaqG&ust=1665660961986000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCIjljdzM2voCFQAAAAAdAAAAABAE"})

Review.create({"review": "Awesome movie", "movie_id": 1, "user_id": 1})

Review.create({"review": "highly recommend", "movie_id": 1, "user_id": 1})

User.create({"username": "Michael Muliro", "password_digest": "relapse"})
