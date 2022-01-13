# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
User.create!(name:"Kalunge")
User.first.helicopters.create!([{name:"Heliii", model:"Z", image:"image", description:"Coolest model in town"}, {name:"copteeer", model:"Z-x", image:"image", description:"Coolest model in town"}])
User.first.reservations.create!()

#   Character.create(name: 'Luke', movie: movies.first)
