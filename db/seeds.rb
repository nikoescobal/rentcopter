# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
user = User.create!(name: 'Tester', username:"Tester", email:"user@gmail.com", password:"123456", admin: false)
user1 = User.create!(name:"Kalunge", username:"Titus", email:"kalunge@gmail.com", password:"123456", admin: true)
user2 = User.create!(name:"Niko", username:"Niko", email:"niko.escobal@gmail.com", password:"123456", admin: true)
user3 = User.create!(name:"Reshy", username:"Reshy", email:"reshyresh@gmail.com", password:"123456", admin: true)
user4 = User.create!(name:"Ruben", username:"Ruben", email:"rpire@gmail.com", password:"123456", admin: true)
user5 = User.create!(name:"Admin", username:"Admin", email:"admin@test.com", password:"123456", admin: true)

copter1 = Helicopter.create!(name: "Copter-X", image:"https://luxcior.com/wp-content/uploads/2021/03/Beverly-Hills-Magazine-luxury-helicopters-for-sale-private-helicopter-EUROCOPTERS-5.jpg", description: "Ultra Luxury Heli. Comes with jacuzzi.", rental_cost:500, capacity:6, flying_range:350, flying_speed:260, user_id:1)
copter2 = Helicopter.create!(name: "Apache-Y", image:"https://www.wheremilan.com/wp-content/uploads/2017/09/helitaly-1.jpg", description: "Military Escort Heli. Comes with three soldiers.",rental_cost:400,  capacity:8, flying_range:450, flying_speed:460, user_id:2)
copter3 = Helicopter.create!(name: "Deli-Heli", image:"https://www.beverlyhillsmagazine.com/wp-content/uploads/Beverly-Hills-Magazine-shop-luxury-helicopters-for-sale-private-helicopter-AGUSTA-3.jpg", description: "Get your deli meats with Deli-heli. Comes with charcuterie and gelato.",rental_cost:400,  capacity:10, flying_range:360, flying_speed:250, user_id:3)
copter4 = Helicopter.create!(name: "Airstriker", image:"https://www.xluxuo.com/wp-content/uploads/2020/10/Hill-Helicopters-HX50-1-scaled-1.jpg", description: "Airstrikes on demand. Comes with a desired hitman of choice to finish off remaining targets.",rental_cost:1000, capacity:12, flying_range:750, flying_speed:560,  user_id:4)

reservation1 = Reservation.create!(date_start:Time.now, date_end:Time.now, user_id:1, helicopter_id:1)
reservation2 = Reservation.create!(date_start:Time.now, date_end:Time.now, user_id:2, helicopter_id:2)
reservation3 = Reservation.create!(date_start:Time.now, date_end:Time.now, user_id:3, helicopter_id:3)
reservation4 = Reservation.create!(date_start:Time.now, date_end:Time.now, user_id:4, helicopter_id:4)
