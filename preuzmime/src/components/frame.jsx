import React, { useEffect, useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Navbar from './navbar'
import ContentRow from './contentRow';


const useStyles = makeStyles((theme) => ({
     mainFrame:{
         background: "white",
         width: "98.5%",
         height: "97%",
         borderRadius: "0.8em",
     },
     [theme.breakpoints.down('md')]: {
         mainFrame: {
            width: "96%"
         },
        minHeight: "100vh",
        overflowY: "show",

      },
      [theme.breakpoints.up('md')]: {
        minHeight: "200vh",
      },
}));

export default function Frame() {

    const classes= useStyles();

    return (
        <Paper className={classes.mainFrame} variant="outlined" >
            <Navbar/>
            <ContentRow/>
        </Paper>
    )
}
