import React from 'react';

const BottomNav: React.FC = () => {
	return (
		<nav className='fixed inset-x-0 bottom-0 flex flex-row items-center justify-start h-10 px-2 space-x-4 bg-blue-500'>
			<h2 className='text-xs text-gray-200 '>
				Logged in as{' '}
				<span className='font-bold underline'>Dr. Raymond Holt</span>
			</h2>
		</nav>
	);
};

export default BottomNav;
