import React from 'react';

import MovieList from '../../components/browse/MovieList';
import Banner from '../../components/browse/Banner';
import Nav from '../../components/browse/Nav';

import './Browse.css';

function Browse() {
	return (
		<div className="app">
			<Nav />
			<Banner />
			{/* truyeenf cac url sang cho movieList */}
			<MovieList title="" isLargeRow fetchUrl="https://api.themoviedb.org/3/discover/tv?api_key=9f2f462864386176df7bfc5b28a07389&with_network=123" />
			<MovieList title="Xu hướng" fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=9f2f462864386176df7bfc5b28a07389&language=en-US" />
			<MovieList title="Xếp hạng cao" fetchUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=9f2f462864386176df7bfc5b28a07389&language=en-US" />
			<MovieList title="Hành động" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=9f2f462864386176df7bfc5b28a07389&with_genres=28" />
			<MovieList title="Hài" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=9f2f462864386176df7bfc5b28a07389&with_genres=35" />
			<MovieList title="Kinh dị" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=9f2f462864386176df7bfc5b28a07389&with_genres=27" />
			<MovieList title="Lãng mạn" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=9f2f462864386176df7bfc5b28a07389&with_genres=10749" />
			<MovieList title="Tài liệu" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=9f2f462864386176df7bfc5b28a07389&with_genres=99" />
		</div>
	);
}

export default Browse;

