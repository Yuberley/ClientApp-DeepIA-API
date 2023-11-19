

export const getData = async ( imageUpload, category = 'colorizer' ) => {
  
    const deepai = require('deepai');
    deepai.setApiKey('b4db127f-dae6-4eb3-8f22-3538b3882f19');

    if (imageUpload !== null) {
        const { output_url } = await deepai.callStandardApi(category, {
            image: imageUpload,
        }); 
        
        return output_url;
    
    } 
    
    
}
