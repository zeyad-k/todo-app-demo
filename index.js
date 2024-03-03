import ToggleDarkTheme from './scripts/ToggleDarkTheme';
import addTask from './scripts/addTask';
import {
  DarkThemeToggleElement, TaskListLink, addTaskElement, taskListElement,
} from './scripts/elements';
import initDataOnStartup from './scripts/initDataOnStartup';

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
