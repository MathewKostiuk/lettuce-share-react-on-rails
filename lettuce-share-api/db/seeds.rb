# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Data ..."

puts "Finding or Creating Categories ..."

# users
puts "Re-creating user"

User.create!({
  email: 'john@doe.com',
  })


cat1 = Category.find_or_create_by! name: 'Left Overs'

puts "Re-creating posts"

Post.destroy_all

cat1.posts.create!({
  title: "Leftover Pizza",
  description: "3 pizzas that never got picked up. 1 Cheese, 1 Hawaiian, 1 Vegetarian. Get em' while they're still warm!",
  image: "http://i.imgur.com/ru9uyCd.jpg",
  user_id: 1,
  location: "Oreganos Fairfield"
  })