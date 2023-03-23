import {Router} from 'express';
import Contacts from '../dao/mongo/contact.mongo.js';

const router =Router ();
const contactsService = new Contacts ();

router.get('/',async(req,res)=>{
    let result = await contactsService.get();
    res.send({status:"sucess", payload:result})
})

export default router;