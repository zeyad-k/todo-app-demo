import deleteTask from './deleteTask';
import { getTaskListDeleteElement } from './elements';

const initTaskListeners = () => {
  getTaskListDeleteElement()?.forEach((icon, index) => {
    icon.addEventListener('click', (event) => deleteTask(event, index));
  });
}; export default initTaskListeners;
