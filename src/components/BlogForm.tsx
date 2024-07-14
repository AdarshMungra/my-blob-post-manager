// biome-ignore lint/style/useImportType: <explanation>
import React, { useState } from "react";

interface BlogFormProps {
	addPost: (title: string, content: string) => void;
}

const formStyles: React.CSSProperties = {
	backgroundColor: "white",
	padding: "20px",
	borderRadius: "5px",
	maxWidth: "600px",
	margin: "0 auto",
};

const inputStyles: React.CSSProperties = {
	display: "block",
	width: "100%",
	padding: "10px",
	margin: "10px 0",
	borderRadius: "4px",
	border: "1px solid #ddd",
};

const buttonStyles: React.CSSProperties = {
	display: "block",
	width: "100%",
	padding: "10px",
	backgroundColor: "#007bff",
	color: "white",
	border: "none",
	borderRadius: "4px",
	cursor: "pointer",
};

const BlogForm: React.FC<BlogFormProps> = ({ addPost }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		addPost(title, content);
		setTitle("");
		setContent("");
	};

	return (
		<form style={formStyles} onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				style={inputStyles}
				required
			/>
			<textarea
				placeholder="Content"
				value={content}
				onChange={(e) => setContent(e.target.value)}
				style={inputStyles}
				rows={10}
				required
			/>
			<button type="submit" style={buttonStyles}>
				Add Post
			</button>
		</form>
	);
};

export default BlogForm;
