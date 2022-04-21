import React, { useState } from 'react';
import { CardUpload } from './components/CardUpload';

import './components/App.css';

export const ClientApp = () => {

    const [state, setState] = useState();

	return (
		<>
			<h1> ClientApp DeepAI</h1>
			<hr />

            <CardUpload />

		</>
	);
};
