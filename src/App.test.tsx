import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

test("renders the home page", () => {
	render(
		<Router>
			<App />
		</Router>,
	);
	expect(screen.getByText(/Blog Post Manager/i)).toBeInTheDocument();
});

test("navigates to the add post page", () => {
	render(
		<Router>
			<App />
		</Router>,
	);
	fireEvent.click(screen.getByText(/Add Post/i));
	expect(screen.getByPlaceholderText(/Title/i)).toBeInTheDocument();
});

test("adds a new post", () => {
	render(
		<Router>
			<App />
		</Router>,
	);
	fireEvent.click(screen.getByText(/Add Post/i));
	fireEvent.change(screen.getByPlaceholderText(/Title/i), {
		target: { value: "Test Post" },
	});
	fireEvent.change(screen.getByPlaceholderText(/Content/i), {
		target: { value: "This is a test post." },
	});
	fireEvent.click(screen.getByText(/Add Post/i));
	fireEvent.click(screen.getByText(/Home/i));
	expect(screen.getByText(/Test Post/i)).toBeInTheDocument();
});
