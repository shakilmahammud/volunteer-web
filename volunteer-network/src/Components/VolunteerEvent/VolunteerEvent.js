import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActionArea,CardMedia,CardContent,Typography} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const useStyles = makeStyles({
  root: {
    width: 250,
    height:270,
  },
});
 function VolunteerEvent(props) {
  const [user,setUser]=useContext(UserContext)
  const history=useHistory()
  const classes = useStyles();
  const {img, name}=props.event
  
  const eventHandler = () =>{
    setUser({...user,event:props.event})
    history.push('/registation-form')
  }

  return (
    <Card  className={classes.root} style={{background:props.myColor, borderRadius:'10px'}}>
      <CardActionArea >
        <CardMedia onClick={eventHandler}
          component="img"
          alt="Contemplative Reptile"
          height='200'
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent style={{color:'white'}}>
          <Typography gutterBottom >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default VolunteerEvent;