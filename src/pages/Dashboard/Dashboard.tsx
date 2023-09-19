import { useSelector } from 'react-redux';
import Books from '../../components/Books/books';
import { UserState } from '../../store/userSlice'

export default function Dashboard() {

    const getUsername = ( state: { users: UserState }) => {
        return state.users.userInfo;
    }
    const user = useSelector(getUsername);
    
    return (
        <div className="main-container">
            {user ? 
                <div className="grid-wrapper">
                    <p className="grid-title">Welcome, {user.username}!</p>
                    <Books />
                </div> : <p className="grid-title">Please log in</p>}
        </div>
    );
}
