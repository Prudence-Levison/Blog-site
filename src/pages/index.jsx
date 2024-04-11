import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const { posts } = useContext(BlogContext);

	const navigate = useNavigate();

	return (
		<div>
			<ul className='flex gap-4 flex-wrap'>
				{posts.length > 0 &&
					posts
						.sort((a, b) => b.id - a.id)
						.map((post) => (
							<li key={post.id} onClick={() => navigate(`/post/${post.id}`)}>
								<div className='border p-4 border-gray-400 flex flex-col gap-2 w-64'>
									<h2 className='text-lg font-bold capitalize'>{post.title}</h2>
									<p>{post.body}</p>
								</div>
							</li>
						))}
			</ul>
		</div>
	);
};

export default Home;
