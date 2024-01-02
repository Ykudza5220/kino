import { useEffect, useRef, useState,} from 'react';
import useRequest from '../hooks/useRequest';
import {Grid, Typography} from '@mui/material';
import SingelCard from '../components/SingleCard/SingleCard';
import {useDispatch,useSelector} from 'react-redux';
import { setSearch } from '../store/SearchSlice'
import Footer from "../components/Footer/Footer"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
function Home(){
  const actionFilms = useRequest(
    "https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/action"
  );
  const comedyFilms = useRequest(
    "https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/comedy"
  );
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
           <Grid container>
<Grid item xs={12} >
  <Typography xs={{ marginLeft: "1.5rem"}} variant='h3'>Actions Films</Typography>
<Swiper
      spaceBetween={20}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >{actionFilms?.map((show, index) => (
      <SwiperSlide>
<Grid item xs={12} key={index}>
        <SingelCard
          id={show.id}
          name={show.name}
          time={show.premiered}
          image={show.image ? show.image.medium ?? "":""}
          
        /></Grid>
      </SwiperSlide>
    ))}
     
    </Swiper>
    <Grid item xs={12}>
    <Typography variant='h3'>Comedi Films</Typography>
<Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >{comedyFilms?.map((show,index)=>(<SwiperSlide key={index} ><SingelCard 
      id={show.id}
    time={show.premiered}
    name={show.name}
    image={show.image ? show.image.medium ?? "":""}/></SwiperSlide>))} 
    </Swiper>
    </Grid>
</Grid>
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