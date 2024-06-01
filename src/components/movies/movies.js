import { useState } from 'react';
import GetMoviesByName from './moviesearch';

//formulaż do wyszukiwania filmów w api

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = async e => {
    e.preventDefault();
    setSearchTerm(query);
  };

  return (
    <main>
      <form onSubmit={handleSearch}>
        <input type="text" onChange={e => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <GetMoviesByName query={searchTerm} />
    </main>
  );
};

export default Movies;
