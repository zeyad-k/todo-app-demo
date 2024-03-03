import { taskListElement } from './elements';
import fetchData from './fetchData';

const renderTask = () => {
  const taskList = fetchData('tasks') || [];

  // Clear the innerHTML of taskListElement
  taskListElement.innerHTML = '';

  taskList.forEach((task) => {
    taskListElement.innerHTML += `<li class="TaskList__taskContent  ${task.isCompleted ? 'TaskList__taskContent--isActive' : ''}  ">
<div class="TaskList__checkbox" tabindex='0' role='button' >
<img class="TaskList__checkboxImg" scr="./assets/icon-checkmark.svg" />
</div> 
<div class="TaskList__valueContent">
<p class="TaskList__value">${task.value}</p>
<img class="TaskList__deleteIcon" src="./assets/icon-basket.svg" alt="basket-icon">
</div>
</li>`;
  });
};
export default renderTask;
