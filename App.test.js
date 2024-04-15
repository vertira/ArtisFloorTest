import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./src/App";

test("renders the component correctly", () => {
	render(<App />);
	const headingElement = screen.getByRole("heading", { name: "My Component" });
	expect(headingElement).toBeInTheDocument();
});
