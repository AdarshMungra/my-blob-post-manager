// biome-ignore lint/style/useImportType: <explanation>
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface BlogPostProps {
	id: number;
	title: string;
	content: string;
	deletePost: (id: number) => void;
}

const postStyles: React.CSSProperties = {
	backgroundColor: "white",
	padding: "20px",
	marginBottom: "20px",
	borderRadius: "5px",
	boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
	position: "relative",
	fontFamily: "'Roboto', sans-serif",
};

const titleStyles: React.CSSProperties = {
	margin: "0 0 10px",
	fontSize: "1.5em",
	color: "#007bff",
};

const buttonStyles: React.CSSProperties = {
	position: "absolute",
	top: "10px",
	right: "10px",
	backgroundColor: "#ff4d4d",
	color: "white",
	border: "none",
	borderRadius: "4px",
	cursor: "pointer",
	padding: "5px 10px",
};

const readMoreButtonStyles: React.CSSProperties = {
	marginTop: "10px",
	backgroundColor: "#007bff",
	color: "white",
	border: "none",
	borderRadius: "4px",
	cursor: "pointer",
	padding: "5px 10px",
};

const BlogPost: React.FC<BlogPostProps> = ({
	id,
	title,
	content,
	deletePost,
}) => {
	const [showFullContent, setShowFullContent] = useState(false);

	const truncatedContent =
		content.length > 100 ? `${content.substring(0, 100)}...` : content;

	return (
		<div style={postStyles}>
			<h2 style={titleStyles}>{title}</h2>
			<p>{showFullContent ? content : truncatedContent}</p>
			{content.length > 100 && (
				// biome-ignore lint/a11y/useButtonType: <explanation>
				<button
					style={readMoreButtonStyles}
					onClick={() => setShowFullContent(!showFullContent)}
				>
					{showFullContent ? "Show Less" : "Read More"}
				</button>
			)}
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button style={buttonStyles} onClick={() => deletePost(id)}>
				Delete
			</button>
			<Link to={`/post/${id}`} style={readMoreButtonStyles}>
				View Full Post
			</Link>
		</div>
	);
};

export default BlogPost;
