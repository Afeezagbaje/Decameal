import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Welcome from "../pages/welcome";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const initialState = { users: { data: [] } };
const mockStore = configureStore();
let store = mockStore(initialState);

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Welcome />
    </Provider>,

    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

describe("Welcome", () => {
  it("renders welcome message", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Welcome />
      </Provider>
    );
    expect(getByText("Welcome to Decameal")).toBeInTheDocument();
  });
});

