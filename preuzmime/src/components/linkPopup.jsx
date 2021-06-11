import {React, useRef} from 'react';
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

function LinkPopup(props){

    const classes=useStyles();

    const textField = useRef(null);

    const copyLink = (e) => {
        textField.current.select();
        document.execCommand('copy');
        e.target.focus();
      }

    return(
        <div> 
            <Dialog open={props.openPopup} maxWidth="sm" fullWidth={true} classes={{paper: classes.dialogWrapper}}>
                <ClickAwayListener onClickAway={()=>props.setOpenPopup(false)}>
                    <div>
                        <DialogTitle className={classes.dialogPart1}>
                                <span className={classes.fontChange}>Vaš link za preuzimanje je:</span> 
                                <CloseIcon style={{cursor:"pointer", float: "right"}} onClick={()=>props.setOpenPopup(false)}></CloseIcon>
                        </DialogTitle>
                        <DialogContent className={classes.dialogPart2}>

                            <Grid container direction="row" justify="center" alignItems="center">
                        
                                <TextField inputRef={textField} label="Link za preuzimanje" size="small" value={props.link} className={classes.linkContainer} variant="filled" />
                                <Button variant="contained" size="large" onClick={(e) => copyLink(e)} className={classes.copyButton}>Kopiraj</Button> 
                        
                            </Grid> 

                            <Button variant="contained" size="large" color="primary" className={classes.closeButton} onClick={()=>props.setOpenPopup(false)}>Zatvori</Button> 

                        </DialogContent>
                    </div>
                </ClickAwayListener>
            </Dialog>
        </div>
        );

}

export default LinkPopup;