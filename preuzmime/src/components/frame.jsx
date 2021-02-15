import React, { useEffect, useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
     mainFrame:{
         background: "white",
         width: "97%",
         height: "95%",
         borderRadius: "1em",
     },
     [theme.breakpoints.down('md')]: {
         mainFrame: {
            height: "97%"
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
        <div className={classes.mainFrame}>
            
        </div>
    )
}
