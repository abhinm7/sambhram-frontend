import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './RightDrawerMenu.css'

const RightDrawerMenu = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Toggle drawer open/close state
    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };

    return (
        <div>
            {/* Hamburger Menu Icon */}
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>

            {/* Drawer component, anchored to the right */}
            <Drawer
                anchor="right"  // This positions the drawer on the right side
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}

                PaperProps={{ className: 'customDrawer' }}
            >
                {/* Content inside the drawer */}
                <List>

                    <Link to='/'>
                        <ListItem button>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>

                    <Link to='/register'>
                        <ListItem button>
                            <ListItemText primary="Register" />
                        </ListItem>
                    </Link>

                    <Link to='/events'>
                        <ListItem button>
                            <ListItemText primary="Events" />
                        </ListItem>
                    </Link>

                    <ListItem button>
                        <ListItemText primary="Merch" />
                    </ListItem>

                    <ListItem button>
                        <ListItemText primary="About" />
                    </ListItem>

                </List>
            </Drawer>
        </div>
    );
};

export default RightDrawerMenu;
