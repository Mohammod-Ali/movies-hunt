import React, { useEffect, useState } from 'react';

import MoviesCard from './MoviesCard';


const Home = ({setMovieDetails}) => {

    const [movies, setMovies] = useState()

    useEffect( () =>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])

    return (
        <div>
            <h1>Select Your Movies</h1>
            <div className="d-flex  flex-wrap">
            {
                movies?.map(movie => (<MoviesCard key={movie} movie={movie}
                    setMovieDetails={setMovieDetails}
                ></MoviesCard>))
            }
            </div>
        </div>
    );
};

export default Home;