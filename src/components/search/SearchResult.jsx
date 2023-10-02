import React, { useState, useEffect } from 'react';

import './SearchResult.css';

const base_url = 'https://image.tmdb.org/t/p/original';
//trang search
const SearchResult = ({ query }) => {
	const [movies, setMovies] = useState([]);

	const url = `https://api.themoviedb.org/3/search/movie?api_key=9f2f462864386176df7bfc5b28a07389&language=en-US&query=${query}`;
	//lay du lieu
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(url);
			const data = await response.json();
			setMovies(data.results);
		}
		if (query) {
			fetchData();
		} else {
			setMovies([]);
		}
	}, [url, query]);

	return (
		<div className='row'>
			<h2>Search Result</h2>
			<div className='row_posters search-resul-container sc2'>
				{movies.map((movie) => {
					return (
						<img
							key={movie.id}
							className={`row_poster row_posterLarge`}
							src={`${base_url}${movie.poster_path}`}
							alt={movie.name}
						/>
					);
				})}
			</div>
		</div>
	)
};

export default SearchResult;
