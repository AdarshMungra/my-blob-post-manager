// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

interface BlogListProps {
	posts: { id: number; title: string; content: string }[];
	deletePost: (id: number) => void;
}

const BlogList: React.FC<BlogListProps> = ({ posts, deletePost }) => {
	const listItemStyles: React.CSSProperties = {
		backgroundColor: "#ffffff",
		padding: "20px",
		borderRadius: "8px",
		marginBottom: "20px",
		marginRight: 24,
		marginLeft: 24,

		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	};

	const buttonContainerStyles: React.CSSProperties = {
		display: "flex",
		padding: 32,
	};

	const buttonStyles: React.CSSProperties = {
		backgroundColor: "#007bff",
		color: "white",
		padding: "8px 12px",
		borderRadius: "4px",
		border: "none",
		cursor: "pointer",
		marginLeft: "8px",
		display: "flex",
		alignItems: "center",
	};

	const handleDelete = (id: number) => {
		deletePost(id);
	};

	return (
		<div>
			{posts.map((post) => (
				<div key={post.id} style={listItemStyles}>
					<div>
						<h1>{post.title}</h1>
						<p>{post.content}</p>
					</div>
					<div style={buttonContainerStyles}>
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button style={buttonStyles}>View Full Post</button>
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button
							style={{ ...buttonStyles, marginLeft: "0" }}
							onClick={() => handleDelete(post.id)}
						>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default BlogList;
