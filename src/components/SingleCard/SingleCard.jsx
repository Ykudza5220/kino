import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const buttonStyle ={
  textDecoration:"none",
  border:"1px solid #E50914",
  background:"#E50914",
  width:"100px",
  height:"30px",
  color:"#fff",
  fontSize:"15px",
  borderRadius:0,
  display:"flex",
  justifyContent:'center',
  alingnItems:'center'
};
const cardStyle = {
  maxWidth: 345,
  background: `linear-gradient(
            90deg, 
            rgba(0, 0, 0, 0.80) 0%,  
            rgba(20, 20, 20, 0.40) 50%,  
            rgba(83, 100, 141, 0.00) 100%
          )`,
  position: "absolute",
  width: "395px",
  height: "222px",
  color:"white",
  display:'flex', 
  flexDirection:'column', 
  justifyContent: 'center', 
  textAlign:'left'
};

export default function SingelCard({
    id,
    name,
    image,
    time
}) 
{
  const handleClick = () =>{
    
}
return (
    <Card sx={{ maxWidth: 345 ,}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="Кино"
        />
         <Card className='card'
        sx={cardStyle}
      ></Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {time}
          </Typography>
        </CardContent>
        
        <Link
      to={`/films/${id}`}
      style={buttonStyle}
      >
    Show more

      </Link>
      
      </CardActionArea>
    </Card>
  );
}