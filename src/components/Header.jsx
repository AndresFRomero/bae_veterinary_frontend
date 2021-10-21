import React from 'react'
import {AppBar, Box, Toolbar, IconButton, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Bae Veterinary 
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
