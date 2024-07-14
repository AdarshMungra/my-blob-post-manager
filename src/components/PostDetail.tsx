// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { useParams } from "react-router-dom";

interface PostDetailProps {
	posts: { id: number; title: string; content: string }[];
}

const detailStyles: React.CSSProperties = {
	backgroundColor: "white",
	padding: "20px",
	borderRadius: "5px",
	boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
	maxWidth: "800px",
	margin: "0 auto",
	fontFamily: "'Roboto', sans-serif",
};

const titleStyles: React.CSSProperties = {
	marginBottom: "20px",
	fontSize: "2em",
	color: "#007bff",
};

const PostDetail: React.FC<PostDetailProps> = ({ posts }) => {
	const { id } = useParams<{ id: string }>();
	const post = posts.find((p) => p.id === Number.parseInt(id || "", 10));

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<div style={detailStyles}>
			<h2 style={titleStyles}>{post.title}</h2>
			<p>{post.content}</p>
		</div>
	);
};

export default PostDetail;
