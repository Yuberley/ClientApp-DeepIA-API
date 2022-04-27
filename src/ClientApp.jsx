import React, { useState } from 'react';
import { CardOutput } from './components/CardOutput';
import { CardUpload } from './components/CardUpload';
import { Header } from './components/Header';
import { useGetData } from './hooks/useGetData';

import { getInfoPage }  from './data/infoPage';

export const ClientApp = () => {
	
	const [ page, setPage ] = useState( 'colorizer' );
	const [ imageUpload, setImageUpload ] = useState( null );
	
	const currentPage = getInfoPage( page );
	
	const { urlImg, isLoading } = useGetData( imageUpload, currentPage.category , setImageUpload );
	
	return (
		<>

			<Header setPage={ setPage } />
		         
			{/* <!--  main component --> */}
			<div className="py-16 white">  
					<div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
						<h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">{ currentPage.title }</h2>
						<div className="flex flex-wrap	gap-x-9 gap-y-6">

							{/* <!-- component with card images upload and preview examples --> */}
							<CardUpload 
								imageInput={ currentPage.imageInput } 
								imageOutput={ currentPage.imageOutput }
								imageUpload={ imageUpload } 
								setImageUpload={ setImageUpload } 
								description={ currentPage.description } 
							/>

							{/* <!-- component with images result and download --> */}
							<CardOutput 
								isLoading={ isLoading } 
								urlImg={ urlImg } 
							/>
							
						</div>
					</div>
				</div>
		
		</>
	);
};
