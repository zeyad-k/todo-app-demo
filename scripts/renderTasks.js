import { taskListElement } from './elements';
import fetchData from './fetchData';

const taskList = fetchData('tasks') || [];

const renderTask = () => {
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
};
export default renderTask;
