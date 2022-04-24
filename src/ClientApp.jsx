import React, { useState } from 'react';
import { CardUpload } from './components/CardUpload';
import { Header } from './components/Header';
// import 'flowbite';


export const ClientApp = () => {



	return (
		<>

			<Header />
		
            <CardUpload />

			{/* <!-- component --> */}
				<div className="py-16 white">  
					<div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
						<h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">Name Component</h2>
						<div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
							<div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
								<div className="h-full flex flex-col justify-center space-y-4">
								<img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
								<p className="text-gray-600 md:text-xl"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="font-serif">"</span></p>
									<div>
										<h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
										<span className="text-xs text-gray-500">Product Designer</span>
									</div>
									

								{/*  Input file drag and drog */}
								<div>
									<label className="block text-sm font-medium text-gray-700"> Cover photo </label>
									<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
										<div className="space-y-1 text-center">
										<svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
											<path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										<div className="flex text-sm text-gray-600">
											<label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
											<span>Upload a file</span>
											<input id="file-upload" name="file-upload" type="file" className="sr-only" />
											</label>
											<p className="pl-1">or drag and drop</p>
										</div>
										<p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
										</div>
									</div>
								</div>

								</div>		
							</div>

							<div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
								<img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
								<div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
								<p className="text-gray-600"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
									<div>
										<h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
										<span className="text-xs text-gray-500">Product Designer</span>
									</div>
								</div>
							</div>

							<div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
								<img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
								<div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
								<p className="text-gray-600"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
									<div>
										<h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
										<span className="text-xs text-gray-500">Product Designer</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			
			
		</>
	);
};
