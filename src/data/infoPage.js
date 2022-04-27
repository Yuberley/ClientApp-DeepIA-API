import input_colorize from './../assets/img/input_colorize.webp';
import output_colorize from './../assets/img/output_colorize.webp';
import input_resolution from './../assets/img/input_resolution.webp';
import output_resolution from './../assets/img/output_resolution.webp';
import input_toonify from './../assets/img/input_toonify.webp';
import output_toonify from './../assets/img/output_toonify.webp';
import input_deep_dream from './../assets/img/input_deep_dream.webp';
import output_deep_dream from './../assets/img/output_deep_dream.webp';

const categories = [
    {
        category: 'colorizer',
        title: 'Image Colorization',
        description: 'Colorize black and white images using the image colorization API. Add color to old family photos and historic images.',
        imageInput: input_colorize,
        imageOutput: output_colorize,
    },
    {
        category: 'torch-srgan',
        title: 'Super Resolution',
        description: 'Can upscale images up to 4x while also making it more clear making sure you don’t lose clarity even while upscaling an image.',
        imageInput: input_resolution,
        imageOutput: output_resolution,
    },
    {
        category: 'toonify',
        title: 'Toonify',
        description: 'Turn a photo of any face into a cartoon instantly with artificial intelligence. Toonify uses a convolutional neural network to quickly transform the photo into a cartoon.',
        imageInput: input_toonify,
        imageOutput: output_toonify,
    },
    {
        category: 'deepdream', 
        title: 'Deep Dream',
        description: 'Exaggerates feature attributes or textures using information that the bvlc_googlenet model learned during training.',
        imageInput: input_deep_dream,
        imageOutput: output_deep_dream,
    },

]

export  const getInfoPage = ( category ) =>  categories.find( ( page ) => page.category === category );