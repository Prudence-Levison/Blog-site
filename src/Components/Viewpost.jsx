import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../context/BlogContext';
import { useNavigate, useParams } from 'react-router-dom';

const Viewpost = () => {
	const { viewPost, post } = useContext(BlogContext);
	const navigate = useNavigate();

	const { id } = useParams();

	useEffect(() => {
		viewPost(id);
	}, []);

	return (
		<div>
			<div onClick={() => navigate(`/post/${post.id}`)}>
				<div className='border p-4 border-gray-400 flex flex-col gap-2 w-64'>
					<h2 className='text-lg font-bold capitalize'>{post.title}</h2>
					<p>{post.body}</p>
				</div>
			</div>
		</div>
	);
};
export default Viewpost;
