// Import necessary modules if needed

class TaskModel {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  isDone: boolean;

  constructor(id: string, title: string, description: string, dueDate: Date, isDone: boolean) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isDone = isDone;
  }
}

export default TaskModel;
