import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const drawerWidth = 240

const useStyles = makeStyles(theme =>({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
}))

const Navbar = () => {
    const classes = useStyles()
    return(
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton color="inherit" aria-label="menu" className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Bluuweb
                </Typography>
                <Button variant="text" color="inherit">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar