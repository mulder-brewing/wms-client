import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const DrawerLink = (props) => {
    const { t } = useTranslation('global');

    return (
        <ListItem
            {...props}
            button
            component={Link}
        >
            <ListItemText primary={t(props.textkey)} />
        </ListItem>
    )
}

export default DrawerLink;