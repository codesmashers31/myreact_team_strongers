// import the library we need
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js'


// To config the DotEnv
dotenv.config();
// Active the Express
const app = express();

// using Middleware called use()
app.use(express.json());
// To Allow Muiltye Server host or port
app.use(cors());


//console.log(process);

const PORT = process.env.PORT || 5000;


app.use("/api/users",userRoutes)


app.listen(PORT,()=>{
    console.log(`Server Running Succfully http://localhost:${PORT}`);
    
})