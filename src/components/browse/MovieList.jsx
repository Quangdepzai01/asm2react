import React, { useState, useEffect } from 'react';
import movieTrailer from 'movie-trailer';
import MovieDetail from '../../components/browse/MovieDetail';
import './MovieList.css';

const base_url = 'https://image.tmdb.org/t/p/original';
//hioi han so bo phim trong 1 hang
const movies_limit = 10;

function MovieList({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState('');
	const [selectedMovie, setSelectedMovie] = useState(null);
	//lay du lieu
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(fetchUrl);
			if (!response.ok) {
				throw new Error("something went wrong!");
			}
			const data = await response.json();
			setMovies(data.results);
		}
		fetchData();
	}, [fetchUrl]);

	const handleClick = (movie) => {
		if (selectedMovie && selectedMovie.id === movie.id) {
			setSelectedMovie(null);
			setTrailerUrl('');
		} else {
			setSelectedMovie(movie);
			movieTrailer(movie?.title || '')
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams);
				})
				.catch((error) => console.log(error));
		}
	};

	movies.sort((a, b) => b.popularity - a.popularity);
	movies.splice(movies_limit);

	return (
		<div className='row'>
			<h2 className="movie-list-title">{title}</h2>
			<div className='row_posters sc2'>
				{movies.map((movie) => {
					return (
						<img
							key={movie.id}
							onClick={() => handleClick(movie)}
							className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
							src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
							alt={movie.name}
						/>
					);
				})}
			</div>
			<div style={{ padding: '40px' }}>
				{/* //neu chon vao bo phim thi hien thi thong tin bo phim */}
				{selectedMovie && <MovieDetail movieData={selectedMovie} movieTrailer={trailerUrl} />}
			</div>
		</div>
	);
}

export default MovieList;
