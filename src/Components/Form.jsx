import { useState } from 'react';
import FormContext from '../context/FormContext';

const Form = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	return (
		<FormContext.Provider title={title} setTitle={setTitle} content={content} setContent={setContent}>
			<div className='p-16'>
				<h1>Form</h1>
				<form>
					<label className='flex flex-col'>
						Title:
						<input type='text' className='border rounded-sm py-3 px-16 outline-none' />
					</label>
					<label className='flex flex-col'>
						Content:
						<input type='text' className='border rounded-sm py-3 px-16 outline-none' />
					</label>

					<div className='mt-8'>
						<button type='submit' className='bg-blue-600 text-white py-4 px-12'>
							{' '}
							Post{' '}
						</button>
					</div>
				</form>
			</div>
		</FormContext.Provider>
	);
};

export default Form;
