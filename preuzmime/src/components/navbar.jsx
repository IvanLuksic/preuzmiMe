import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from './images/preuzmiMeText.svg';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    image:{
        height: theme.spacing(6),
        width: theme.spacing(20),
        
    },
    imageLink:{
        marginLeft: "4%",
        marginTop: "2%"
    },
    title: {
        flexGrow: 1,
        MarginLeft: 100,
        marginRight: "auto",
    },
    buttonPostavi: {
      borderRadius: "0.8em",
      position: "absolute",
      marginRight: "4%",
      marginTop: "2%",
      padding: 15,
      right: 0,
      color: "#FFFFFF",
      backgroundColor: theme.palette.primary.main,
      maxHeight: theme.spacing(4),
      '&:hover': {
          backgroundColor: theme.palette.primary.dark,
       },
    },
    [theme.breakpoints.down('sm')]: {
       image: {
        height: theme.spacing(5),
        width: theme.spacing(12),
        
        },
        imageLink:{
            marginTop: "5%",
            marginLeft: "8%",
        },
        buttonPostavi:{
            height: theme.spacing(5),
            width: theme.spacing(25),
            maxHeight: theme.spacing(3),
            marginTop: "5%",
            marginRight: "8%",
        }
    },
  }));


function Navbar(){
    const classes = useStyles();
    return(
    <div className={classes.root} >
        <AppBar position="fixed" color="transparent" elevation={0} style={{background: 'transparent'}}>
            <Toolbar disableGutters={true}>
            <Link to="/" style={{color: "white"}} className={classes.imageLink}><img src={logo} alt='slika' className={classes.image}/></Link>

                        <Button size="small" className={classes.buttonPostavi}>
                          <Link to="/postavi" style={{color: "white", textDecoration: "none"}}>Postavi novu datoteku</Link>
                        </Button>
                    
            </Toolbar>
        </AppBar>
    </div>
    );
}

export default Navbar;
