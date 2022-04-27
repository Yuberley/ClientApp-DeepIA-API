

export const getData = async ( imageUpload, category = 'colorizer' ) => {
  
    const deepai = require('deepai');
    deepai.setApiKey('90b544fa-e6cc-4240-812c-6ef78a0998d3');

    if (imageUpload !== null) {
        const { output_url } = await deepai.callStandardApi(category, {
            image: imageUpload,
        }); 
        console.log(output_url);
        return output_url;
    
    } 
    
    
}