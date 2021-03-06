class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.string :password_digest
      t.string :billing_address
      t.string :shipping_address
      t.string :email
      t.date :birthday

      t.timestamps
    end
  end
end

