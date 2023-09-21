import { useSelector } from 'react-redux';
import Books from '../../components/Books/books';
import { UserState } from '../../store/userSlice'

export default function Dashboard() {

    const getUsername = ( state: { users: UserState }) => {
        return state.users.userInfo;
    }
    const user = useSelector(getUsername);

    function renderContent() {
        if(user) {
            return (
                <div className="grid-wrapper">
                    <p className="grid-title">Welcome, {user.username}!</p>
                    <Books />
                </div>
            );
        } else {
            <p className="grid-title">Please log in</p>
        }
    }
    
    return <div className="main-container">{renderContent()}</div>;
}
