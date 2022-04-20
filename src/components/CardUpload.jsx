import React from 'react';
import { useGetData } from '../hooks/useGetData';
import './App.css';

export const CardUpload = () => {

	const data = useGetData();

	console.log(data);

	return (
		<>
			<h1> Card Upload </h1>
			<hr />
		</>
	);
};
