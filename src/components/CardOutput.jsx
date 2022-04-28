import React from 'react';
import { DownloadImage } from './DownloadImage';
import { Loading } from './Loading';
import 'animate.css';

import imagen_default from './../assets/img/imagen_default.png';

export const CardOutput = ({ isLoading, urlImg }) => {

	return (
		<>
			<div className="flex-1 p-6 border border-gray-100 rounded-xl">					
				<div style={{"minHeight" : "25rem"}} className='bg-gray-50 sm:space-x-8 sm:p-8 p-3 text-center flex flex-row justify-center items-center shadow-lg mb-6'>
				{
					isLoading && !urlImg
					? 	(
							<div className="space-y-4 mt-4 text-center">
									<h6 className="text-lg font-semibold leading-none">Your image will be displayed here</h6>
									<span className="text-xs text-gray-500">after processed</span>
									<div className='mx-auto w-32 h-32'>
										<Loading />
									</div>
							</div>	
						)
					: urlImg ? 
						(
							<img className="w-100 h-80	mx-auto rounded" src={ urlImg } alt="user avatar"  loading="lazy" />
						)
					: 	(
							<div className="space-y-4 mt-4 text-center">
									<h6 className="text-lg font-semibold leading-none">Your image will be displayed here</h6>
									<span className="text-xs text-gray-500">after processed</span>
									<img className="w-32 h-32 mx-auto rounded opacity-30" src={ imagen_default } alt="imagen default" height="300" width="300" loading="lazy" />
							</div>
						)
				}

				</div>
				
				<div className="">
					<label className="block text-sm font-medium text-gray-700"> Options </label>
					<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
						<div className="space-y-1 text-center">
						
						{/*  Button download */}
						<DownloadImage urlImg={ urlImg } />

						</div>
					</div>
				</div>
			</div>

	
		</>
	);
};
