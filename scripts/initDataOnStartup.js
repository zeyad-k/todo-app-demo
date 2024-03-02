import ToggleDarkTheme from './ToggleDarkTheme';
import fetchData from './fetchData';
import renderTask from './renderTasks';

const initDataOnStartup = () => {
  if (fetchData('darkThemeFlag')) ToggleDarkTheme();
  if (fetchData('tasks')) renderTask();
};
export default initDataOnStartup;
