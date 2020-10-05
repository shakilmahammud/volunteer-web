import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import background from '../../images/bg.jpg'
import { Grid } from '@material-ui/core';
import VolunteerEvent from '../VolunteerEvent/VolunteerEvent'
const Home = () => {
   const [volunteers, setVolunteers]=useState([])
    useEffect(()=>{
        fetch('https://volunteer-network-serve.herokuapp.com/show-volunteers')
        .then(res=>res.json())
        .then(result=>{ 
            setVolunteers(result.slice(0,20))
        })
    },[])

    return (
        <>
            <div style={{background:`linear-gradient(to bottom,
                 rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),
                 url(${background}) `, height:'496px'}}>

                <Header></Header>
                <div style={{textAlign:'center', padding:'30px 0'}}>
                    <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
                    
                        <input style={{borderTopLeftRadius: '5px',borderBottomLeftRadius: '5px'}}
                            className='input' type="text" placeholder="Search"/>
                        <button style={{borderTopRightRadius: '5px',borderBottomRightRadius: '5px'}} 
                            className='blue-button' type="submit">Search</button>
                    
                </div>
                <div className='container' style={{marginTop:'70px'}}>
                    <Grid container item xs={12} spacing='5' justify='center'  style={{ textAlign:'center', margin:'auto'}}>
                    {   
                        volunteers.map(event=>{
                            let colors=['#3F90FC','#FFBD3E','#FF7044', '#cc6fb5e0'];
                            const random = Math.floor(Math.random()*4)
                            return(
                                <Grid item xs={12} sm={6} md={3} key={event._id}>
                                    <VolunteerEvent event={event} myColor={colors[random]} ></VolunteerEvent>
                                </Grid>
                            )
                        })
                    }
                    </Grid>
                </div>
            </div>
        </>
    );
};

export default Home;