import deleteTask from './deleteTask';
import { getTaskListDeleteElement } from './elements';

export const initTaskListeners = () => {
  getTaskListDeleteElement().forEach((icon, index) => {
    icon.addEventListener('click', (e) => deleteTask(e, index));
  });
}; export default initTaskListeners;
