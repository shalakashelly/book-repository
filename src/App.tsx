import React, { FormEvent, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authUser } from './store/userSlice';

interface User {
  username: string;
}

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    const user: User = {
      username,
    };
    
    dispatch(authUser(user));

    navigate('/dashboard');
  };

  const isDisabled = !username;
  return (
    <div>
      <h1>Welcome to the online Book Repository</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>  
          <input required type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <button type="submit" disabled={isDisabled}>Login</button>
      </form>
    </div>
  );
}

export default App;
