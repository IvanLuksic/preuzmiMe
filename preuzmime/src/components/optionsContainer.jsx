import {React,useState} from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles} from '@material-ui/core/styles';
import PasswordOption from './options/passwordOption';
import DownloadOption from './options/downloadOption';
import ExpireOption from './options/expireOption';
import UploadOption from './options/uploadOption'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    optionsGrid: {
        height: "55vh",
        backgroundColor: "#FFF2CC",
        borderRadius: "0.8em",
        marginBottom: "2em"
    },
    optionText:{
        fontFamily: "Roboto Slab",
        fontSize: "1.56em"
    },
    optionItalic:{
        fontStyle: "italic"
    }


}));

export default function OptionsContainer(props) {
    const classes = useStyles();
    const [password, setPassword] = useState(null);
    const [download, setDownload] = useState(null);
    const [expire, setExpire] = useState(null);

    return (

            <Grid className={classes.optionsGrid} item xs={11} md={4} lg={3} container>
                <Typography className={classes.optionText} variant="h4">
                    Opcije <i className={classes.optionItalic}>(neobavezno):</i>
                </Typography>
                <PasswordOption setPasswordO={setPassword}/>
                <DownloadOption setDownloadO={setDownload}/>
                <ExpireOption setExpireO={setExpire}/>
                <UploadOption password={password} download={download} expire={expire} file={props.fileO} />

            </Grid>

    )
}
