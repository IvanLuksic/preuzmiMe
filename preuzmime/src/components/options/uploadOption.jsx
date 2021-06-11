import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import LinkPopup from '../linkPopup'

const useStyles = makeStyles((theme) => ({
    checkbox:{
        fontFamily: "Roboto Slab",
    },
    link:{
        textDecoration: "underline",
        fontStyle: "italic",
        color: "black"
    },
    uploadButton: {
        borderRadius: "0.6em",
        color: "#FFFFFF",
        width: "100%",
        backgroundColor: theme.palette.success.main,
        '&:hover': {
            backgroundColor: theme.palette.success.dark,
         },
      },

}));


export default function UploadOption(props) {
    const classes = useStyles();
    const [openPopup, setOpenPopup] = useState(false);
    const [link, setLink] = useState("");

    console.log(props)

    const [state, setState] = useState({
        checked: false,
      });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    const postFile = () => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        }

    }


    return (
        <React.Fragment>
            <LinkPopup setOpenPopup={setOpenPopup} openPopup={openPopup} link="preuzmi.me/asdfsdfsdfgs" />
             <FormControlLabel control={<Checkbox checked={state.checked} onChange={handleChange} name="checked" color="primary"/> } 
             label={(<p className={classes.checkbox}>Prihvaćam <a className={classes.link} rel="noreferrer" href="http://www.google.com" target="_blank" >opće uvjete korištenja</a></p>)} />
             <Button color="primary" className={classes.uploadButton} onClick={() => {setOpenPopup(true)}} disabled={!state.checked} variant="contained">Prenesi datoteku</Button>
        </React.Fragment>
    )
}
