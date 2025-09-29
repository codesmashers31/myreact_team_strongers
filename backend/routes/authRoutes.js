import express from 'express'
import { create_new,getdatas,editdatas,deleteusers } from '../controllers/authControllers.js';


const route = express.Router();

route.post("/create",create_new)
route.get("/getdata",getdatas)
route.put("/edit/:id",editdatas)
route.delete("/delete/:id",deleteusers)


export default route;