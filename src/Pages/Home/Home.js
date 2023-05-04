import React, { useEffect, useState } from 'react';

import MoviesCard from './MoviesCard';


const Home = () => {

    const [movies, setMovies] = useState()

    useEffect( () =>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])

    return (
        <div>
            <h1>This is home</h1>
            <div className="d-flex  flex-wrap">
            {
                movies?.map(movie => (<MoviesCard key={movie} movie={movie}></MoviesCard>))
            }
            </div>
            
            
        </div>
    );
};

export default Home;