import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

/* `export const BlogContext = createContext(null);` is creating a new context object in React using
the `createContext` function provided by React. This context object will be used to share data
between components without having to pass props manually at every level of the component tree. The
initial value of the context is set to `null`, but it can be updated when the provider component
wraps the component tree. */
export const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);
	const [post, setPost] = useState({});

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

	const viewPost = async (id) => {
		try {
			const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
			setPost(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return <BlogContext.Provider value={{ posts, post, createPost, viewPost }}>{children}</BlogContext.Provider>;
};
