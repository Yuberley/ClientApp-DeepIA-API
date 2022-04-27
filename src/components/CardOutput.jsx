import React from 'react';
import { DownloadImage } from './DownloadImage';
import { Loading } from './Loading';

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
					{/* <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
						<path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16 0-8.82 7.18-16 16-16 8.82 0 16 7.18 16 16 0 8.82-7.18 16-16 16zm8-20c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM6 34h36v4H6v-4z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg> */}
					{/*  Button download */}
					
					<DownloadImage urlImg={ urlImg } />

					</div>
				</div>
			</div>
			</div>

	
		</>
	);
};
