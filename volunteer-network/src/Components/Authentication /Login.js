import React, { useContext } from 'react';
import {FormGroup,  Grid,} from '@material-ui/core';
import firebase from 'firebase'
import firebaseConfig  from '../../firebase.config';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import google from '../../images/google.png'
firebase.initializeApp(firebaseConfig);
 function Login() {
  const [user,setUser]=useContext(UserContext)
  const history=useHistory()

  //sign in with google provider
  const googleSigninHandler = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result=>{
      setUser(
        {...user, 
          email:result.user.email, 
          name:result.user.displayName, 
          uid:result.user.uid, 
          isSignedIn:true})
      history.location.state ?
       history.replace(history.location.state.pathname)
      : history.goBack()
    })
    .catch(error=>console.log(error))
  }

  return (
   <>
     <FormGroup style={{width:"400px",border:'1px solid lightgray',
      padding:'30px', borderRadius:'10px',  margin:'auto', marginTop:'20vh'}}>
        <Grid container item justify='center' alignItems='center' onClick={googleSigninHandler}
          style={{margin:'auto',cursor:'pointer',  width:'270px',marginTop:'20px', borderRadius:"30px", padding:'0'}} >
          <Grid item>
            <img style={{width:'35px', margin:'0', padding:'0'}} src={google} alt=""/>
          </Grid>
          <Grid style={{marginBottom:'5px', marginLeft:'10px', }} item >Continue with Google</Grid>
        </Grid>
    </FormGroup>   
   </>
  );
}
export default Login;