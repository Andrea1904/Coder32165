const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
const json =await response.json();
console.log("Hola Estoy probando el denon !!!")
console.log(json);
