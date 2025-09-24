import express from 'express'
import { create } from '../controllers/authControllers.js';


const route = express.Router();

route.post("/create",create)


export default route;