export const baseAPI = "https://gentle-bastion-08437.herokuapp.com/";

export const login = async(mail,password) => {
    await fetch(
        baseAPI+"login",
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            "user":{
                "email": mail,
                "password": password
            }
          }),
        },
      ).then(response => {
          console.log(response.status);
        if ( response.status !== 200 ){
            console.log("Login didn't work");
            return;
        }
        sessionStorage.clear();
        let authheader = response.headers.get('Authorization');
        sessionStorage.setItem('token', authheader);
        return response.json();
      }).then(userInfo => {
        if ( userInfo ){
        for (const [key, value] of Object.entries(userInfo)) {
            sessionStorage.setItem(key, value);
        }
        window.location="/"};
      });
}

export const reserve = async(start, end, helicopter) => {
  await fetch(
    baseAPI+"api/v1/reservations",
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': sessionStorage.getItem('token')
      },
      body: JSON.stringify({
        "reservation":
          {
            "helicopter_id": helicopter.id,
            "date_start": start,
            "date_end": end
          }
      }),
    },
  ).then(response => {
      console.log(response.status);
    if ( response.status == 201 ){
        console.log("Thing created");
        return;
    }
    else {
      console.log("You failed!");
    }
})
}

export const register = async(name,mail,password) => {
  await fetch(
      baseAPI+"signup",
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          "user":{
              "name": name,
              "email": mail,
              "password": password
          }
        }),
      },
    ).then(response => {
        console.log(response.status);
      if ( response.status == 200 ){
          console.log("You did it!");
          return;
      }
      else {
        console.log("Didn't work");
      }
    })
  }

  export const addHeli = async(name, desc, cost, capacity, range, speed, image ) => {
    await fetch(
        baseAPI+'api/v1/helicopters',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': sessionStorage.getItem('token'),
          },
          body: JSON.stringify({
            "helicopter":{
                "name": name,
                "description": desc,
                "rental_cost": cost,
                "capacity": capacity,
                "flying_range": range,
                "flying_speed": speed,
                "image": image
            }
          }),
        },
      ).then(response => {
          console.log(response.status);
        if ( response.status == 201 ){
            console.log("Heli created");
            return;
        }
        else {
          console.log("Didn't work");
        }
      })
    }
