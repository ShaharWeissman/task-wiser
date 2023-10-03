import express, { NextFunction, Request, Response } from "express";
import taskService from "../services/task-service"; 

const router = express.Router();

router.get(
  "/tasks",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const tasks = await taskService.getAllTasks();
      return response.status(200).json(tasks);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
);
router.post(
  "/tasks",
  async (request: Request, response: Response, next: NextFunction) => {
    const newTask = request.body; 

    try {
      await taskService.createTask(newTask);
      return response.status(201).json({ message: "Task created successfully" });
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
);
router.get(
  "/tasks/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const taskId = request.params.id;

    try {
      const task = await taskService.getTaskById(taskId);
      if (task) {
        return response.status(200).json(task);
      } else {
        return response.status(404).json({ error: "Task not found" });
      }
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
);
router.put(
  "/tasks/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const taskId = request.params.id;
    const updatedTask = request.body; //

    try {
      await taskService.updateTask(taskId, updatedTask);
      return response.status(200).json({ message: "Task updated successfully" });
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
);
router.delete(
  "/tasks/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const taskId = request.params.id;

    try {
      await taskService.deleteTask(taskId);
      return response.status(204).json();
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

export default router;
