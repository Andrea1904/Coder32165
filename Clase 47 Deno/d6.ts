import {
    assertEquals,
    assertStrictEquals,
} from "https://deno.land/std@0.100.0/testing/asserts.ts";


Deno.test("example",function ():void {
    assertEquals("Hola","hola");
   // assertEquals( { dice:"Hola"},{{ dice:"Hola"})
   console.log("Primer Test")
})


Deno.test("isStrictlyEquals",function ():void {
    const a={};
    const b= a;
    assertStrictEquals(a,b)
    console.log("Tercer Test Pruebas ")
})



Deno.test("example1",function ():void {
    assertEquals("Hola","Hola");
   // assertEquals( { dice:"Hola"},{{ dice:"Hola"})
   console.log("Segundo Test Pruebas ")
})
