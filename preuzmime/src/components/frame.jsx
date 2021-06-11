import React, { useEffect, useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Navbar from './navbar'
import ContentRow from './contentRow';
import CookieDial from './cookieDial';
import Download from './download'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
     mainFrame:{
         background: "white",
         width: "98.5%",
         height: "97%",
         borderRadius: "0.8em",
     },
     [theme.breakpoints.down('md')]: {
         mainFrame: {
            width: "97%",
            overflowY: "scroll",
            overflowX: "hidden"
         },

      },
      [theme.breakpoints.up('md')]: {
        minHeight: "200vh",
      },
}));

export default function Frame(props) {

    const classes= useStyles();

    return (
    <Router>
        <Paper className={classes.mainFrame} variant="outlined" >
        
            <Switch>
                 <Route exact path="/" children={<ContentRow/>} />
                 <Route path="/:id" children={<Download/>} />
            </Switch>
        
            <Navbar/>
            
            <CookieDial/>
        </Paper>
        </Router>
    )
}
