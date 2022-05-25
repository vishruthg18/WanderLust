import React from 'react';
import {Container} from '@material-ui/core';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './componenets/Navbar/Navbar';
import Home from './componenets/Home/Home';
import Auth from './componenets/Auth/Auth';
const App= ()=>(
  
    <BrowserRouter>
         <Container maxwidth='lg'>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/auth" exact component={Auth}/>
            </Switch>   
        </Container>
        </BrowserRouter>
    
)

export default App;