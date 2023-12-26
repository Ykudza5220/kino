import { useEffect, useRef, useState } from 'react';
import useRequest from '../hooks/useRequest';
import {Grid} from '@mui/material';
import SingelCard from '../components/SingleCard/SingleCard';
import Footer from '../components/Footer/Footer';
import {useDispatch,useSelector} from 'react-redux';
import { setSearch } from '../store/SearchSlice'; 

function Home(){
const [selectedFilm,setSelectedFilm]=useState(null);
const apiSearch = useSelector((state) => state.search.search);
const apiData = useRequest (apiSearch);
const searchRef = useRef ("");
const dispatch =useDispatch();

useEffect (() =>{
  searchRef.current.focus();
},[])
const handleSearch = (e) =>{
dispatch (setSearch(e.target.value));
};
    return (
       <>
       <Grid item container sx={{display:'flex',justifyContent:'center'}}
       pt={5}>
        
     
        <input 
        type='text'
        style={{color:'#fff',backgroundColor:'rgba(192, 192, 192)',height:'25px'}}
         value={apiSearch}
         onChange={handleSearch} 
         ref={searchRef}
         />
           </Grid>
        <Grid container spacing={2}sx={{padding:'15px'}}>
        {apiData.map(({show},index)=>(
         <Grid item xs={3} key={index}>
        <SingelCard
        id={show.id}
        time={show.premiered}
        name={show.name}
        image={show.image ? show.image.medium ?? "":""}
        /></Grid>
        ))}
        </Grid>
       <Footer/>
       </>
       );
    
    
    
}
 export default Home;