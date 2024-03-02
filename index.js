import ToggleDarkTheme from './scripts/ToggleDarkTheme';
import addTask from './scripts/addTask';
import { DarkThemeToggleElement, addTaskElement } from './scripts/elements';
import initDataOnStartup from './scripts/initDataOnStartup';

initDataOnStartup();
DarkThemeToggleElement.addEventListener('click', ToggleDarkTheme);

addTaskElement.addEventListener('click', (event) => {
  event.preventDefault();
  addTask();
});
