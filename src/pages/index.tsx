import type { NextPage } from 'next';
import PCardDetails from '../components/PCardDetails';
import BottomNav from '../components/BottomNav';

const Home: NextPage = () => {
	return (
		<div>
			<div className='flex flex-row flex-wrap min-h-screen'>
				<div className='flex flex-col w-1/6'>MAIN</div>
				<div className='flex flex-col w-3/6'></div>
				<div className='flex flex-col items-center w-2/6 pt-6 space-y-8 overflow-scroll bg-gray-100 '>
					<h1 className='capitalize text-gray-60'>Activity Monitor</h1>
					<PCardDetails
						id={4567213}
						name='Laura Taylor'
						patientId={1221}
						dateIssued='10/05/2000'
					/>
					<PCardDetails
						id={4567213}
						name='Laura Taylor'
						patientId={1221}
						dateIssued='10/05/2000'
					/>
					<PCardDetails
						id={4567213}
						name='Laura Taylor'
						patientId={1221}
						dateIssued='10/05/2000'
					/>
				</div>
				<BottomNav />
			</div>
		</div>
	);
};

export default Home;
