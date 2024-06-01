import { axiosConfig } from 'components/axios/axiosconfig';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//to ma zrobić listę filmów po wyszukaniu nazwy w api

const GetMoviesByName = ({ query }) => {
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesByName = async () => {
      try {
        const response = await axiosConfig.get(`/search/movie?query=${query}`);
        setSearchedMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchMoviesByName();
  }, [query]);

  const createList = () => {
    return searchedMovies.map(movie => (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`}>
          {movie.title ? movie.title : movie.name}
        </Link>
      </li>
    ));
  };

  return <ul>{createList()}</ul>;
};

export default GetMoviesByName;
