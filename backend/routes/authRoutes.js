import express from 'express'
import { create_new } from '../controllers/authControllers.js';


const route = express.Router();

route.post("/create",create_new)


export default route;