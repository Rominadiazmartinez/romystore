import { CardMedia } from "@mui/material"
import React from "react";

function Manner(props){
    return(

            <CardMedia
                sx={{
                    alignContent: "center",
                    transition: "0.25",
                    "&:hover":{
                        transform: "scale(1.05)"
                    },
                    marginBottom: 5
            }}>
                <img
                    alt={props.alternativo}
                    style={{width:"100%", height:"auto", marginBottom: 0}}
                    src={require(`../imagenes/Oferta-${props.imagen}.jpg`)}
                />
             </CardMedia>
        
    )
}

export default Manner