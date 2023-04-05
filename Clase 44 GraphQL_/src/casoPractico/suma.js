const suma=(...nums)=>{

    /*if(!num1||!num2)return 0
    if( typeof num1!=='number' || typeof num2 !=="number") return null
*/
    if (nums.length===0) return 0
    if ( !nums.every(nums=>typeof nums==="number")) return null

    return nums.reduce((prev,current)=>prev+current)
}

// null
// 0
// total de la suma
// cantidad

//Escenarios
let  testTDD=0

console.log("----------------Test 1----------------")
let resultado=suma()
if(resultado===null){
    console.log("Test 1 Paso")
    testTDD ++;
}else console.log( "Test 1 no paso, porque se recibio un valor y se esperaba un null")

console.log("----------------Test 2----------------")
let resultadoTest2=suma()
if(resultadoTest2===0){
    console.log("Test 2 Paso")
    testTDD ++;
}else console.log( "Test 2 no paso esperabamos un 0 en el resultado ")

console.log("----------------Test 3----------------")
let resultadoTest3=suma(2,3)
if(resultadoTest2===10){
    console.log("Test 3 Paso")
    testTDD ++;
}else console.log( "Test 3 no paso esperabamos un 10")


console.log("----------------Test 4----------------")
let resultadoTest4=suma(1,2,3,4,5)
if(resultadoTest4===15){
    console.log("Test 4 Paso")
    testTDD ++;
}else console.log( "Test 4 no dio el resultado de la suma ")