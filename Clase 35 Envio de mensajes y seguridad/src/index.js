
import {createTransport} from 'nodemailer';


const testMail='andrea.lopez1904@gmail.com';
const pass='cluurjhhohncyxng'
const transport = createTransport ({
    service: 'gmail',
    auth:
    {
        user: testMail,
        pass: pass
    }
})

const mailOptions={
    from:'Server Node.js',
    to: testMail,
    subject: 'Test mail from node.js',
    html:'<h1>Hola estoy probando Node para envio de correos</h1>',

    attachments:[ 
        {
            path:'image.png'
        }
    ]
}

try{
    const result =await transport.sendMail(mailOptions)
    console.log(result)

}catch(error){
    console.log(error)
}








