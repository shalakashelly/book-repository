import { useSelector } from 'react-redux';

interface User {
    username: string;
}

interface UserState {
    user: User | null;
}

export default function Home() {
    const user = useSelector((state: { user: UserState }) => state.user.user);

    return (
        <div>
            {user ? <p>Welcome, {user.username}!</p> : <p>Please log in</p>}
        </div>
    );
}
