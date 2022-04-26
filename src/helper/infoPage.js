import input_colorize from './../assets/img/input_colorize.webp';
import ouput_colorize from './../assets/img/ouput_colorize.webp';
import input_resolution from './../assets/img/input_resolution.webp';
import output_resolution from './../assets/img/output_resolution.webp';
import input_toonify from './../assets/img/input_toonify.webp';
import output_toonify from './../assets/img/output_toonify.webp';
import input_deep_dream from './../assets/img/input_deep_dream.webp';
import output_deep_dream from './../assets/img/output_deep_dream.webp';

export const categories = [
    {
        category: 'colorizer',
        title: 'Image Colorization',
        description: 'Colorize an image using a trained model.',
        imageInput: input_colorize,
        imageOutput: ouput_colorize,
    },
    {
        category: 'torch-srgan',
        title: 'Super Resolution',
        description: 'Can upscale images up to 4x while also making it more clear -- making sure you don’t lose clarity even while upscaling an image.',
        image: input_resolution,
        imageOutput: output_resolution,
    },
    {
        category: 'toonify',
        title: 'Toonify',
        description: 'Turn a photo of any face into a cartoon instantly with artificial intelligence. Toonify uses a convolutional neural network to quickly transform the photo into a cartoon.',
        image: input_toonify,
        imageOutput: output_toonify,
    },
    {
        category: 'Deep Dream',
        title: 'Image Colorization',
        description: 'Exaggerates feature attributes or textures using information that the bvlc_googlenet model learned during training.',
        image: input_deep_dream,
        imageOutput: output_deep_dream,
    },

]