import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Books from '../../components/Books/Books';
import { UserState } from '../../store/userSlice'
import styles from '../../App.module.scss';

export default function Dashboard() {

    const getUsername = (state: { users: UserState }) => {
        return state.users.userInfo;
    }
    const user = useSelector(getUsername);

    const storeUsernameInLocalStorage = (username: string) => {
        localStorage.setItem('username', username);
    };

    const getUsernameFromLocalStorage = () => {
        return localStorage.getItem('username');
    };

    const [displayedUsername, setDisplayedUsername] = useState<string | null>(null);

    useEffect(() => {
        const storedUsername = getUsernameFromLocalStorage();
        if (storedUsername) {
            setDisplayedUsername(storedUsername);
        }
    }, []);

    useEffect(() => {
        if (user) {
            storeUsernameInLocalStorage(user.username);
        }
    }, [user]);

    function renderContent() {

        if (user || displayedUsername) {
            return (
                <div className={styles.grid__wrapper}>
                    <p className={styles.grid__title}>Welcome, {user?.username || displayedUsername}!</p>
                    <Books />
                </div>
            );
        } else {
            return <p className={styles.grid__title}>Please log in</p>
        }
    }

    return <div>{renderContent()}</div>;
}
