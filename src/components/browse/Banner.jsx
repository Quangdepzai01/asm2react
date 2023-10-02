import React, { useState, useEffect } from 'react';
import './Banner.css';

function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=9f2f462864386176df7bfc5b28a07389&language=en-US');
			const data = await response.json();
			//lay 1 bo phim bat ky
			setMovie(
				data.results[
				Math.floor(Math.random() * data.results.length - 1)
				]
			);
		}
		fetchData();
	}, []);
	//hamf cawts ngawnj ddoan van
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	}

	return (
		<header
			className='banner'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url(
				"https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
				)`,
				backgroundPosition: 'center center',
			}}>
			<div className='banner_contents'>
				<h1 className='banner_title'>
					{movie?.title || movie?.name || movie?.original_name}
				</h1>

				<div className='banner_buttons'>
					<button className='banner_button'>Play</button>
					<button className='banner_button'>My List</button>
				</div>
				<h1 className='banner_description'>
					{truncate(movie?.overview, 150)}
				</h1>
			</div>

			<div className='banner--fadeBottom' />
		</header>
	);
}

export default Banner;
