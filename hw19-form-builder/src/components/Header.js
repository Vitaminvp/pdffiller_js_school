import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import auth0 from "../services/auth0"

export default function ButtonAppBar() {


    return (
        <div >
            <AppBar position="static">
                <Toolbar style={{justifyContent: "flex-end"}}>
                    <Button color="inherit" onClick={() => auth0.login()}>Login</Button>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
