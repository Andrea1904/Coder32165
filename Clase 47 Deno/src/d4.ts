const encoder =new TextEncoder();
const data =encoder.encode("Hola")
await Deno.writeFile('text1.txt',data)