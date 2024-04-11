import React from 'react';
import Home from './pages';
import { createBrowserRouter, Link, Route, RouterProvider, Routes, BrowserRouter } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import { BlogProvider } from './context/BlogContext';

function App() {
	return (
		<BrowserRouter>
			<BlogProvider>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/create' element={<CreatePost />} />
				</Routes>
			</BlogProvider>
		</BrowserRouter>
	);
}

export default App;
