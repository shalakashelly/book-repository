import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore, { MockStore } from "redux-mock-store";
import Dashboard from "./Dashboard";
import { authUser } from '../../store/userSlice';

const mockStore = configureMockStore();
let initialState = {};
const testName = "JohnDoe";

const setup = (initialState = {}) => {
  const store = mockStore(initialState) as MockStore; 
  render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
  return {store}
}

describe("Dashboard component", () => {

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
    initialState = {
      users: {
        userInfo: {
          username: testName
        },
      },
    };
    setup(initialState);

    expect(screen.getByText(`Welcome, ${testName}!`)).toBeInTheDocument();
  });
});
