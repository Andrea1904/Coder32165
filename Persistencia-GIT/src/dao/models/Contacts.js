import mongosee from 'mongoose';

const userColletion = 'Contacts';
const userSchema = new mongosee.Schema({
    first_name : String,
    last_name: String,
    email: {
        type: String,
        unique:true
    }
})

const contactModel = mongosee.model(userColletion,userSchema) ;

export default contactModel;


