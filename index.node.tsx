import { renderToString, renderToPipeableStream } from "react-dom/server";
import express from "express";
import { App } from "./common";

const app = express();

app.get(["/", "/string"], (req, res) => {
  res.send(`<!DOCTYPE html>${renderToString(<App />)}`);
});

app.get("/stream", (req, res) => {
  renderToPipeableStream(<App />).pipe(res);
});

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080/");
});
