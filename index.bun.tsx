import { renderToString, renderToReadableStream } from "react-dom/server";
import { App } from "./common";

const options = {
  headers: {
    "Content-Type": "text/html",
  },
};

Bun.serve({
  port: 8090,
  async fetch(request) {
    const url = new URL(request.url);

    switch (url.pathname) {
      case "/":
      case "/string":
        return new Response(
          `<!DOCTYPE html>${renderToString(<App />)}`,
          options
        );

      case "/stream":
        return new Response(await renderToReadableStream(<App />), options);

      default:
        return new Response("Not found", { status: 404 });
    }
  },
});

console.log("Server started on http://localhost:8090/");
