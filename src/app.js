//const express= require('express');
import express from "express";
import taskroutes from "./routes/task.routes";

const app = express();

//settings
app.set("port", process.env.PORT || 3000);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my app" });
});

app.use("/api", taskroutes);

export default app;
