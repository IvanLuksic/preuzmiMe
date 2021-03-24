import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Dropzone from 'react-dropzone'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    uploadGrid: {
        height: "55vh",
        backgroundColor: "white",
        border: "10px solid #FFF2CC",
        borderRadius: "0.8em",
        lineHeight: 1.6,
        marginRight: 5
    },
    uploadButton: {
        borderRadius: "0.8em",
        color: "#FFFFFF",
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
         },
      },
    dropzoneStyles: {
        
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            borderWidth: 2,
            borderRadius: 2,
            borderColor: '#eeeeee',
            borderStyle: 'dashed',
            backgroundColor: '#fafafa',
            color: '#bdbdbd',
            outline: 'none',
            transition: 'border .24s ease-in-out'
    }
}));

export default function UploadOrDrag() {
    const classes = useStyles();
    
    return (
            <Grid className={classes.uploadGrid}  item xs={11} md={6} lg={5} container>
                <Dropzone noClick={true} open onDrop={acceptedFiles => console.log(acceptedFiles)}>
                    {({getRootProps, getInputProps}) => (
                        <section style={{fontSize: "25px",margin:"auto", width: "100%", height: "100%"}}>
                        <div {...getRootProps({...classes.dropzoneStyles})} style={{height: "100%", }}>
                            <input {...getInputProps()} />
                            <p style={{verticalAlign:"middle"}}>Ovdje povucite datoteku <br/> ili <br/> 
                            <Button className={classes.uploadButton} disableElevation variant="contained" color="primary">Pretražite računalo</Button></p>
                        </div>
                        </section>
                    )}
                    </Dropzone>

            </Grid>
    )
}
