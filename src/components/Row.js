import './Row.css';

import axios from '../api/axios';
import { useState, useEffect } from 'react';

const Rows = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const baseUrl = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
      return res;
    };

    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row-posters'>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Rows;
