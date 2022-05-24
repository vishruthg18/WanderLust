import express from 'express';
import PostMessage from "../models/postMessage.js";

const router = express.Router();

 export const getPosts=async (req,res)=>{
   try {
       const postMessage= await PostMessage.find();
       
         res.status(200).json(postMessage);

     
   } catch (error) {
       res.status(404).json({message: error});
   }
}

export const createPost= async (req,res)=>{
    const body= req.body;

    const newPost = new PostMessage(body)

 try {
     await newPost.save()
     res.status(201).json(newPost);
 } catch (error) {
     res.status(409).json({message:error})
 }
}