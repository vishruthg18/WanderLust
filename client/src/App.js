import React from 'react';
import {Container} from '@material-ui/core';
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';
import Navbar from './componenets/Navbar/Navbar';
import Auth from './componenets/Auth/Auth';
import PostDetails from './componenets/PostDetails/PostDetails';
import Home from './componenets/Home/Home';
const App= ()=>{
  const user=JSON.parse(localStorage.getItem('profile'))
  console.log(user)

    return(
    <BrowserRouter>
         <Container className="container1" maxWidth="xl">
            <Navbar/>
            <Switch>
                <Route path="/" exact component={()=><Redirect to='/posts'/>}/>
                <Route path="/posts" exact component={Home}/>
                <Route path="/posts/search" exact component={Home}/>
                <Route path="/posts/:id" exact component={PostDetails}/>
                <Route path="/auth" exact component={()=>(!user?<Auth/>:<Redirect to='/posts'/>)}/>
            </Switch>   
        </Container>
        </BrowserRouter>
    
    )
    
    }

export default App;