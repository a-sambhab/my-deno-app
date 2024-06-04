import {
  Application,
  Router,
  RouterContext,
} from "https://deno.land/x/oak@v6.5.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { addBook, getBookByName } from "./controller.ts";

const app = new Application();
const router = new Router();
const port: number = 8080;

router.get("/", (ctx: RouterContext) => {
  ctx.response.body = "Hello from Deno";
})
.post("/addBook", addBook)
.get("/getBookByName", getBookByName)

app.use(
  oakCors({
    origin: "http://localhost:8000"
  })
)
app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port });
console.log(`Server is running on port ${port}`);
