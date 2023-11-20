import { Alert, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";
import React, { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




function Labiales(props) {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () =>{
    setOpen(true)
  }
  const handleClose = () =>{
    setOpen(false)
  }

  return (
    <Container>
       <Card sx={{
            alignContent: "center",
            transition: "0.25",
            "&:hover":{
                transform: "scale(1.05)"
            },
            marginBottom: 5
       }} >

        <CardMedia>
            <img
                    alt={props.alternativo}
                    style ={{width:"100%", height:"auto", marginBottom: 0}}
                    src={require(`../imagenes/labial-${props.imagen}.jpg`)}
                />
        </CardMedia>

        <CardContent sx ={{
            minHeight: "120px",
        }}>
            <Typography
                variant ="subtitle1"
                sx = {{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#47215f"
                }}>
                {props.nombre} - {props.marca}
            </Typography>

            <Typography
                variant = "subtitle1"
                sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingTop: 1
                    }}
                        >
                {props.precio}
            </Typography>

        </CardContent>


        <CardActions sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 3
            }}>



            <Button
                onClick = {handleClickOpen}
                variant = "contained"
                size = "small"
                startIcon = {<AddShoppingCartIcon/>}
                sx = {{
                    backgroundColor: "#955b89",
                    }}
                >AÑADIR AL CARRITO
            </Button>

            <Dialog
                open={open}
                onclose={handleClose}
                aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title" >
                        <Alert>Producto añadido con éxito al carrito</Alert>
                    </DialogTitle>
                    <DialogContent>
                        <Card sx={{ maxWidth: 400, 
                                    display: "flex", 
                                    justifyContent: "center",
                                    }}>
                            <CardMedia>
                                <img
                                alt={props.alternativo}
                                height="151"
                                src={require(`../imagenes/labial-${props.imagen}.jpg`)}
                            />
                            </CardMedia>

                            <CardContent sx={{flex: "1 0 auto"}}>
                                <Typography
                                    variant ="subtitle1"
                                    sx = {{
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        color: "#47215f"
                                    }}>
                                    {props.nombre}
                                </Typography>

                                <Typography
                                    variant ="subtitle1"
                                    sx = {{
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        color: "#47215f"
                                    }}>
                                    {props.marca}
                                </Typography>
                                <br />
                                <Typography
                                    variant ="subtitle1"
                                    sx = {{
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        color: "black"
                                    }}>
                                    {props.precio}
                                </Typography>
                            </CardContent>
                        </Card>

                    </DialogContent>
                    <DialogActions
                    sx={{
                        paddingBottom: 2,
                        paddingLeft:2,
                        paddingRight: 2
                    }}>
                        <Button
                            variant = "contained"
                            size = "small"
                            sx = {{ backgroundColor: "#955b89",}}
                            onClick={handleClose}>Seguir Comprando</Button>
                        <Button
                            variant = "contained"
                            size = "small"
                            sx = {{ backgroundColor: "#955b89",}}
                            onClick={handleClose}>Finalizar Compra</Button>
                        <Button
                             variant = "contained"
                             size = "small"
                             sx = {{ backgroundColor: "#955b89",}}
                             onClick={handleClose}>Ver Carrito</Button>
                    </DialogActions>
            </Dialog>
        </CardActions>
       </Card>
    </Container>
  );
}

export default Labiales;
