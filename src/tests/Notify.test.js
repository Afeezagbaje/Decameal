import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; 
import Notify from "../pages/notify";
import Testimonia from "../pages/testimonia"

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Notify />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Testimonia />, div);
    ReactDOM.unmountComponentAtNode(div);
  });