import { useEffect, useState } from 'react';
import { getData } from '../helper/getData';

export const useGetData = ( imageUpload ) => {

	const [state, setState] = useState({
		urlImg: null,
		isLoading: true,
		error: null,
	});

	useEffect(() => {

        if( imageUpload !== null ) {
            try {
                getData( imageUpload )
                    .then( urlImg => {
                        setState({
                            urlImg,
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
        }

	}, [imageUpload]);
	
	return state;

};
