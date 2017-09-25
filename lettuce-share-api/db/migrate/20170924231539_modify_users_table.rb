class ModifyUsersTable < ActiveRecord::Migration[5.0]
  def change
    change_table :users do |t|
      t.remove_index :reset_password_token
      t.remove :encrypted_password, :reset_password_token, :reset_password_sent_at, :remember_created_at, :sign_in_count, :current_sign_in_at, :last_sign_in_at, :current_sign_in_ip, :last_sign_in_ip
    end
  end
end
