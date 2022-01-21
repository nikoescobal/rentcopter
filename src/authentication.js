export const login = async(mail,password) => {
    await fetch(
        `https://gentle-bastion-08437.herokuapp.com/login`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: {
              "user" : {
                  "email" : mail,
                  "password" : password
              }
          }
        },
      );
}