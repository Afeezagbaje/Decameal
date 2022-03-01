import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Welcome from "../pages/welcome";

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Welcome />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Welcome", () => {
  it("renders welcome message", () => {
    const { getByText } = render(<Welcome />);
    expect(getByText("Welcome to Decameal")).toBeInTheDocument();
  });
});

