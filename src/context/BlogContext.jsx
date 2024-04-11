import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
		setPosts(posts.data);
	};

	const createPost = async ({ title, body }) => {
		try {
			const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { title, body });
			console.log(response);
			setPosts([...posts, response.data]);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return <BlogContext.Provider value={{ posts, createPost }}>{children}</BlogContext.Provider>;
};
