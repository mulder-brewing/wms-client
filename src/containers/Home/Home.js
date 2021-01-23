import { useSelector } from 'react-redux';

import { authSelectors } from '../../store/auth';

const Home = () => {
    const isSignedIn = useSelector(authSelectors.isSignedIn);

    return (
        <div>
            <h2>Home</h2>
            <h3>{isSignedIn ? 'Signed In' : 'Signed Out'}</h3>
        </div>
    );
};

export default Home;