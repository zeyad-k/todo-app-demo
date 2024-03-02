import { taskInputElement, taskListElement } from './elements';
import fetchData from './fetchData';
import saveToDatabase from './saveToDatabase';

const addTask = () => {
//   const taskList = [];
  const taskValue = taskInputElement.value;
  if (!taskValue || taskValue.trim() === '') return;
  const taskList = fetchData('tasks') || [];
  taskList.forEach((task) => {
    taskListElement.innerHTML += `<li class="TaskList__taskContent" >
<div class="TaskList__checkbox" tabindex='0' role='button' >
<img class="TaskList__checkboxImg" scr="./assets/icon-checkmark.svg" >
</div> 
<div class="TaskList__valueContent">
<p class="TaskList__value">${task}</p>
<img class="TaskList__deleteIcon" src="./assets/icon-basket.svg" alt="basket-icon">
</div>
</li>`;
  });

  taskList.push(taskValue);
  console.log(taskList);
  saveToDatabase('tasks', taskList);
};

export default addTask;
