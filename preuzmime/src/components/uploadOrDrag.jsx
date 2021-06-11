import React, { useState} from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Dropzone from 'react-dropzone'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "2em"
    },
    uploadGrid: {
        height: "55vh",
        marginBottom: "2em",
        backgroundColor: "white",
        border: "10px solid #FFF2CC",
        borderRadius: "0.8em",
        lineHeight: 1.6,
        marginRight: 5
    },
    uploadButton: {
        borderRadius: "0.6em",
        color: "#FFFFFF",
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
         },

      },
    fileName: {
        marginTop: "2em"
    }

}));

export default function UploadOrDrag(props) {
    const classes = useStyles();

    const [fileName, setFileName] = useState("");

    const sendFile = (acceptedFiles) => {

        if(acceptedFiles[0]){
            setFileName(acceptedFiles[0].name);
            props.setFileUoD(acceptedFiles[0])
        }

        

    }

    return (
            <Grid className={classes.uploadGrid}  item xs={11} md={6} lg={5} container>
                <Dropzone open maxSize={26214400} multiple={false} onDrop={acceptedFiles => sendFile(acceptedFiles)}>
                    {({getRootProps, getInputProps}) => (
                        <section style={{fontSize: "25px",margin:"auto", width: "100%", height: "100%"}}>
                            <div {...getRootProps({...classes.dropzoneStyles})} style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        
                                <input {...getInputProps()} />
                                <p>Ovdje povucite datoteku <br/> ili <br/> 
                                <Button className={classes.uploadButton} disableElevation variant="contained" color="primary">Pretražite uređaj</Button></p>
                                <p className={classes.fileName}>{fileName}</p>
                        
                            </div>
                        </section>
                    )}
                    </Dropzone>

            </Grid>
    )
}
