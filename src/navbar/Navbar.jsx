import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';


const navLinks = [
    {
        title: "Home", 
        path: "#",
        icon: <HomeIcon/>
    },
    {
        title: "Mi Cuenta", 
        path: "#cuenta",
        icon: <AccountCircle/>
    },
    {
        title: "Productos", 
        path: "#productos",
        icon: <InventoryIcon/>
    },
  ]


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