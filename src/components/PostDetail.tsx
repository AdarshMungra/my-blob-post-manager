// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { useParams } from "react-router-dom";

interface PostDetailProps {
	posts: { id: number; title: string; content: string }[];
}

const PostDetail: React.FC<PostDetailProps> = ({ posts }) => {
	const { id } = useParams<{ id: string }>();

	// Ensure id is defined and can be parsed to an integer
	const post = id
		? posts.find((post) => post.id === parseInt(id, 10))
		: undefined;

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
};

export default PostDetail;
