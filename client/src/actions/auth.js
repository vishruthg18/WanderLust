import * as api from '../api'
import {AUTH} from '../constants/actionTypes'

export const signin=(formData,history)=> async(dispatch)=>{
        try {
            // const {data}=await api.fetchPosts();
            history.push('/');
        } catch (error) {
         console.log(error)   
        }
}

export const signup=(formData,history)=> async(dispatch)=>{
    try {
        // const {data}=await api.fetchPosts();
        history.push('/');
    } catch (error) {
        console.log(error) 
    }
}