





class AddUserId < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :user_id, :integer, foreign_key: true
  end
end
