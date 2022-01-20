import { PropTypes } from 'prop-types';

const HeliDetails = (props) => {
  const {
    helicopter: {
      speed,
      capacity,
      autonomy,
      price_per_day: price,
    },
  } = props;

  return (
    <ul className="heli-details-list">
      <li>
        <span>Speed:</span>
        <span>{`${speed} KTS`}</span>
      </li>
      <li>
        <span>Capacity:</span>
        <span>{`${capacity} People`}</span>
      </li>
      <li>
        <span>Autonomy:</span>
        <span>{`${autonomy} NM`}</span>
      </li>
      <li>
        <span>Price:</span>
        <span>{`${price} USD`}</span>
      </li>
    </ul>
  );
};

HeliDetails.propTypes = {
  helicopter: PropTypes.instanceOf(Object).isRequired,
};

export default HeliDetails;
