import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import wanderLustImg from './images/WanderLustImg.png'
import Posts from './componenets/Posts/Posts'
import Form from './componenets/Form/Form'
import useStyles from './styles'
const App= ()=>{
    const classes=useStyles();
    return(
        <Container maxwidth='lg'>
            <AppBar  className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>WanderLust</Typography>
                <img className={classes.image} src={wanderLustImg} alt='WanderLust' height="60"></img>
            </AppBar>
            <Grow in>
                <Grid container justify="space-between" alighnItems="stretch" spacing={3}>
                  <Grid item xs={12} sm={7}>
                    <Posts/>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                      <Form/>
                  </Grid>
                </Grid>
            </Grow>
        </Container>
    )
}

export default App;