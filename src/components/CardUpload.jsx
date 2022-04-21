import React from 'react';
import { useGetData } from '../hooks/useGetData';


export const CardUpload = () => {
 
	const { urlImg, isLoading, error } = useGetData('input');

	// console.log(urlImg);

	return (
		<>
			
		</>
	);
};
