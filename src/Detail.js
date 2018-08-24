import React from 'react';
import { Query } from 'react-apollo';
import { MOVIE_DETAIL } from './queries'

const Detail = ({
  match: {
    params: { movieId }
  }
}) => (
  <Query query={MOVIE_DETAIL} variables={{movieId}}>
    {({loading, error, data})=>{
      if(loading) return "loading";
      if(error) return "something happened"
      return (
        <React.Fragment>
          {data.movie.title}<br/>
          {data.movie.rating}<br/>
          {data.movie.description_intro}<br/>
          {data.movie.language}<br/>
          {data.movie.genres}<br/>
        </React.Fragment>
      )
    }}
  </Query>
);

export default Detail;
