import React, { useState } from 'react';
import { CardUpload } from './components/CardUpload';
import { Header } from './components/Header';



export const ClientApp = () => {

	const [page, setPage] = useState('');


	return (
		<>

			<Header page={ page } setPage={ setPage } />
		
            <CardUpload name={ page }/>

			
				
			
			
		</>
	);
};
