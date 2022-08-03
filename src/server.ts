import { Application } from "./deps.ts";
import { logger } from "./middlewares/logger.middleware.ts";
import "./db.ts";
import { router } from './routes/product.route.ts';

const app = new Application();

app.use(logger);
app.use(router.routes());

console.log("Server running on http://localhost:3000");
await app.listen({ port: 3000 });
