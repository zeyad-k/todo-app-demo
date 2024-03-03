import ToggleDarkTheme from './ToggleDarkTheme';
import fetchData from './fetchData';
import initTaskList from './initTaskList';
// import initTaskListeners from './initTaskListeners';

const initDataOnStartup = () => {
  if (fetchData('darkThemeFlag')) ToggleDarkTheme();
  initTaskList(fetchData('tasks'));
};
export default initDataOnStartup;
