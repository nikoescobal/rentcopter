import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { dateDifference, TODAY, MONTHLATER } from '../logic/date';
import { reserve } from '../logic/api';

const HeliForm = (props) => {
  const {
    helicopter: {
      rental_cost: price,
    },
  } = props;

  const initialForm = {
    'start-date': TODAY,
    'end-date': TODAY,
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const amount = dateDifference(form['start-date'], form['end-date'], price);

  const messageVerifier = (amount) => {
    if (amount > 0) {
      return `Reservation cost: ${amount} USD`;
    }
    return 'Invalid end-date';
  };

  const classVerifier = (amount) => {
    if (amount > 0) {
      return 'text-center text-green-400 mb-5';
    }
    return 'text-center text-red-400 mb-5';
  };

  return (
    <form className="flex flex-col" id="reserve_form">
      <div className="flex space-evenly mb-10">
        <label htmlFor="date-start" className="text-center">
          <span>Reservation start-date:</span>
          <input
            type="date"
            id="start_date"
            name="start-date"
            min={TODAY}
            max={MONTHLATER}
            placeholder="from"
            className="bg-gray-600 rounded-full p-2"
            value={form['start-date']}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="date-end" className="text-center">
          <span>Reservation end-date:</span>
          <input
            type="date"
            id="end_date"
            name="end-date"
            min={TODAY}
            max={MONTHLATER}
            placeholder="until"
            className="bg-gray-600 rounded-full p-2"
            value={form['end-date']}
            onChange={handleChange}
          />
        </label>
      </div>
      <span className={classVerifier(amount)}>
        {messageVerifier(amount)}
      </span>
      <button
        type="button"
        className="heli-form-button"
        onClick={(e) => {
          e.preventDefault;
          console.log(props.helicopter);
          const reserve_form = document.getElementById('reserve_form');
          reserve(reserve_form.start_date.value, reserve_form.end_date.value, props.helicopter);
        }}
      >
        RESERVE
      </button>
    </form>
  );
};

HeliForm.propTypes = {
  helicopter: PropTypes.instanceOf(Object).isRequired,
};

export default HeliForm;
