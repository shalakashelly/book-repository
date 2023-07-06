import { useSelector } from 'react-redux';
import { UserState } from '../store/userSlice'

export default function Home() {

    const getUsername = ( state: { users: UserState }) => {
        return state.users.userInfo;
    }
    const user = useSelector(getUsername);
    
    return (
        <div>
            {user ? <p>Welcome, {user.username}!</p> : <p>Please log in</p>}
        </div>
    );
}
