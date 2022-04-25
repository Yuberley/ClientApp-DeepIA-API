import React, { useState } from 'react';
import { CardOutput } from './components/CardOutput';
import { CardUpload } from './components/CardUpload';
import { Header } from './components/Header';
import { useGetData } from './hooks/useGetData';



export const ClientApp = () => {

	const [page, setPage] = useState('Image Colorization');
	const { urlImg, isLoading, error } = useGetData(1);


	return (
		<>

			<Header page={ page } setPage={ setPage } />
		
            

			{/* <!-- component --> */}
			<div className="py-16 white">  
					<div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
						<h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">{ page }</h2>
						<div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">

							{/* <!-- CardUpload --> */}
							<CardUpload name={ page }/>

							{/* <!-- CardOutput --> */}
							<CardOutput isLoading={ isLoading } urlImg={ urlImg } />
							

						</div>
					</div>
				</div>

			
				
			
			
		</>
	);
};
