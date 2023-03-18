import { Router } from "express";
import passport from "passport";
import User from "../models/user.js";
import { createHash } from "../utils.js";

const router = Router();

router.post('/register', async(req,res)=>{
    const {first_name, last_name, email, age, password}= req.body;
    if(!first_name || !last_name || !email || !age)
    return res.status(400).send({status: "error",error:" Datos Invalidados"})

    let user= {
        first_name,
        last_name,
        email,
        age,
        password: createHash(password)
    }

    user =User.create(user)
    console.log({user});
    res.send ({status:"success",payload:user})
})
export default router;