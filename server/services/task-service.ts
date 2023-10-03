import TaskModel from "../model/task-model";
import dal_mysql from "../utils/dal_mysql";

const getAllTasks = async (): Promise<TaskModel[]> => {
  const sqlCommand = `SELECT * FROM tasks`;
  const tasksData = await dal_mysql.execute(sqlCommand);
  return tasksData;
};

export default {
    getAllTasks,
  };
  