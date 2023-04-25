import { Router } from "../../deps.ts"
import { findUser, createUser }from "../handlers/users.ts"

export const router =new Router()
.get("/api/users/:userId",findUser)
.post("/api/users",createUser)
