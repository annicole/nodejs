//const express= require('express');
import express from "express";
import morgan from "morgan";
import taskroutes from "./routes/task.routes";
import cors from "cors"

const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my app" });
});

app.use("/api", taskroutes);

export default app;
