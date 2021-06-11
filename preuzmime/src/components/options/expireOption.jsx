import {React,useState} from 'react';
import OptionWrapper from './optionWrapper'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    

}));


export default function ExpireOption(props) {
const classes = useStyles();
const [expiration,setExpiration] = useState(24)

const handleChange = (e) => {
    props.setExpireO(e.target.value);
    setExpiration(e.target.value)

}

    return (
        <OptionWrapper>
            
            <Grid container direction="row" justify="space-between" alignItems="center">
            
                <p className={classes.optionText}>Vrijeme trajanja(0-24h):</p>
                <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">h</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={expiration}
          onChange={ (e) => handleChange(e)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1h</MenuItem>
          <MenuItem value={2}>2h</MenuItem>
          <MenuItem value={3}>3h</MenuItem>
          <MenuItem value={4}>4h</MenuItem>
          <MenuItem value={5}>5h</MenuItem>
          <MenuItem value={6}>6h</MenuItem>
          <MenuItem value={7}>7h</MenuItem>
          <MenuItem value={8}>8h</MenuItem>
          <MenuItem value={9}>9h</MenuItem>
          <MenuItem value={10}>10h</MenuItem>
          <MenuItem value={11}>11h</MenuItem>
          <MenuItem value={12}>12h</MenuItem>
          <MenuItem value={13}>13h</MenuItem>
          <MenuItem value={14}>14h</MenuItem>
          <MenuItem value={15}>15h</MenuItem>
          <MenuItem value={16}>16h</MenuItem>
          <MenuItem value={17}>17h</MenuItem>
          <MenuItem value={18}>18h</MenuItem>
          <MenuItem value={19}>19h</MenuItem>
          <MenuItem value={20}>20h</MenuItem>
          <MenuItem value={21}>21h</MenuItem>
          <MenuItem value={22}>22h</MenuItem>
          <MenuItem value={23}>23h</MenuItem>
          <MenuItem value={24}>24h</MenuItem>


        </Select>
      </FormControl>

            </Grid>

        </OptionWrapper>
    )
}
