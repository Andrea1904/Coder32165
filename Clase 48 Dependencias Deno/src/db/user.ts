// deno-lint-ignore-file
import type { User, Uuid} from "../types/user.ts";
//import { v4 } from "../../deps.ts"

export const findUserById= async (uuid:Uuid):Promise<User>=>
    new Promise((resolve,reject)=>{
        if(uuid !== "123456"){
            throw new Error("Usr No encontrado")
        }
        setTimeout(()=>{
            resolve({
                uuid,
                name: "Ajá",
                birthDate: new Date(),
            });
        },50)
    });

export const createUser =async ( name: string,birthDate:Date): Promise<User>=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                uuid:"1234",
                name: "Ajá",
                birthDate: new Date(),
            });
        },50)
    });