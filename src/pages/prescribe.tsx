import type { NextPage } from 'next';
import { useState } from 'react';

// Local Imports
import BottomNav from '../components/BottomNav';
import DCardDetails from '../components/DCardDetails';
// import TableItem from '../components/TableItem';

interface medicineList {
	medication: string;
	dose: string;
	frequency: string;
	amount: string;
	refills: string;
}

const Prescribe: NextPage = () => {
	const [medicine, setMedicine] = useState({
		medication: '',
		dose: '',
		frequency: '',
		amount: '',
		refills: '',
	});

	const [medicineList, setMedicineList] = useState<medicineList[]>([]);

	const handleChange = e => {
		setMedicine({
			...medicine,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		setMedicineList([...medicineList, medicine]);
		console.log(medicineList);
	};

	const removeItem = rItem => {
		console.log('Hello');
		setMedicineList(medicineList.filter(item => item.medication != rItem));
	};

	const handleReset = () => {
		setMedicine({
			medication: '',
			dose: '',
			frequency: '',
			amount: '',
			refills: '',
		});
	};

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
					<div className='w-2/3 h-full px-10 py-4 bg-gray-100'>
						<h1 className='mb-4 font-semibold text-md'>Patient Details</h1>
						<form className='flex flex-col pr-24 space-y-4'>
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
									className='w-full p-1 border-2 border-gray-200 rounded-md'
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
									className='w-full p-1 border-2 border-gray-200 rounded-md'
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
						{medicineList.map(item => {
							return (
								<tr className='border-b' key={item.medication}>
									<td className='px-2 py-4 text-xs font-medium text-gray-500'>
										{item.medication}
									</td>
									<td className='text-xs font-medium text-gray-500'>
										{item.dose}
									</td>
									<td className='text-xs font-medium text-gray-500'>
										{item.frequency}
									</td>
									<td className='text-xs font-medium text-gray-500'>
										{item.amount}
									</td>
									<td className='text-xs font-medium text-gray-500'>
										{item.refills}
									</td>
									<td className='flex flex-row items-center h-full py-4 space-x-2'>
										<button
											className='w-4 h-4'
											onClick={() => removeItem(item.medication)}
										>
											<img src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' />
										</button>
										<button className='w-4 h-4'>
											<img src='https://image.flaticon.com/icons/png/512/860/860814.png' />
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<div className='flex flex-col items-center w-2/6 pt-24 space-y-4 overflow-scroll bg-gray-100 '>
				<h2 className='text-lg font-semibold'>Add Medicine</h2>

				<form className='flex flex-col w-3/5 space-y-4' onSubmit={handleSubmit}>
					<div>
						<label
							htmlFor='medication'
							className='block ml-1 text-xs font-semibold'
						>
							Medication
						</label>
						<input
							type='text'
							name='medication'
							value={medicine.medication}
							onChange={handleChange}
							id='medication'
							className='w-full p-1 border-2 border-gray-200 rounded-md'
						/>
					</div>
					<div>
						<label htmlFor='dose' className='block ml-1 text-xs font-semibold'>
							Dose
						</label>
						<input
							type='text'
							name='dose'
							value={medicine.dose}
							onChange={handleChange}
							id='dose'
							className='w-full p-1 border-2 border-gray-200 rounded-md'
						/>
					</div>
					<div>
						<label
							htmlFor='frequency'
							className='block ml-1 text-xs font-semibold'
						>
							Frequency
						</label>
						<input
							type='text'
							name='frequency'
							value={medicine.frequency}
							onChange={handleChange}
							id='frequency'
							className='w-full p-1 border-2 border-gray-200 rounded-md'
						/>
					</div>
					<div>
						<label
							htmlFor='amount'
							className='block ml-1 text-xs font-semibold'
						>
							Amount
						</label>
						<input
							type='text'
							name='amount'
							value={medicine.amount}
							onChange={handleChange}
							id='amount'
							className='w-full p-1 border-2 border-gray-200 rounded-md'
						/>
					</div>
					<div>
						<label
							htmlFor='refills'
							className='block ml-1 text-xs font-semibold'
						>
							Refills
						</label>
						<input
							type='text'
							name='refills'
							value={medicine.refills}
							onChange={handleChange}
							id='refills'
							className='w-full p-1 border-2 border-gray-200 rounded-md'
						/>
					</div>
					<button
						type='submit'
						className='px-4 py-2 text-xs font-bold text-white bg-blue-500 rounded-md'
					>
						Add Medication
					</button>

					<button
						type='reset'
						className='px-4 py-2 text-xs font-bold text-white bg-red-500 rounded-md'
						onClick={handleReset}
					>
						Reset
					</button>
				</form>
			</div>
			<BottomNav />
		</div>
	);
};

export default Prescribe;
