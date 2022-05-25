import React from "react";
import { AppBar,Avatar,Button,Toolbar,Typography } from "@material-ui/core";
import {Link} from 'react-router-dom'
import useStyles from './styles'
import wanderLustImg from '../../images/WanderLustImg.png'
const Navbar = () => {

    const classes=useStyles();
    const user=null;
  return (
    <AppBar className={classes.appBar} position="static">
        <div className={classes.brandContainer}>
        <Typography component={Link} to='/' className={classes.heading} variant="h4" align="center">
        Wanderlust
      </Typography>
      <img
        className={classes.image}
        src={wanderLustImg}
        alt="WanderLust"
        height="60"
      ></img>
        </div>
        <Toolbar className={classes.toolbar}>
          { user?(<div className={classes.profile}>
                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant='h6'>{useStyles.result.name}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary"></Button>
          </div>):(
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
          )}
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;
