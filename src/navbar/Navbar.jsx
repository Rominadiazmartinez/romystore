import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';



export default function Navbar(){
    const [open, setOpen] = useState(false);

    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color = "inherit"
                        size = "large"
                        onClick={() => setOpen(true)}
                        sx={{ display: { xs: "flex", sm: "none"}}}>
                        <MenuIcon
                        />
                    </IconButton>

                        <Typography sx={{
                            flexGrow:1
                         }}>
                        </Typography>

                    <box 
                    sx ={{display : { xs: "none", sm: "block"}}}>
                        {navLinks.map(item =>(
                            <Button 
                                color="inherit" 
                                key ={item.title}
                                component= "a"
                                href= {item.path}
                                >{item.title}                                  
                            </Button>
                            ))}
                    </box>
                                          
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor ="left"
                onClose={() => setOpen(false)}>
                <NavListDrawer navLinks = {navLinks} /> 
            </Drawer>
             
        </>
    )
}