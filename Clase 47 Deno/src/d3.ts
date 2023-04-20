//console.log(Deno)

//console.log(Deno.args)

//const port = Number(Deno.env.get("PORT"))||8080;

//console.log(port)
//await Deno.writeTextFile("ArchivoDePrueba.txt","Hola, estamos escribiendo datos en el arhcivo")


const text = await Deno.readTextFile("ArchivoDePrueba.txt")
console.log(text)