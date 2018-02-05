import { Request, Response } from "express";
import * as todoService from "../service/todoService";

export let getTodos = (req: Request, res: Response) => {
  todoService
    .getTodos()
    .then(data => {
      res.json({
        data,
        status: "OK",
      });
    });
};

export let createTodo = async (req: Request, res: Response) => {
  console.log(req.body);
  const todo = req.body;
  try {
    const data = await todoService.createTodo(todo);
    res.json({
      data,
      status: "OK",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "FAIL",
    });
  }

};

export let updateTodo = async (req: Request, res: Response) => {
  const todo = req.body;
  const id = req.params.id;
  try {
    const data = await todoService.updateTodo(id, todo);
    res.json({
      data,
      status: "OK",
    });
  } catch (error) {
    res.json({
      status: "FAIL",
    });
  }
};

export let deleteTodo = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const data = await todoService.deleteTodo(id);
    res.json({
      data,
      status: "OK"
    });
  } catch (error) {
    res.json({
      status: "FAIL"
    });
  }
};