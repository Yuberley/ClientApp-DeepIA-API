

export const useGetData = () => {
  
    const deepai = require('deepai');

    deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

    ( async () => {
        const result = await deepai.callStandardApi('colorizer', {
            url: 'https://mott.pe/noticias/wp-content/uploads/2018/03/5-razones-por-las-que-debes-hacer-fotograf%C3%ADas-en-blanco-y-negro-elimina.jpg'
        });
        console.log(result);
        
    })();


}

