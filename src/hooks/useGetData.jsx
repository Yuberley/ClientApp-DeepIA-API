import React, { useEffect, useState } from 'react'
import { getData } from '../helper/getData';

export const useGetData = ( input ) => {
  
    const [state, setState] = useState({
        urlImg: [],
        isLoading: true,
        error: null
    });


    useEffect(() => {
      
        getData()
        .then( urlImg => { 
            setState({
                data: urlImg,
                isLoading: false,
                error: null
            });
            console.log(urlImg);
        });

        
    
    }, [ input ]);

    return state;
    

}
