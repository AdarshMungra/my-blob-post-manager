// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import BlogPost from "./BlogPost";

interface BlogListProps {
	posts: { id: number; title: string; content: string }[];
	deletePost: (id: number) => void;
}

const BlogList: React.FC<BlogListProps> = ({ posts, deletePost }) => {
	return (
		<div>
			{posts.map((post) => (
				<BlogPost
					key={post.id}
					id={post.id}
					title={post.title}
					content={post.content}
					deletePost={deletePost}
				/>
			))}
		</div>
	);
};

export default BlogList;
