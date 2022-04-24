
// { imgUrl, services }
export const getData = async () => {
  
    const deepai = require('deepai');
    deepai.setApiKey('90b544fa-e6cc-4240-812c-6ef78a0998d3');

    const { output_url } = await deepai.callStandardApi('colorizer', {
		image: 'https://mott.pe/noticias/wp-content/uploads/2018/03/5-razones-por-las-que-debes-hacer-fotograf%C3%ADas-en-blanco-y-negro-elimina.jpg',
		// image: 'https://www.dzoom.org.es/wp-content/uploads/2010/08/16460653650_36f1de6b60_o-810x540.jpg',
		// image: 'https://i.pinimg.com/originals/b0/60/36/b0603695395212c94607db4e00359513.jpg',
	});  
    
    return output_url;
    
}