require('dotenv').config();

import cors from "cors";
import express from "express";
import taskRouter from "./router/task-router";
import config from "./utils/config";


  //create server
  const server = express();
  
  //handle cors
  server.use(cors());

  //how we send the data back (JSON,XML,RAW,String)
  server.use(express.json());
  
  //where i will save the video files
  server.use(express.static("user_videos"));
  server.use('/assets', express.static("Assets"));
  
  //parse the body as json , for easy work
  server.use(express.json());
  


  //health check
  server.get("/health", (req, res) => {
    res.status(200).json({ status: "healthy" });
  });
  
  //how to use the routes
  server.use("/api", taskRouter);


  server.listen(config.WebPort, async () => {
    console.log(`Listening on the http://localhost:${config.WebPort}`);
  });