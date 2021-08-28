import React from 'react';

const DCardDetails: React.FC = () => {
	return (
		<div className='flex flex-col items-center justify-center w-1/3 h-full p-4 space-y-2 bg-gray-100 border-b-8 border-blue-500'>
			{/* <div className='w-16 h-16 rounded-full bg-gray-50'></div> */}
			<img
				src='https://image.flaticon.com/icons/png/512/236/236831.png'
				alt='doctor'
				className='w-16 h-16 rounded-full'
			/>
			<h2 className='text-sm font-semibold'>Dr. Raymond Holt</h2>
			<p className='text-xs text-gray-600'>Cardiologist at Siloam Hospital</p>
		</div>
	);
};

export default DCardDetails;
