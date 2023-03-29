// llamados cliente interno


const https =  requere ('https')
const data=JSON.stringify({
    todo:' Comprar productos'
})
// Metodo GET
/*const options = {
    hostname: "cualquier.com",
    port: 443,
    path:'/todos',
    method: 'GET'
}*/
// metododo POST
/*const options = {
    hostname: "cualquier.com",
    port: 443,
    path:'/todos',
    method: 'POST',
    headers :{
        'Content-type': 'application/json',
        'Content-Length' :data.length
    }
}*/

//mMetodo put 
/*
const options = {
    hostname: "cualquier.com",
    port: 443,
    path:'/todos',
    method: 'PUT',
    headers :{
        'Content-type': 'application/json',
        'Content-Length' :data.length
    }
}
*/

const options = {
    hostname: "cualquier.com",
    port: 443,
    path:'/todos',
    method: 'DELETE',
    headers :{
        'Content-type': 'application/json',
        'Content-Length' :data.length
    }
}


// continua igual en caso de PUT,POST, DELETE

const req = https.request(options,res =>{
    console.log(`Estatus_codigo: ${res.Estatus_codigo}`)

    res.on('data',d =>{
        process.stdout.write(d)
    })
})

req.on('error',error=>{
    console.error(error)
});
req.write(data)
req.end()