import React, {useState}from 'react';
import {Button, Dialog,DialogContent,DialogTitle, makeStyles, Grid}from'@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

//takes a functionToConfirm and message text as text + openPopup and setOpenPopup

const useStyles=makeStyles(theme =>({
    dialogWrapper:{
        // position:'absolute',
        textAlign: 'center',
        backgroundColor:theme.palette.primary.main,
        padding:"0.5em",
        borderRadius:"0.8em"
    },
    dialogPart1:{
        backgroundColor:"white",
        
        borderRadius:" 7px 7px 0 0"
    },
    fontChange: {
        fontFamily: "Roboto Slab",
        maxWidth: "70%",
        display: "inline-block"
    },
    dialogPart2:{
        paddingTop: "2em",
        backgroundColor:"white",
        //overflowY: "inherit",
        borderRadius:"0 0 7px 7px"
    },
    copyButton:{
        color: "white",
        marginLeft: "1em",
        backgroundColor: theme.palette.success.main,
        '&:hover': {
            backgroundColor: theme.palette.success.dark,
         },
        [theme.breakpoints.down('xs')]: {
            marginTop: "1em",
            marginLeft: "0",
        },
        
    },
    closeButton:{
        color: "white",
        marginTop: "2em",
        marginBottom:"2em",
        [theme.breakpoints.down('xs')]: {
            marginTop: "1.5em",
        },

    },
    linkContainer:{
        width: "60%",
        [theme.breakpoints.down('xs')]: {
            width: "100%"
            
        },
    }

}))

export default function PasswordPopup(props){

    const [value,setValue] = useState()

    const classes=useStyles();


    return(
        <div> 
            <Dialog open={props.openPopup} maxWidth="sm" fullWidth={true} classes={{paper: classes.dialogWrapper}}>
                <ClickAwayListener onClickAway={()=>props.setOpenPopup(false)}>
                    <div>
                        <DialogTitle className={classes.dialogPart1}>
                                <span className={classes.fontChange}>Unesite zaporku datoteke:</span> 
                                <CloseIcon style={{cursor:"pointer", float: "right"}} onClick={()=>props.setOpenPopup(false)}></CloseIcon>
                        </DialogTitle>
                        <DialogContent className={classes.dialogPart2}>

                            <Grid container direction="row" justify="center" alignItems="center">
                        
                                <TextField id="filled-basic" label="Zaporka datoteke" type="password" size="small" onChange={(event)=>setValue(event.target.value)} className={classes.linkContainer} variant="filled" />
                                <Button variant="contained" size="large" className={classes.copyButton} onClick={()=>{props.setPass(value); props.setOpenPopup(false)}}>Unesi</Button> 
                        
                            </Grid> 

                            <Button variant="contained" size="large" color="primary" className={classes.closeButton} onClick={()=>props.setOpenPopup(false)}>Odustani</Button> 

                        </DialogContent>
                    </div>
                </ClickAwayListener>
            </Dialog>
        </div>
        );

}