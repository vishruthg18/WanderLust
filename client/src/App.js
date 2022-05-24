import React,{useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import wanderLustImg from './images/WanderLustImg.png'
import Posts from './componenets/Posts/Posts'
import Form from './componenets/Form/Form'
import {getPosts} from './actions/posts'
import useStyles from './styles'
const App= ()=>{
    const classes=useStyles();
    const dispatch=useDispatch();


    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch])
    return(
        <Container maxwidth='lg'>
            <AppBar  className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>WanderLust</Typography>
                <img className={classes.image} src={wanderLustImg} alt='WanderLust' height="60"></img>
            </AppBar>
            <Grow in>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
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