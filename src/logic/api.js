import { downTop } from '../animations';
import { popup } from './popup';

export const baseAPI = 'https://gentle-bastion-08437.herokuapp.com/';

export const login = async (mail, password) => {
  await fetch(
    `${baseAPI}login`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        user: {
          email: mail,
          password,
        },
      }),
    },
  ).then((response) => {
    if (response.status !== 200) {
      popup('Invalid credentials', 'red');
    } else {
      sessionStorage.clear();
      downTop();
      const authheader = response.headers.get('Authorization');
      sessionStorage.setItem('token', authheader);
      return response.json();
    }
  }).then((userInfo) => {
    if (userInfo) {
      for (const [key, value] of Object.entries(userInfo)) {
        sessionStorage.setItem(key, value);
      }
      window.location = '#/';
    }
  });
};

export const register = async (name, mail, password) => {
  await fetch(
    `${baseAPI}signup`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        user: {
          name,
          email: mail,
          password,
        },
      }),
    },
  ).then((response) => {
    if (response.status === 200) {
      popup('Registered succesfully! Please log in.', 'green');
      downTop();
      window.location = '#/login';
    } else {
      popup("Couldn't register new account", 'red');
    }
  });
};

export const addHeli = async (name, desc, cost, capacity, range, speed, image) => {
  await fetch(
    `${baseAPI}api/v1/helicopters`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: sessionStorage.getItem('token'),
      },
      body: JSON.stringify({
        helicopter: {
          name,
          description: desc,
          rental_cost: cost,
          capacity,
          flying_range: range,
          flying_speed: speed,
          image,
        },
      }),
    },
  ).then((response) => {
    response.status === 201 ? popup('Helicopter added succesfully', 'green') : popup('Error while adding helicopter', 'red');
  });
};

export const delete_heli = async (id) => {
  await fetch(
    `${baseAPI}api/v1/helicopters/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: sessionStorage.getItem('token'),
      },
    },
  ).then((response) => {
    response.status === 204 ? popup('Helicopter removed succesfully', 'green') : popup('Error while removing helicopter', 'red');
  });
};

export const delete_reservation = async (id) => {
  await fetch(
    `${baseAPI}api/v1/reservations/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: sessionStorage.getItem('token'),
      },
    },
  ).then((response) => {
    response.status === 204 ? popup('Reservation removed succesfully', 'green') : popup('Error while removing reservation', 'red');
  });
};
