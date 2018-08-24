import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const Movie = ({ id, title, rating }) => (
  <Link to={'/details/' + id + '/'}>
    <div>
      {title} / {rating}
    </div>
  </Link>
);

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
