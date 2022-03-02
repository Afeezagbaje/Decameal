import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; 
import Notification from "../components/notification/notification";
import Testimonial from "../components/testimonial/testimonial";

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Notification />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Testimonial />, div);
    ReactDOM.unmountComponentAtNode(div);
  });