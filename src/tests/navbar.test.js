import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "../component/nav/Nav";
import NavElement from "../component/navElement/NavElement";
import Logo from "../component/logo/Logo";
import { BrowserRouter } from "react-router-dom";

describe("NavElement", () => {
  afterEach(cleanup);
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NavElement />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("renders navElement home", () => {
    render(<NavElement text="Home" />);
    const navElement = screen.getByText("Home");
    expect(navElement).toBeInTheDocument();
  });
});

describe("Logo", () => {
    afterEach(cleanup);
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Logo/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test("renders logo", () => {
    render(<Logo />);
    const logoElement = screen.getByText("DecaMea");
    expect(logoElement).toBeInTheDocument();
  });
})

