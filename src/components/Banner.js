import { useState, useEffect } from 'react';
import './Banner.css';
import axios from '../api/axios';
import requests from '../api/Requests';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );

      // console.log(res.data);
      return res;
    };

    fetchData();
  }, []);

  // console.log(movie);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  return (
    <header
      className='banner'
      style={{
        // backgroundImage: 'url(https://i.imgur.com/e1hLQ2m.png)',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner-contents'>
        <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='banner-buttons'>
          <button className='banner-button'>Play</button>
          <button className='banner-button'>My List</button>
        </div>
        <h1 className='banner-description'>
          {truncate(
            movie?.overview,
            150
          )}
        </h1>
      </div>

      <div className='banner-fadeBottom' />
    </header>
  );
};

export default Banner;

// Set response from the api to use state variable