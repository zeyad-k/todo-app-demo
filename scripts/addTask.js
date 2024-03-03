import { taskInputElement } from './elements';
import fetchData from './fetchData';
import initTaskList from './initTaskList';
import saveToDatabase from './saveToDatabase';

const addTask = () => {
//   const taskList = [];
  const taskValue = taskInputElement.value;
  if (!taskValue || taskValue.trim() === '') return;
  const task = {
    value: taskValue,
    isCompleted: false,
  };
  const taskList = fetchData('tasks') || [];

  taskList.push(task);
  saveToDatabase('tasks', taskList);
  taskInputElement.value = '';
  initTaskList(taskList);
};

export default addTask;
