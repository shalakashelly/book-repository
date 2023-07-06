import { useSelector } from 'react-redux';
import { UserState } from '../store/userSlice'
import BookCard from './BookCard';

export default function Home() {

    const getUsername = ( state: { users: UserState }) => {
        return state.users.userInfo;
    }
    const user = useSelector(getUsername);
    
    return (
        <div className="main-container">
            {user ? 
                <div className="grid-wrapper">
                    <p className="grid-title">Welcome, {user.username}!</p>
                    <BookCard />
                </div> : <p className="grid-title">Please log in</p>}
        </div>
    );
}
