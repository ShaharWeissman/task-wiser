// In services/task-service.ts
import TaskModel from "../model/task-model";
import jsonDB from "../utils/json-db"; 

// Function to get all tasks from the JSON database
const getAllTasks = async (): Promise<TaskModel[]> => {
  const tasks = await jsonDB.getAllTasks();
  return tasks;
};

// Function to create a new task
const createTask = async (task: TaskModel): Promise<void> => {
  const tasks = await jsonDB.getAllTasks();
  tasks.push(task);
  await jsonDB.saveTasks(tasks);
};

// Function to get a task by ID
const getTaskById = async (id: string): Promise<TaskModel | undefined> => {
  const tasks = await jsonDB.getAllTasks();
  return tasks.find(task => task.id === id);
};

// Function to update a task
const updateTask = async (id: string, updatedTask: TaskModel): Promise<void> => {
  const tasks = await jsonDB.getAllTasks();
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks[index] = updatedTask;
    await jsonDB.saveTasks(tasks);
  }
};

// Function to delete a task by ID
const deleteTask = async (id: string): Promise<void> => {
  const tasks = await jsonDB.getAllTasks();
  const updatedTasks = tasks.filter(task => task.id !== id);
  await jsonDB.saveTasks(updatedTasks);
};

export default {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
