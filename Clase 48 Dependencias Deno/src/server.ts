import { Application } from "../deps.ts";
import { router} from "./routes/index.ts"
import { logger} from "./middleware/logger.ts"

const app =new Application();
app.use(router.routes());
app.use(router.allowedMethods())

console.log( "Servidor arriba de Oak")

await app.listen({port:8080})