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
  //     taskListElement.innerHTML += `<li class="TaskList__taskContent" >
  // <div class="TaskList__checkbox" tabindex='0' role='button' >
  // <img class="TaskList__checkboxImg" scr="./assets/icon-checkmark.svg" >
  // </div>
  // <div class="TaskList__valueContent">
  // <p class="TaskList__value">${task}</p>
  // <img class="TaskList__deleteIcon" src="./assets/icon-basket.svg" alt="basket-icon">
  // </div>
  // </li>`;
  //   });

  taskList.push(task);
  saveToDatabase('tasks', taskList);
  taskInputElement.value = '';
  initTaskList(taskList);
};

export default addTask;
