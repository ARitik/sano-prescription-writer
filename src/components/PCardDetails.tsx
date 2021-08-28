import React from 'react';

interface PCardDetailsProps {
	name: String;
	id: Number;
	patientId: Number;
	dateIssued: any;
}

const PCardDetails: React.FC<PCardDetailsProps> = ({
	name,
	id,
	patientId,
	dateIssued,
}) => {
	return (
		<div className='flex flex-col w-5/6 p-4 space-y-4 bg-gray-200 border-l-4 border-blue-500 rounded-lg h-36'>
			<div className='flex flex-row items-baseline justify-between'>
				<h1 className='text-lg font-semibold text-blue-500'>
					{name}{' '}
					<span className='text-xs font-bold text-gray-400'>#{patientId}</span>{' '}
				</h1>
				<p className='text-xs font-bold text-gray-400 uppercase'>
					Prescription Id: #{id}
				</p>
			</div>
			<p className='text-sm'>
				Patient{' '}
				<span className='text-xs font-bold text-gray-500 cursor-pointer hover:underline hover:text-blue-500'>
					(#{patientId})
				</span>{' '}
				issued prescription on {dateIssued}.
			</p>
			<button className='w-full h-10 text-xs font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-400'>
				Download Prescription
			</button>
		</div>
	);
};

export default PCardDetails;
