import React from 'react';
import OptionWrapper from './optionWrapper'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    

}));


export default function PasswordOption(props) {
const classes = useStyles();

    return (
        <OptionWrapper>
            
            <Grid container direction="row" justify="space-between" alignItems="center">
            
                <p className={classes.optionText}>Zaporka: </p>
                <TextField className={classes.inputOption} type="password" id="zaporka" onChange={ (e) => props.setPasswordO(e.target.value)} label="Unesite zaporku" variant="filled" />

            </Grid>

        </OptionWrapper>
    )
}
