import React from 'react';
import { Loading } from './Loading';

export const CardOutput = ({ isLoading, urlImg }) => {

	

	return (
		<>
			<div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">					
				{
					isLoading 
					? 	(
							<Loading />
						)
					: 	(
						<img className="w-30 h-30 mx-auto rounded" src={ urlImg } alt="user avatar" height="300" width="300" loading="lazy" />
					)

				}
			</div>

			<div className="flex-1">
				<label className="block text-sm font-medium text-gray-700"> Options </label>
				<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
					<div className="space-y-1 text-center">
					{/* <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
						<path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16 0-8.82 7.18-16 16-16 8.82 0 16 7.18 16 16 0 8.82-7.18 16-16 16zm8-20c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM6 34h36v4H6v-4z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg> */}
					{/*  Button download */}
					<div className="flex justify-end p-6 ">
						<button className="bg-green-500 flex hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full hover:px-6 transition-all duration-200">
							<p> Download </p>
							<svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z" fillRule="evenodd"></path></svg>
						</button>
					</div>
					</div>
				</div>
			</div>
		</>
	);
};
