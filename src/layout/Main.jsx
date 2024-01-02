import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation"
import  {Grid}  from "@mui/material"

function Main (){
    return(
        <div className="App">
        <Navigation/>
      <Grid container sx={{marginTop:"1.25rem",minHeight:"100vh"}}>
         <Outlet/>
      </Grid>
       </div>
    )
}
export default Main;