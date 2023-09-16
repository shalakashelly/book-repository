import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import configureMockStore, { MockStore } from "redux-mock-store";
import { Provider } from 'react-redux';
import { authUser } from './store/userSlice';

const mockUseNavigate = jest.fn();
const mockStore = configureMockStore();
let initialState = {};
const testName = "JohnDoe";

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockUseNavigate,
  __esModule__: true
}))

const setup = (initialState = {}) => {
  const store = mockStore(initialState) as MockStore;
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return { store }
};

describe('App component', () => {

  beforeEach(() => {
    jest.clearAllMocks();
    initialState = {
      users: {
        userInfo: null,
      },
    };
  });

  it('dispatches authUser action with username on form submission', async () => {
    let initialState = {
      users: {
        userInfo: {
          username: testName
        },
      },
    };
    const { store } = setup(initialState);
    const username = testName;

    const userInput = screen.getByRole('textbox');
    await userEvent.type(userInput, testName);

    const submitButton = screen.getByRole('button');
    await userEvent.click(submitButton);

    expect(store.getActions()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ type: authUser.type, payload: {username: username} })
      ])
    );
  });

  it('logging in navigates to the dashboard', async () => {
    setup(initialState);

    const userInput = screen.getByRole('textbox');
    await userEvent.type(userInput, 'username');

    const submitButton = screen.getByRole('button');
    await userEvent.click(submitButton);

    expect(mockUseNavigate).toBeCalledTimes(1);
    expect(mockUseNavigate).toBeCalledWith('/dashboard');
  });

  it('does not navigate to dashboard when username is empty', async () => {
    setup(initialState);

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeDisabled();

    await userEvent.click(submitButton);

    expect(mockUseNavigate).toBeCalledTimes(0);
  });
});
