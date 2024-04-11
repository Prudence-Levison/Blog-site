import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const Postpage = () => {
	const { createPost } = useContext(BlogContext);
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		createPost({ title, body });

		setTitle('');
		setBody('');

		navigate('/');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label className='flex flex-col'>
				Title:
				<input
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className='border rounded-sm py-3 px-16 outline-none'
				/>
			</label>
			<label className='flex flex-col'>
				Content:
				<input
					type='text'
					value={body}
					onChange={(e) => setBody(e.target.value)}
					className='border rounded-sm py-3 px-16 outline-none'
				/>
			</label>

			<div className='mt-8'>
				<button type='submit' className='bg-blue-600 text-white py-4 px-12'>
					Create Post
				</button>
			</div>
		</form>
	);
};
export default Postpage;
