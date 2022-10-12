class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.string :lead_actor
      t.string :director
      t.string :movie_poster
      t.string :password_digest

      t.timestamps
    end
  end
end
