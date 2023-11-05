import Bao from "baojs";
import { Router as BookRouter } from "./books/books.router";

const app = new Bao();

app.get("/", (ctx) => {
  return ctx.sendText("Welcome to the Library Management API!");
});

BookRouter(app);

const server = app.listen({
  port: 3000,
  hostname: "0.0.0.0",
});

console.log(`Library API is running on ${server.hostname}:${server.port}`);