import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore, { MockStore } from "redux-mock-store";
import Home from "./Home";
import { authUser } from '../store/userSlice';

const mockStore = configureMockStore();
let initialState = {};
let store: MockStore;

const setup = (initialState = {}) => {
  store = mockStore(initialState) as MockStore; 
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  return {store}
}

describe("Home component", () => {

  beforeEach(() => {
    jest.clearAllMocks();
    initialState = {
      users: {
        userInfo: null,
      },
    };
  });

  it("renders 'Please log in' message when user is null", () => {
    setup(initialState);

    expect(screen.getByText("Please log in")).toBeInTheDocument();
  });

  it("renders 'Welcome, {username}!' message when user is not null", () => {
    let initialState = {
      users: {
        userInfo: {
          username: "JohnDoe"
        },
      },
    };
    setup(initialState);

    expect(screen.getByText(`Welcome, JohnDoe!`)).toBeInTheDocument();
  });
});
