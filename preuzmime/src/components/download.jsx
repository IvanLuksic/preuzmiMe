import React from 'react'
import { useParams } from 'react-router';
import Grid from '@material-ui/core/Grid';
import { makeStyles} from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    optionsGrid: {
        height: "55vh",
        backgroundColor: "#FFF2CC",
        borderRadius: "0.8em",
        marginBottom: "2em"
    },
    mainGrid:{
        flexGrow: 1,
        marginTop:"22.5vh"
    },
    optionText:{
        fontFamily: "Roboto Slab",
    },
    downloadButton: {
        borderRadius: "0.6em",
        color: "#FFFFFF",
        width: "50%",
        marginTop: "2em",
        backgroundColor: theme.palette.success.main,
        '&:hover': {
            backgroundColor: theme.palette.success.dark,
         },
      },
}));

export default function Download(props) {
    
    const {id} = useParams()
    const classes = useStyles();


    
    return (
        <React.Fragment>
            
            <Grid className={classes.mainGrid} container direction="row" justify="center" alignItems="center" spacing={3}>
                
            <Grid className={classes.optionsGrid} item xs={11} md={7} lg={6} container direction="column" justify="center" alignItems="center">
                    <Typography variant="h3" className={classes.optionText}>{id}</Typography>
                    <Button color="primary" className={classes.downloadButton} variant="contained">Preuzmi datoteku</Button>
            </Grid>
                
                
            </Grid> 

        </React.Fragment>
    )
}
