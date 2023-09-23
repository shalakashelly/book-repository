import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Books from '../../components/Books/books';
import { UserState } from '../../store/userSlice'

export default function Dashboard() {

    const getUsername = ( state: { users: UserState }) => {
        return state.users.userInfo;
    }
    const user = useSelector(getUsername);

    // Function to store the username in local storage
    const storeUsernameInLocalStorage = (username: string) => {
    localStorage.setItem('username', username);
    };

    // Function to retrieve the username from local storage
    const getUsernameFromLocalStorage = () => {
    return localStorage.getItem('username');
    };

    // State to hold the displayed username
    const [displayedUsername, setDisplayedUsername] = useState<string | null>(null);

    // Effect to retrieve and set the displayed username from local storage
    useEffect(() => {
        const storedUsername = getUsernameFromLocalStorage();
        if (storedUsername) {
        setDisplayedUsername(storedUsername);
        }
    }, []);

    // Use the storeUsernameInLocalStorage function when user data is available
    useEffect(() => {
        if (user) {
        storeUsernameInLocalStorage(user.username);
        }
    }, [user]);

    function renderContent() {

        if(user || displayedUsername) {
            return (
                <div className="grid__wrapper">
                    <p className="grid--title">Welcome, {user?.username || displayedUsername}!</p>
                    <Books />
                </div>
            );
        } else {
            return <p className="grid--title">Please log in</p>
        }
    }
    
    return <div className="main__container">{renderContent()}</div>;
}
