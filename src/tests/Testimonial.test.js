import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Testimonial from "../components/testimonial/testimonial";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Testimonial />, div);
  ReactDOM.unmountComponentAtNode(div);
});
