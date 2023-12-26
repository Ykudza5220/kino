import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation"
import  {Grid}  from "@mui/material"

function Main (){
    return(
        <div className="App">
        <Navigation/>
      <Grid container>
         <Outlet/>
      </Grid>
       </div>
    )
}
export default Main;