import { useSelector } from 'react-redux';

import { authSelectors } from '../../../../store/auth';

import DrawerLink from '../../DrawerLink';

const SignedInDrawerLink = (props) => {
    const isSignedIn = useSelector(authSelectors.isSignedIn);

    if (!isSignedIn) {
        return null;
    }

    return <DrawerLink { ...props } />;
}

export default SignedInDrawerLink;