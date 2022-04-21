
// { imgUrl, services }
export const getData = async () => {
  
    const deepai = require('deepai');
    deepai.setApiKey('90b544fa-e6cc-4240-812c-6ef78a0998d3');

    const { output_url } = await deepai.callStandardApi('colorizer', {
		image: 'https://mott.pe/noticias/wp-content/uploads/2018/03/5-razones-por-las-que-debes-hacer-fotograf%C3%ADas-en-blanco-y-negro-elimina.jpg',
	});  
    
    return output_url;
    
}