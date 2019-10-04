import React from 'react';
import MovieC from './MovieC';
import LoadingHOC from './HOC';


const MovieList = ({ movies }) => {

    return (
        <div className='list-movie'>

            {movies.map(el => <MovieC key={el.id} Y={el} />)}
        </div>
    );
}

export default LoadingHOC(MovieList);
