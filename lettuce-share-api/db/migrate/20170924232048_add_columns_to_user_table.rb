class AddColumnsToUserTable < ActiveRecord::Migration[5.0]
  def change
    change_table :users do |t|
      t.string :name, :password_digest
    end
  end
end
