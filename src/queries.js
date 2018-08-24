import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 8) {
      id
      title
      genres
      rating
    }
  }
`;

export const MOVIE_DETAIL = gql`
  query getMovieDetail($movieId: Int!){
    movie(id: $movieId) {
      title
      rating
      description_intro
      language
      genres
    }
  }
`;
