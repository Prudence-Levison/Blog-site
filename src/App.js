import React from 'react';
import Home from './Components/Home';
import { createBrowserRouter, Link, Route, RouterProvider, Routes, BrowserRouter } from 'react-router-dom';
import CreatePost from './pages/CreatePost';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/create' element={<CreatePost />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
