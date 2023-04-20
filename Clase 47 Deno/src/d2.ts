import { parse } from "https://deno.land/std@0.100.0/datetime/mod.ts";

const myDate = parse("04 02 2023","dd mm yyyy");

console.log(myDate);
