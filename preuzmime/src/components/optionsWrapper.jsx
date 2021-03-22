import React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    optionsGrid: {
        height: "55vh",
        backgroundColor: "#FFF2CC",
        borderRadius: "0.8em",
    },

}));

export default function OptionsWrapper() {
    const classes = useStyles();

    return (

            <Grid className={classes.optionsGrid} item xs={11} md={4} lg={3} container>
                <p style={{fontSize: "25px",margin:"auto", verticalAlign:"middle"}}>Ovdje idu neke opcije</p>
            </Grid>

    )
}
