import React from 'react'
import moviesData from "../App"
const MovieList = (props) => {
  return (
    <>
			{props.movies.map((moviesData) => (
				<div>
				<h1>{moviesData.name}</h1>
        <img src={moviesData.image}alt={moviesData.image}></img>
        <h3>{moviesData.description}</h3>
        <h4>{moviesData.type}</h4>
        <p>{moviesData.date}</p>
        <p>{moviesData.rating}</p>
				</div>
			))}
		</>
	);
};
export default MovieList