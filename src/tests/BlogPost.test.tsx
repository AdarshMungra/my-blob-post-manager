import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BlogPost from "../components/BlogPost";

const mockPost = {
	id: 1,
	title: "Test Post",
	content:
		"This is a test post content that is quite long and should be truncated.",
	deletePost: jest.fn(),
};

test("renders post title and truncated content", () => {
	render(<BlogPost {...mockPost} />);
	expect(screen.getByText(/Test Post/i)).toBeInTheDocument();
	expect(
		screen.getByText(
			/This is a test post content that is quite long and should be truncated\.\.\./i,
		),
	).toBeInTheDocument();
});

test("toggles full content view on button click", () => {
	render(<BlogPost {...mockPost} />);
	fireEvent.click(screen.getByText(/Read More/i));
	expect(
		screen.getByText(
			/This is a test post content that is quite long and should be truncated\./i,
		),
	).toBeInTheDocument();
	fireEvent.click(screen.getByText(/Show Less/i));
	expect(
		screen.getByText(
			/This is a test post content that is quite long and should be truncated\.\.\./i,
		),
	).toBeInTheDocument();
});

test("calls deletePost function on button click", () => {
	render(<BlogPost {...mockPost} />);
	fireEvent.click(screen.getByText(/Delete/i));
	expect(mockPost.deletePost).toHaveBeenCalledWith(1);
});
