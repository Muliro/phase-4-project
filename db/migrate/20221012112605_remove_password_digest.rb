





class RemovePasswordDigest < ActiveRecord::Migration[6.1]
  def change
    remove_column :movies, :password_digest
  end
end
