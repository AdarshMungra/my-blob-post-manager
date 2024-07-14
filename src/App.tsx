// biome-ignore lint/style/useImportType: <explanation>
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import PostDetail from "./components/PostDetail";
import NavBar from "./components/NavBar";

interface Post {
	id: number;
	title: string;
	content: string;
}

const App: React.FC = () => {
	const [posts, setPosts] = useState<Post[]>([]);

	const addPost = (title: string, content: string) => {
		const newPost = { id: Date.now(), title, content };
		setPosts((prevPosts) => [...prevPosts, newPost]);
	};

	const deletePost = (id: number) => {
		setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
	};

	return (
		<Router>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={<BlogList posts={posts} deletePost={deletePost} />}
				/>
				<Route path="/add-post" element={<BlogForm addPost={addPost} />} />
				<Route path="/post/:id" element={<PostDetail posts={posts} />} />
			</Routes>
		</Router>
	);
};

export default App;
