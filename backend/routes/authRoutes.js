import express from 'express'
import { create_new,getdatas } from '../controllers/authControllers.js';


const route = express.Router();

route.post("/create",create_new)
route.get("/getdata",getdatas)

export default route;