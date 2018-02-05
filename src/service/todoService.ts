import Todo, { TodoModel } from "../models/Todo";

export function getTodos(): Promise<any> {
  return new Promise((resolve, reject) => {
    Todo.find((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

type TodoObject = {
  title: String,
  status: String,
};

export function createTodo(todoObject: Object): Promise<any> {
  return new Promise((resolve, reject) => {
    const todo = new Todo(todoObject);
    todo.save((err, todoObject) => {
      if (err) {
        reject(err);
      } else {
        resolve(todoObject);
      }
    });
  });
}

export function updateTodo(id: String, todoObject: TodoObject): Promise<any> {
  return new Promise((resolve, reject) => {
    Todo.findById(id, (err: Error, todo: TodoModel) => {
      if (err) {
        reject(err);
      } else {
        todo.title = todoObject.title || todo.title;
        todo.status = todoObject.status || todo.status;
        todo.save((err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      }
    });
  });
}

export function deleteTodo(id: String): Promise<any> {
  return new Promise((resolve, reject) => {
    Todo.findByIdAndRemove(id, (err: Error, todo: TodoModel) => {
      if (err) {
        reject(err);
      } else {
        resolve(todo);
      }
    });
  });
}

