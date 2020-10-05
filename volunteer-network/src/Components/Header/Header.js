import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../../images/logo.png'
import {Button,Avatar} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [user]=useContext(UserContext)
    return (
        <div>
            <Grid container item xs={12} style={{height:'60px', padding:'10px 20px'}} alignItems='center' >
                
                <Grid item xs={7}>
                    <Link className='link' to='/'>
                        <img style={{height:'60px'}} src={logo} alt="volunteer network logo"/>
                    </Link>
                </Grid>
                
                <Grid container item md={5} justify='space-around'>
                    <Link to='/' className='link'><b>Home</b></Link>
                    <Link to='/donation' className='link'><b>Donation</b></Link>
                    <Link to='/Volunteer' className='link'><b>Volunteer</b></Link>
                    <Link to='/blog' className='link'><b>Blog</b></Link>
                    {
                        user.isSignedIn ? <b style={{color:'#3F90FC'}}><Avatar></Avatar> {user.name || 'User'} </b>
                        :<Link to='/login' className='link'>
                        <Button  variant="contained" style={{background:'#3F90FC', color:'white'}}>
                            Register
                        </Button>
                    </Link>
                    }
                    <Link to='/admin' className='link'>
                        <Button variant="contained" style={{background:'#434141', color:'white'}}>
                            Admin
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;