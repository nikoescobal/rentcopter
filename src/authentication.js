export const login = async(mail,password) => {
    await fetch(
        `https://gentle-bastion-08437.herokuapp.com/login`,
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
        let authheader = response.headers.get('Authorization');
        sessionStorage.setItem('token', authheader);
        return response.json();
      }).then(userInfo => {
        Object.keys(userInfo).map(function(key, value) {
            sessionStorage.setItem(key, value);
          });
      });
}

