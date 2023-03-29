// cliente externo 

const axios = require("axios");

axios.get('/user?ID=12345')
.then (function(response){
    console.log(response)
})
.cath (function(error){
    console.log(error)
})
.then (function(){
})

async function getUser(){
    try{
        const result =await axios.get('/user?ID=12345')
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}

axios.post ('/user',
{
    firstName:'Andrea',
    lastName: 'Lopez'
})
.then (function(response){
    console.log(response)
})
.cath (function(error){
    console.log(error)
})
.then (function(){
})

function getUserOne(){
    return  axios.get('/user?ID=12345')
}

function getUserTwo(){
    return  axios.get('/user?ID=6789')
}

Promise.all([getUserOne(),getUserTwo()])
.then (function(response){
    const  result1 = response[0];
    const  result2 = response[1];
});