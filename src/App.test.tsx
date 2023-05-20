import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from './store';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockUseNavigate,
  __esModule__: true
}))

const setup = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
)};

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('logging in navigates to the dashboard', async () => {
    setup();
  
    const userInput = screen.getByRole('textbox');
    await userEvent.type(userInput, 'username');
  
    const submitButton = screen.getByRole('button');
    await userEvent.click(submitButton);
  
    expect(mockUseNavigate).toBeCalledTimes(1);
    expect(mockUseNavigate).toBeCalledWith('/dashboard');
  });
  
  it('does not navigate to dashboard when username is empty', async () => {
    setup();
  
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeDisabled();
    
    await userEvent.click(submitButton);
  
    expect(mockUseNavigate).toBeCalledTimes(0);
  });
});
