class AddCommentsTableAndTransactionsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.belongs_to :commentable, polymorphic: true

      t.timestamps
    end
    add_index :comments, [:commentable_id, :commentable_type]

    create_table :transactions do |t|
      t.timestamps
    end
  end
end
