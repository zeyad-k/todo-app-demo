import { getTasksElements } from './elements';

getTasksElements().forEach((task) => {
  task.addEventListener('dragstart', () => {
    task.classList.add('dragging');
  });
});
