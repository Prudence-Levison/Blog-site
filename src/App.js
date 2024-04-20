import React from 'react';
import Home from './pages';
import { createBrowserRouter, Link, Route, RouterProvider, Routes, BrowserRouter } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import ViewPost from './pages/ViewPost';
import { BlogProvider } from './context/BlogContext';

function App() {
	return (
		<BrowserRouter>
			<BlogProvider>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/create' element={<CreatePost />} />
					<Route path='/post/:id' element={<ViewPost />} />
				</Routes>
			</BlogProvider>
		</BrowserRouter>
	);
}

export default App;
