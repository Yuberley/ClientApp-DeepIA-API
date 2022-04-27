import { useEffect, useState } from 'react';
import { getData } from '../helper/getData';

export const useGetData = ( imageUpload, category, setImageUpload ) => {

	const [state, setState] = useState({
		urlImg: null,
		isLoading: false,
		error: null,
	});

	useEffect(() => {

        if(imageUpload){

            setState({
                ...state,
                isLoading: true,
                urlImg : false
            });

            try {
                getData( imageUpload, category )
                    .then( urlImg => {
                        setState({
                            urlImg,
                            isLoading: false,
                            error: null
                        });
                });
                setImageUpload(null)
            
            } catch (error) {
                setState({
                    ...state,
                    isLoading: false,
                    error: error,
                });
            }
        }
	}, [ imageUpload ]);
	
	return state;

};
