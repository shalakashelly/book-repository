import React, { FormEvent, useState } from 'react';
import styles from './App.module.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authUser, User } from './store/userSlice';

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
    <div className={styles.form__center}>
      <div className={styles.form__container}>
        <h1>Welcome to the online Book Repository</h1>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.input__wrapper}>
            <label className={styles.label}>Username:</label>  
            <input required name="username" type="text" value={username} onChange={handleUsernameChange} />
          </div>
          <button className="submit" name="submit" type="submit" disabled={isDisabled}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
