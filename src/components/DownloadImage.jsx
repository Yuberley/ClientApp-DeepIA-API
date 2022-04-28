import React from 'react';
import { saveAs } from 'file-saver';

export const DownloadImage = ({ urlImg }) => {
	
    const downloadImage = () => {
        saveAs( urlImg, 'output.png' );
    };

	return (
		<div className="flex justify-end p-6 ">

			{
				!!urlImg
				? 
					(
						<button onClick={ downloadImage } className="bg-green-500 flex hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full hover:px-6 transition-all duration-200 animate__animated animate__bounceIn">
							<p> Download </p>
							<svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path
									clipRule="evenodd"
									d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z"
									fillRule="evenodd"
								></path>
							</svg>
						</button>
					)
				:   (
						<button onClick={ downloadImage } className="bg-gray-500 flex hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full hover:px-6 transition-all duration-200 focus:ring-gray-500" disabled>
							<p> Download </p>
							<svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path
									clipRule="evenodd"
									d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z"
									fillRule="evenodd"
								></path>
							</svg>
						</button>
					)
			}

		</div>
	);
};
