![](https://img.shields.io/badge/Microverse-blueviolet)

# Rentcopter Back-end
> This is the backend of the Rentcopter Application, a website that allows users to book luxury helicopters. It features JWT authentication, as well as CRUD operations of the Helicopter, Reservation, and User models. The frontend can be found [here](https://github.com/nikoescobal/rentcopter/tree/dev-front-end).



## Built with
- Ruby
- Rails
- Postgresql
- JWT
- Lots of love :heart:


## Getting Started

**To get this project set up on your local machine, follow these steps:**

1. Open Terminal.
2. Navigate to your desired location to download the contents of this repository.
3. Run `git clone https://github.com/nikoescobal/rentcopter.git`
4. Run `cd dev-backend`
5. Run `bundle install`
6. Run `rails db:reset`
7. Run `rails server` or `rails s`
8. Open http://localhost:3000/ within your browser

**To run the tests, follow these steps:**

1. Ensure you are in the project root directory
2. Ensure you ran `bundle install`
3. run `rspec`

## Endpoints

When the machine is running on your local machine, the endpoints for the corresponding models will be:

*Note: Whenever ":id" is used, replace it with the id of the model*

**User**

Action | Type | Endpoint
------------ | ------------- | -------------
Register User | POST | http://localhost:3000/signup
Login User | POST | http://localhost:3000/login

This is structure of the Body (JSON) for the Registration of a user:

```
{
    "user": 
    {
        "name": "Juliet",
        "email": "juliet@rentcopter.com",
        "password": "123456",
        "admin": true
    }
}

```

This is structure of the Body (JSON) for the Login of a user:

```
{
    "user": 
    {
        "email": "juliet@rentcopter.com",
        "password": "123456",
    }
}
```

**Helicopter**

Action | Type | Endpoint
------------ | ------------- | -------------
Fetch All Helicopters | GET | http://localhost:3000/api/v1/helicopters
Fetch Helicopter | GET | http://localhost:3000/api/v1/helicopters/:id
Create Helicopter | POST | http://localhost:3000/api/v1/helicopters
Delete Helicopter | DELETE | http://localhost:3000/api/v1/helicopters/:id

This is structure of the Body (JSON) for the creation or deletion of a Helicopter:

```
{
    "user_id":1,
    "name":"Poopcopter",
    "image": "image.png",
    "description":"helicopter",
    "rental_cost":5000,
    "flying_range":250,
    "flying_speed":400,
}

```

**Reservation**

Action | Type | Endpoint
------------ | ------------- | -------------
Fetch All Helicopters | GET | http://localhost:3000/api/v1/reservations
Fetch Helicopter | GET | http://localhost:3000/api/v1/reservations/:id
Delete Helicopter | DELETE | http://localhost:3000/api/v1/reservations/:id

This is structure of the Body (JSON) for the creation or deletion of a Reservation:

```
{
    "user_id":1,
    "helicopter_id":1,
    "name":"Poopcopter",
    "date_start":02-02-2022,
    "date_end":02-12-2022,
}

```

## Authors:

👤 **Robert Baiesita**

[<code><img height="26" src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png"></code>](https://github.com/reshyresh)
[<code><img height="26" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png"></code>](https://www.linkedin.com/in/reshyresh/)
 <a href="mailto:reshy@protonmail.com?subject=Sup Reshy?"><img height="26" src="https://cdn.worldvectorlogo.com/logos/official-gmail-icon-2020-.svg"></a>

👤 **Rubén Pire**

[<code><img height="26" src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png"></code>](https://github.com/rpire)
[<code><img height="26" src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"></code>](https://twitter.com/RubenPire7)
[<code><img height="26" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png"></code>](https://www.linkedin.com/in/ruben-d-pire/)
 <a href="mailto:rubenpire7@gmail.com?subject=Sup Rubén?"><img height="26" src="https://cdn.worldvectorlogo.com/logos/official-gmail-icon-2020-.svg"></a>
 
 👤 **Titus Muthomi**

[<code><img height="26" src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png"></code>](https://github.com/Kalunge)
[<code><img height="26" src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"></code>](https://twitter.com/titus_muthomi)
[<code><img height="26" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png"></code>](https://www.linkedin.com/in/muthomi-titus-295024181/)
 <a href="mailto:muthomititus@gmail.com?subject=Sup Titus?"><img height="26" src="https://cdn.worldvectorlogo.com/logos/official-gmail-icon-2020-.svg"></a>
  
 👤 **Nikolas Escobal**

[<code><img height="26" src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png"></code>](https://github.com/nikoescobal)
[<code><img height="26" src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"></code>](https://twitter.com/nikoescobal)
[<code><img height="26" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png"></code>](https://www.linkedin.com/in/nikolas-escobal/)
 <a href="mailto:niko.escobal@gmail.com?subject=Sup Niko?"><img height="26" src="https://cdn.worldvectorlogo.com/logos/official-gmail-icon-2020-.svg"></a>

## 🤝 Contributing

Contributions, issues and feature requests are welcome!


Feel free to check the [issues page](https://github.com/nikoescobal/rentcopter/issues).
## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Microverse

## 📝 MIT License

This project makes use of the MIT license.

