import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { Console, error } from 'console';
import postRoutes from './routes/posts.js';

const app=express();

app.use('/posts',postRoutes)

app.use(bodyParser.json({limit:"30",extended:true}));
app.use(bodyParser.urlencoded({limit:"30",extended:true}));
app.use(cors());

const CONNECTION_URL='mongodb+srv://vishruth:Vishruth123@cluster0.wihdh.mongodb.net/?retryWrites=true&w=majority';
const PORT=process.env.PORT ||5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`)))
.catch(()=>console.log(error.message));

// mongoose.set('useFindAndModify',false);