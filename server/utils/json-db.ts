import fs from 'fs';
import TaskModel from '../model/task-model';

const DATABASE_FILE = 'database.json';

interface Database {
  tasks: TaskModel[];
}

const readDatabase = (): Database => {
  try {
    const data = fs.readFileSync(DATABASE_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // Handle the error, e.g., log it
    console.error('Error reading the database:', error);
    return { tasks: [] };
  }
};

const writeDatabase = (data: Database): void => {
  try {
    fs.writeFileSync(DATABASE_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    // Handle the error, e.g., log it
    console.error('Error writing the database:', error);
  }
};

const getAllTasks = (): TaskModel[] => {
  const database = readDatabase();
  return database.tasks;
};

const saveTasks = (tasks: TaskModel[]): void => {
  const database = readDatabase();
  database.tasks = tasks;
  writeDatabase(database);
};

export default {
  getAllTasks,
  saveTasks,
};
