import React from 'react';
import Postpage from './Postpage';
function Home() {
	return (
		<>
			{/* Button to create post */}
			<nav className='flex justify-end bg-white shadow-sm py-4 container w-full'>
				<button className='bg-blue-950 text-white'>Create post</button>
			</nav>

			{/* List of posts */}
			<Postpage />
		</>
	);
}
export default Home;
