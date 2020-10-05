import React, { useContext } from 'react';
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const PrivateRoute = ({children, ...rest}) => {
    const [user]=useContext(UserContext)
    const history=useHistory()
    const location=useLocation()
    return (
        <Route
            {...rest}
            render ={
                ()=>user.isSignedIn ? (children)
                : <Redirect to={{
                    pathname:'/login',
                    state:location
                }}
                />
            }
        >

        </Route>
    );
};

export default PrivateRoute;