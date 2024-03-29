import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    
    root: {
        flexGrow: 1,
        width: "100%",
      },
      paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary, 
      },

}));

export default function OptionWrapper(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>

        <Grid container>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    {props.children}
                </Paper>
            </Grid>
        </Grid>
            
        </div>
    )
}
