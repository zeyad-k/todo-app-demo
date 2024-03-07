import ToggleDarkTheme from './scripts/ToggleDarkTheme.js';
import addTask from './scripts/addTask.js';
import {
  DarkThemeToggleElement, TaskListLink, addTaskElement, taskListElement,
} from './scripts/elements.js';
import initDataOnStartup from './scripts/initDataOnStartup.js';

initDataOnStartup();
DarkThemeToggleElement.addEventListener('click', ToggleDarkTheme);

addTaskElement.addEventListener('click', (event) => {
  event.preventDefault();
  addTask();
});

TaskListLink?.addEventListener('click', () => {
  taskListElement?.classList.toggle('TaskList__list--hideCompleted');
  TaskListLink?.classList.toggle('TaskList__link--isActive');
});

// Drag and Drop
const initSortableList = (e) => {
  e.preventDefault();
  const draggingItem = taskListElement.querySelector('.dragging');
  const siblings = [...taskListElement.querySelectorAll('.TaskList__taskContent:not(.dragging)')];

  const nextSibling = siblings.find((sibling) => e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2);
  // console.log(nextSibling);
  taskListElement.insertBefore(draggingItem, nextSibling);
};

taskListElement.addEventListener('dragover', initSortableList);
taskListElement.addEventListener('dragenter', (e) => e.preventDefault());
