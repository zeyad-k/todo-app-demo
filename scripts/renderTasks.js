import { taskListElement } from './elements';
import fetchData from './fetchData';

const renderTask = () => {
  const taskList = fetchData('tasks') || [];

  // Clear the innerHTML of taskListElement
  taskListElement.innerHTML = '';

  taskList.forEach((task) => {
    taskListElement.innerHTML += `<li draggable="true" class="TaskList__taskContent ${task.isCompleted ? ' TaskList__taskContent--isActive' : ''}">
    <div class='TaskList__checkbox' tabindex="0" role="button">
      <img class='TaskList__checkboxImg' src="./assets/icon-checkmark.svg" alt="checkmark" />
    </div>
    <div class='TaskList__valueContent'>
      <p class='TaskList__value'>
        ${task.value}
      </p>
      <img src="./assets/icon-basket.svg"
           class='TaskList__deleteIcon'
           alt="basket-icon"
      />
    </div>
  </li>`;
  });
};
export default renderTask;
