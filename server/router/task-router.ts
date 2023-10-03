import express, { NextFunction, Request, Response } from "express";
import dal_mysql from "../utils/dal_mysql";
import getAllTasks from "../services/task-service"
const router = express.Router();

router.get(
  "/servers",
  async (request: Request, response: Response, next: NextFunction) => {
    const servers = await getAllTasks();
    return response.status(200).json(servers);
  }
);

export default router;
