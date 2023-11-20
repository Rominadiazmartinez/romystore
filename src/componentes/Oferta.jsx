import { CardMedia } from "@mui/material"
import React from "react";

function Oferta(props){
    return(

            <CardMedia>
                <img
                    alt={props.alternativo}
                    style={{width:"100%", height:"auto", marginBottom: 0}}
                    src={require(`../imagenes/Oferta-${props.imagen}.jpg`)}
                />
             </CardMedia>
        
    )
}

export default Oferta