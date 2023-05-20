import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import Home from "./Home";
import { authUser } from '../store/userSlice';

describe("Home component", () => {
  test("renders 'Please log in' message when user is null", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(getByText("Please log in")).toBeInTheDocument();
  });

  test("renders 'Welcome, {username}!' message when user is not null", () => {
    const username = "JohnDoe";
    store.dispatch(authUser({ username }));

    const { getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(getByText(`Welcome, ${username}!`)).toBeInTheDocument();
  });
});
