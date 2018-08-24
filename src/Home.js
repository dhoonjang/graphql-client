import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries.js';
import Movie from './Movie';

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, data, error}) => {
      if (loading) return <span>loading</span>;
      if (error) return <span>something happened</span>;
      if (data) {
        console.log(data);
        return data.movies.map(movie => (
          <Movie
            id={movie.id}
            key={movie.id}
            title={movie.title}
            rating={movie.rating} 
          />
        ));
      }
    }}
  </Query>
);

export default Home;
