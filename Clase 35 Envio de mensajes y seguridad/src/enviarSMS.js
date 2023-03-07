import twilio from 'twilio';

const count='AC585f38b7526b8f32515d6eaa43da9705';
const authToken='c0e0658caaa8924a217ac38239e68e52';

const client = twilio(count,authToken)

try{
    const message =await client.messages.create({
        body:'Hello test message',
        from:'+12708196656',
        to:'+573165202508'
    })
    console.log(message);
}catch(error)
{
    console.log(error)
}