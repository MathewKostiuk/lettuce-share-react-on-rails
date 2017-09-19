class AddUsersPostsCategoriesTables < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :description
      t.string :location
      t.string :image

      t.timestamps
    end
  end
end
