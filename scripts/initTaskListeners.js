import deleteATask from './deleteTask';
import {
  getTaskListCheckboxElements, getTaskListDeleteElements,
} from './elements';
import toggleATask from './toggleTask';

export const initTaskListeners = () => {
  getTaskListDeleteElements().forEach((icon, index) => {
    icon.addEventListener('click', (e) => deleteATask(e, index));
  });

  getTaskListCheckboxElements().forEach((box, index) => {
    box.addEventListener('click', (e) => toggleATask(e, index));
    box.addEventListener('keydown', (e) => e.key === 'Enter' && toggleATask(e, index));
  });
}; export default initTaskListeners;
