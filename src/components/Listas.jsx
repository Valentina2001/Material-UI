import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';

const Listas = () =>{
    return (
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <AppleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mi Primer Elemento" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AndroidIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mi Segundo Element" />
                </ListItem>
                
                <Divider />
            </List>
        </div>
    )
}

export default Listas