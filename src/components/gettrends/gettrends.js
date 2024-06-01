import { axiosConfig } from 'components/axios/axiosconfig';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//tu mają się wyszukać filmy na czasie

const GetTrends = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axiosConfig.get('/trending/movie/day');
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  const createList = () => {
    return trendingMovies.map(movie => (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`}>
          {movie.title ? movie.title : movie.name}
        </Link>
      </li>
    ));
  };

  return <ul>{createList()}</ul>;
};
export default GetTrends;
