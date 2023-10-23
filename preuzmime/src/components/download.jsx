import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import Grid from '@material-ui/core/Grid';
import { makeStyles} from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import PasswordPopup from './passwordPopup';

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
    dlA:{
        width: "100%",
        textDecoration: "none"
    }
}));

export default function Download() {
    
    const {id} = useParams()
    const classes = useStyles();
    const [file,setFile] = useState();
    const [name,setName] = useState();
    const [pass, setPass] = useState(null)
    const [openPopup, setOpenPopup] = useState(false);

    useEffect( () => {
        download() }, [pass]);

    const download = () => {

        let requestOptions = {
            method: 'POST',
            body: JSON.stringify({ password: pass }),
            headers: { 
                'Content-Type': 'application/json' 
            }
        }

        console.log(requestOptions)

        fetch('http://localhost:5000/api/'+id, requestOptions).then(response => {
            if (response.headers.get('Content-disposition')) {
              const fileName = response.headers.get('Content-disposition').split('filename="')[1].split('"')[0];
              setName(fileName);
              console.log("here")
              return response.blob().then(data => {
                setFile(window.URL.createObjectURL(data));
              });
            } else {
              return response.json().then(data => {
                if (data.error === 1) {
                  setOpenPopup(true);
                  console.log('Received JSON data:', data);
                } else {
                  // Handle JSON data
                  console.log('Received JSON data:', data);
                }
              });
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });

    }
    //
    
    return (
        <React.Fragment>
            
            <Grid className={classes.mainGrid} container direction="row" justify="center" alignItems="center" spacing={3}>
                
            <Grid className={classes.optionsGrid} item xs={11} md={7} lg={6} container direction="column" justify="center" alignItems="center">
                    <Typography variant="h3" className={classes.optionText}>
                            {name}
                    </Typography>
                   <a className={classes.dlA} href={file} download={name}> <Button  color="primary" className={classes.downloadButton} variant="contained"> Preuzmi datoteku</Button></a>
            </Grid>
                
                
            </Grid> 

        <PasswordPopup setOpenPopup={setOpenPopup} openPopup={openPopup} setPass={setPass} />
        </React.Fragment>
    )
}
