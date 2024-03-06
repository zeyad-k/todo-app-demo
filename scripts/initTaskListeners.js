import deleteATask from './deleteTask';
import {
  getTaskListCheckboxElements, getTaskListDeleteElements, getTasksElements,
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

  getTasksElements().forEach((task) => {
    task.addEventListener('dragstart', () => {
      //  Adding dragging class after a delay
      setTimeout(() => task.classList.add('dragging'), 0);
    });
    // Removing dragging on dragend event
    task.addEventListener('dragend', () => {
      task.classList.remove('dragging');
    });
  });
}; export default initTaskListeners;
