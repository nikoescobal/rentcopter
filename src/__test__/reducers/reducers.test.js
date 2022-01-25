import helicoptersReducer, { loadHelicoptersSuccess } from "../../redux/reducers/helicopters";
import reservationsReducer, { loadReservationsSuccess } from "../../redux/reducers/reservations";
import helicopter from "../mockHeli";
import reservation from "../mockReservation";

describe('Reducers working correctly', () => {
    test('Helicopters reducer should return initial state', () => {
      expect(helicoptersReducer(undefined, {})).toEqual(
        {
            helicopters_arr: [],
            loading: true,
        },
      );
    });
  
    test('Reservations reducer should return initial state', () => {
      expect(reservationsReducer(undefined, {})).toEqual(
        {
            reservations_arr: [],
            loading: true,
        },
      );
    });
  
    test('Helicopter reducer should add payload to helicopters', () => {
      const previousState = {};
      expect(helicoptersReducer(previousState, loadHelicoptersSuccess(helicopter))).toEqual(
        {
          helicopters_arr: {
                "id": 1,
                "name": "Copter-X",
                "description": "Ultra Luxury Heli. Comes with jacuzzi.",
                "rental_cost": 500,
                "capacity": 6,
                "flying_range": 350,
                "flying_speed": 260,
                "image": "https://luxcior.com/wp-content/uploads/2021/03/Beverly-Hills-Magazine-luxury-helicopters-for-sale-private-helicopter-EUROCOPTERS-5.jpg",
                "user": {
                "id": 1,
                "name": "Tester",
                "admin": false,
                "username": "Tester"
                },
            },
            "loading": false,
        });
    });

    test('Reservations reducer should add payload to reservations', () => {
        const previousState = {};
        expect(reservationsReducer(previousState, loadReservationsSuccess(reservation))).toEqual(
          {
            reservations_arr: {
                "id": 1,
                "date_start": "2022-01-24",
                "date_end": "2022-01-24",
                "user": {
                  "id": 1,
                  "name": "Tester",
                  "admin": false,
                  "username": "Tester"
                },
                "helicopter": {
                  "id": 1,
                  "name": "Copter-X",
                  "description": "Ultra Luxury Heli. Comes with jacuzzi.",
                  "rental_cost": 500,
                  "capacity": 6,
                  "flying_range": 350,
                  "flying_speed": 260,
                  "image": "https://luxcior.com/wp-content/uploads/2021/03/Beverly-Hills-Magazine-luxury-helicopters-for-sale-private-helicopter-EUROCOPTERS-5.jpg"
                }
              },
              "loading": false,
          });
      });

  });