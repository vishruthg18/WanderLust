import express from 'express';
import mongoose from 'mongoose';
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

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}