import type { NextPage } from 'next';

// Local Imports
import BottomNav from '../components/BottomNav';
import DCardDetails from '../components/DCardDetails';

const Prescribe: NextPage = () => {
	return (
		<div className='flex flex-row flex-wrap min-h-screen'>
			{/* Prescribe Header */}
			<div className='flex flex-col w-4/6 px-6'>
				<div className='flex flex-row items-center justify-between m-4'>
					<h1 className='text-xl font-semibold'>Prescription</h1>
					<button className='px-4 py-2 text-xs font-bold text-white bg-blue-500 rounded-md'>
						Prescribe
					</button>
				</div>
				{/* Prescribe Header */}
				<div className='flex flex-row h-56 my-4 space-x-4'>
					<DCardDetails />
					<div className='w-2/3 h-full p-4 bg-gray-100'>
						<h1 className='mb-4 font-semibold text-md'>Patient Details</h1>
						<form className='flex flex-col space-y-4'>
							<div>
								<label
									htmlFor='PName'
									className='block ml-1 text-xs font-semibold'
								>
									Name
								</label>
								<input
									type='text'
									name='PName'
									id='PName'
									className='w-1/2 p-1 border-2 border-gray-200 rounded-md'
								/>
							</div>
							<div>
								<label
									htmlFor='PAddress'
									className='block ml-1 text-xs font-semibold'
								>
									Address
								</label>
								<textarea
									rows={2}
									name='PAddress'
									id='PAddress'
									className='w-1/2 p-1 border-2 border-gray-200 rounded-md'
								/>
							</div>
						</form>
					</div>
				</div>
				<table className='w-full rounded-md table-auto'>
					<thead className='bg-gray-100' style={{ textAlign: 'left' }}>
						<tr>
							<th className='p-2 text-xs font-black text-gray-500 uppercase'>
								Medication
							</th>
							<th className='text-xs font-black text-gray-500 uppercase'>
								Dose
							</th>
							<th className='text-xs font-black text-gray-500 uppercase'>
								Frequency
							</th>
							<th className='text-xs font-black text-gray-500 uppercase'>
								Amount
							</th>
							<th className='text-xs font-black text-gray-500 uppercase'>
								Refills
							</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr className='border-b'>
							<td className='px-2 py-4 text-xs font-medium text-gray-500'>
								Medication
							</td>
							<td className='text-xs font-medium text-gray-500'>Dose</td>
							<td className='text-xs font-medium text-gray-500'>Frequency</td>
							<td className='text-xs font-medium text-gray-500'>Amount</td>
							<td className='text-xs font-medium text-gray-500'>Refills</td>
							<td className='flex flex-row items-center h-full py-4 space-x-2'>
								<button className='w-4 h-4'>
									<img src='https://img-premium.flaticon.com/png/512/1146/premium/1146159.png?token=exp=1630134005~hmac=cfae24f0f9923cf6c4abf375b6e48511' />
								</button>
								<button className='w-4 h-4'>
									<img src='https://image.flaticon.com/icons/png/512/860/860814.png' />
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className='flex flex-col items-center w-2/6 pt-6 space-y-8 overflow-scroll bg-gray-100 '></div>
			<BottomNav />
		</div>
	);
};

export default Prescribe;
