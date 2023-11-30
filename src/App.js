import { Grid, Typography } from "@mui/material";
import "./App.css";
import Labiales from "./componentes/Labiales";
import Navbar from "./navbar/Navbar";
import Manner from "./componentes/Manner"
import Oferta from "./componentes/Oferta";
import Sombras from "./componentes/Sombras";
import Brochas from "./componentes/Brochas";





function App(){
  return(
    <>
    <Navbar/>

    <Grid container spacing ={2}
        sx={{
          p:10
        }}>

      <Grid item xs={12}>
        <Oferta
          imagen = "skincare"
          alternativo = "Skincare"
        />
      </Grid>

      <Grid item xs ={12} md ={3}>
        <Manner
          imagen = "mcmichael"
          alternativo = "Rosy McMichael"
        />
      </Grid>

      <Grid item xs ={12} md ={3}>
        <Manner
          imagen = "yeri"
          alternativo = "Yeri Mua"
        />
      </Grid>

      <Grid item xs ={14} md ={3}>
        <Manner
          imagen = "luis"
          alternativo = "Luis Torres"
        />
      </Grid>

      <Grid item xs ={14} md ={3}>
        <Manner
          imagen = "lesdo"
          alternativo = "LesDoMakeUp"
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
                imagen="grape"
                nombre=" Grape Sweet Dose Duo"
                marca="Beauty Creations"
                precio="$6.990"
                alternativo="Grape Sweet Dose Duo"
                />
            </Grid>

          <Grid item 
            xs={6}
            sm={3}>
            <Labiales
              imagen="jeringa"
              nombre="Plump & Pout Legally Hot"
              marca="Beauty Creations"
              precio="$7.990"
              alternativo="Labial Plump & Pout"
            />
          </Grid>

          <Grid item 
            xs={6}
            sm={3}>
            <Labiales
              imagen="watermelonlipmask"
              nombre="Watermelon Lip Mask"
              marca="Beauty Creations"
              precio="$6.500"
              alternativo="Watermelon Lip Mask"
            />
          </Grid>

          <Grid item 
            xs={6}
            sm={3}>
            <Labiales
              imagen="kisstell"
              nombre="Kiss N Tell Duo"
              marca="Beauty Creations"
              precio="$9.990"
              alternativo="Kiss N Tell Duo"
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
              precio="$13.990"
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
              precio="$4.990"
              alternativo="Labial Lip Oil Sandía"
            />
          </Grid>

          <Grid item 
            xs={6}
            sm={3}
          >
            <Labiales
              imagen="murillo"
              nombre="Murillo Twins"
              marca="Beauty Creations"
              precio="$7.500"
              alternativo="Labial Murillo Twins"
            />
          </Grid>

          <Grid item 
            xs={6}
            sm={3}
          >
            <Labiales
              imagen="elf"
              nombre="Elfie Lip Duos"
              marca="Beauty Creations"
              precio="$9.990"
              alternativo="Elfie Lip Duos"
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
      Paletas de Sombra
    </Typography>

      <Grid 
      container spacing={2}
      sx={{
        p:10
      }}>

          <Grid item
          xs={6}
          sm={3}>

          <Sombras
            imagen="alicia"
            nombre="Alicia"
            marca="Beauty Creations"
            precio="$10.990"
            alternativo="Paleta de Sombras Alicia"
            
          />
          </Grid>

          <Grid item
          xs={6}
          sm={3}>

          <Sombras
            imagen="ariel"
            nombre="Ariel"
            marca="Beauty Creations"
            precio="$11.990"
            alternativo="Paleta de Sombras Ariel"       
          />
          </Grid>

          <Grid item
          xs={6}
          sm={3}>

          <Sombras
            imagen="hues"
            nombre="Splash Of Hues"
            marca="Beauty Creations"
            precio="$6.990"
            alternativo="Paleta de Sombras Splash Of Hues Vol 1"       
          />
          </Grid>

          <Grid item
          xs={6}
          sm={3}>

          <Sombras
            imagen="irresistible"
            nombre="Irresistible"
            marca="Beauty Creations"
            precio="$6.990"
            alternativo="Paleta de Sombras Irresistible"         
          />
          </Grid>

          <Grid item
          xs={6}
          sm={3}>

          <Sombras
            imagen="island"
            nombre="Island Girl"
            marca="Beauty Creations"
            precio="$10.990"
            alternativo="Paleta de Sombras Island Girl"         
          />
          </Grid>

          <Grid item
          xs={6}
          sm={3}>

          <Sombras
            imagen="rad"
            nombre="Thats So Rad"
            marca="Beauty Creations"
            precio="$6.990"
            alternativo="Paleta de Sombras Thats So Rad"         
          />
          </Grid>

          <Grid item
          xs={6}
          sm={3}>

          <Sombras
            imagen="ruby"
            nombre="Madame Ruby"
            marca="Beauty Creations"
            precio="$14.990"
            alternativo="Paleta de Sombras Madame Ruby"         
          />
          </Grid>

          <Grid item
          xs={6}
          sm={3}>

          <Sombras
            imagen="tiana"
            nombre="Tiana"
            marca="Beauty Creations"
            precio="$11.990"
            alternativo="Paleta de Sombras Tiana"         
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
      Brochas
    </Typography>

    <Grid 
    container spacing = {2} 
    sx={{
      p:10
    }}>
      <Grid item
          xs={6}
          sm={3}>

          <Brochas
            imagen="classic"
            nombre="Set 12 brochas Classic"
            marca="Bebella"
            precio="$17.990"
            alternativo="Set 12 brochas Classic"         
          />
          </Grid>

      <Grid item
          xs={6}
          sm={3}>

          <Brochas
            imagen="faves"
            nombre="Set 12 brochas Faves"
            marca="Bebella"
            precio="$17.990"
            alternativo="Set 12 brochas Faves"         
          />
          </Grid>

          <Grid item
          xs={6}
          sm={3}>

          <Brochas
            imagen="ideal"
            nombre="Set 12 brochas Ideal"
            marca="Bebella"
            precio="$17.990"
            alternativo="Set 12 brochas Ideal"         
          />
          </Grid>

          <Grid item
          xs={6}
          sm={3}>

          <Brochas
            imagen="london"
            nombre="Set 24 brochas London"
            marca="Bebella"
            precio="$21.990"
            alternativo="Set 24 brochas London"         
          />
          </Grid>

          <Grid item
          xs={6}
          sm={3}>

          <Brochas
            imagen="malibu"
            nombre="Set 24 brochas Malibu"
            marca="Bebella"
            precio="$21.990"
            alternativo="Set 24 brochas Malibu"         
          />
          </Grid>

          <Grid item
          xs={6}
          sm={3}>

          <Brochas
            imagen="stop"
            nombre="Set 12 brochas Dont Stop"
            marca="Bebella"
            precio="$17.990"
            alternativo="Set 12 brochas Dont Stop"         
          />
          </Grid>

          <Grid item
          xs={6}
          sm={3}>

          <Brochas
            imagen="lime"
            nombre="Set 24 brochas Lime Party"
            marca="Beauty Creations"
            precio="$19.990"
            alternativo="Set 24 brochas Lime Party"         
          />
          </Grid>

          <Grid item
          xs={6}
          sm={3}>

          <Brochas
            imagen="dare"
            nombre="Set 12 brochas Dare To Bright"
            marca="Beauty Creations"
            precio="$17.990"
            alternativo="Set 12 brochas Dare To Bright"         
          />
          </Grid>

          


    </Grid>
    </>
  )
}

export default App;
