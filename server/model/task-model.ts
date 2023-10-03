class TaskModel {
    id: number;
    description: string;
    due_time: Date;
    completed: boolean;
  
    constructor(
      id: number,
      description: string,
      due_time: Date,
      completed: boolean
    ) {
      this.id = id;
      this.description = description;
      this.due_time = due_time;
      this.completed = completed;
    }
  }
  
  export default TaskModel;
  