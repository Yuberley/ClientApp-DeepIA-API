import { useEffect, useState } from 'react';
import { getData } from '../helper/getData';

export const useGetData = ({image}) => {

	const [state, setState] = useState({
		urlImg: null,
		isLoading: true,
		error: null,
	});

	useEffect(() => {

        try {
            getData()
                .then( urlImg => {
                    setState({
                        data: urlImg,
                        isLoading: false,
                        error: null
                    });
                    
                    console.log(state);
            });
            
            
        } catch (error) {
            setState({
                ...state,
                isLoading: false,
                error: error,
            });
        }

	}, [image]);
	
	return state;

};
