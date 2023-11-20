import { Grid, Typography } from "@mui/material";
import "./App.css";
import Labiales from "./componentes/Labiales";
import Navbar from "./navbar/Navbar";
import Manner from "./componentes/Manner"
import Oferta from "./componentes/Oferta";

const navLinks = [
  {
      title: "Home", 
      path: "#",
      icon: <HomeIcon/>
  },
  {
      title: "Mi Cuenta", 
      path: "#cuenta",
      icon: <AccountCircleIcon/>
  },
  {
      title: "Productos", 
      path: "#productos",
      icon: <InventoryIcon/>
  },
]

function App() {
  return (
    <>

      <Navbar/>

      <Grid container spacing ={2}
          sx={{
            p:10
          }}>

        <Grid item xs={12}>
          <Oferta
            imagen = "imagen"
            alternativo = "Ofertas"
          />
        </Grid>

        <Grid item xs ={12} md ={3}>
          <Manner
            imagen = "polvo"
            alternativo = "Polvo Bye Filter"
          />
        </Grid>

        <Grid item xs ={12} md ={3}>
          <Manner
            imagen = "rosy"
            alternativo = "Rosy McMichael"
          />
        </Grid>

        <Grid item xs ={14} md ={3}>
          <Manner
            imagen = "teaseme"
            alternativo = "Tease Me"
          />
        </Grid>

        <Grid item xs ={14} md ={3}>
          <Manner
            imagen = "flawless"
            alternativo = "Base en polvo Flawless Stay Powder"
          />
        </Grid>


      </Grid>

      <Typography 
      variant= "h2"
      sx = {{
        textAlign: "center",
        p: 5,
        backgroundColor: "#955b89",
        paddingBottom: 1,
        paddingTop: 1,
        color: "white",
        fontWeight: "bold"
        
      }}>
        Labiales
      </Typography>
      
          <Grid 
            container spacing={2}
            sx={{
              p:10
            }}>

             <Grid item 
                xs={6}
                sm={3}>
                <Labiales
                  imagen="icebreakers"
                  nombre=" Lip Balm Icebreakers"
                  marca="Hershey"
                  precio="$3990"
                  alternativo="Labial Icebreakers"
                  />
              </Grid>
    
            <Grid item 
              xs={6}
              sm={3}>
              <Labiales
                imagen="jeringa"
                nombre="Plump & Pout Legally Hot"
                marca="Beauty Creations"
                precio="$7990"
                alternativo="Labial Plump & Pout"
              />
            </Grid>

            <Grid item 
              xs={6}
              sm={3}>
              <Labiales
                imagen="kissme"
                nombre="Kiss Me Lipstick"
                marca="Beauty Creations"
                precio="$3500"
                alternativo="Labial Kiss Me"
              />
            </Grid>

            <Grid item 
              xs={6}
              sm={3}>
              <Labiales
                imagen="nighty"
                nombre="Mascarilla Nighty Night"
                marca="Kleancolor"
                precio="$3990"
                alternativo="Labial Nighty Night"
              />
            </Grid>

            <Grid item 
              xs={6}
              sm={3}
              >
              
              <Labiales
                imagen="rosymcmichael"
                nombre="The True Red Kit"
                marca="Beauty Creations"
                precio="$13990"
                alternativo="Labial The True Red Kit Rosy McMichael"
              />
            </Grid>

            <Grid item 
              xs={6}
              sm={3}
            >
              <Labiales
                imagen="sandia"
                nombre="Lip Oil Sandía"
                marca="Beauty Creations"
                precio="$4990"
                alternativo="Labial Lip Oil Sandía"
              />
            </Grid>

            <Grid item 
              xs={6}
              sm={3}
            >
              <Labiales
                imagen="nova"
                nombre="Velvet Stay Nova"
                marca="Beauty Creations"
                precio="$3500"
                alternativo="Labial Velvet Stay Nova"
              />
            </Grid>

            <Grid item 
              xs={6}
              sm={3}
            >
              <Labiales
                imagen="take"
                nombre="Double Take"
                marca="Beauty Creations"
                precio="$4500"
                alternativo="Labial Double Take"
              />
            </Grid>
          </Grid>
    </>
  );
}

export default App;
