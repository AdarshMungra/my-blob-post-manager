// biome-ignore lint/style/useImportType: <explanation>
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import PostDetail from "./components/PostDetail";
import NavBar from "./components/NavBar";

interface BlogPost {
	id: number;
	title: string;
	content: string;
}

const appStyles: React.CSSProperties = {
	fontFamily: "'Roboto', sans-serif",
	margin: 0,
	padding: "20px",
	backgroundColor: "#f0f2f5",
	color: "#333",
	minHeight: "100vh",
};

const App: React.FC = () => {
	const [posts, setPosts] = useState<BlogPost[]>([]);

	const addPost = (title: string, content: string) => {
		const newPost: BlogPost = { id: posts.length + 1, title, content };
		setPosts([...posts, newPost]);
	};

	const deletePost = (id: number) => {
		setPosts(posts.filter((post) => post.id !== id));
	};

	return (
		<Router>
			<div style={appStyles}>
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={<BlogList posts={posts} deletePost={deletePost} />}
					/>
					<Route path="/add-post" element={<BlogForm addPost={addPost} />} />
					<Route path="/post/:id" element={<PostDetail posts={posts} />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
