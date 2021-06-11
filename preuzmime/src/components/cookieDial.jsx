import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import CookieIcon from './cookieIcon'

const useStyles = makeStyles((theme) => ({
  speedDial: {
    zIndex: 100,
    position: 'absolute',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },
}));

const actions = [
  { icon: <CookieIcon />, name: 'Enable Cookies' },
  { icon: <CookieIcon />, name: 'Disable Cookies' },
];

export default function CookieDial() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        icon={<CookieIcon/>}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
  );
}