import React, { useState } from 'react';

interface InputFieldProps {
	type: string;
	onChange: (string) => any;
}

const InputField: React.FC<InputFieldProps> = props => {
	const [inputType] = useState(props.type);
	const [inputValue, setInputValue] = useState('');

	const handleChange = event => {
		setInputValue(event.target.value);
		if (props.onChange) props.onChange(inputValue);
	};

	return (
		<div>
			<label htmlFor='PName' className='block ml-1 text-xs font-semibold'>
				Name
			</label>
			<input
				type='text'
				name='PName'
				id='PName'
				className='w-1/2 p-1 border-2 border-gray-200 rounded-md'
			/>
		</div>
	);
};

export default InputField;
