import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRouters from './route/userRoutes.js'

// DOTENV for env access
dotenv.config();

// Make the Express App
const app = express();

// Json Parse using text to object using USE Middleware function
app.use(express.json());
// Allow to all the muiltipule ports like localhost:5173 ect...
app.use(cors());


const PORT = process.env.PORT || 5000;

// Making Route
app.use("/api/users",userRouters)

// Start the server
app.listen(PORT,()=>{
    console.log(`Server is connected Succfully ${PORT}`);
})