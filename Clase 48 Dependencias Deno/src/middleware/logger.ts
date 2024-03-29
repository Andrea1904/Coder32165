import type {Context} from "../../deps.ts"

export const logger =async(ctx: Context,next:()=>void)=>{
    await next();
    const body =await ctx.request.body().value;
    const params =body ? `parametros ${JSON.stringify(body)}`: "";
    console.log(`${ctx.request.method} peticion ${ctx.request.url} ${params}`)
};