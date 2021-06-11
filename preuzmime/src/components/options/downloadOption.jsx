import React from 'react';
import OptionWrapper from './optionWrapper'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    inputOption: {
        maxWidth: "40%"
    }

}));


export default function DownloadOption(props) {
const classes = useStyles();

    return (
        <OptionWrapper>
            
            <Grid container direction="row" justify="space-between" alignItems="center">
            
                <p className={classes.optionText}>Broj preuzimanja:</p>
                <TextField className={classes.inputOption} type="number" id="numOfDl" label="Unesite broj" onChange={ (e) => props.setDownloadO(e.target.value)} variant="filled" />

            </Grid>

        </OptionWrapper>
    )
}
