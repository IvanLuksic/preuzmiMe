import {React,useState} from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles} from '@material-ui/core/styles';
import UploadOrDrag from './uploadOrDrag'
import OptionsContainer from './optionsContainer'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    optionsGrid: {
        height: "50vh",
        backgroundColor: "#FFF2CC",
        borderRadius: "0.8em",
    },
    mainGrid:{
        flexGrow: 1,
        marginTop:"22.5vh"
    },
}));

export default function ContentRow() {
    const [file,setFile] = useState(null);
    const classes = useStyles();

    return (

        <Grid className={classes.mainGrid} container direction="row" justify="center" alignItems="center" spacing={3}>
           <UploadOrDrag setFileUoD={setFile}/>
            <OptionsContainer fileO={file}/>
        </Grid> 
    )
}
