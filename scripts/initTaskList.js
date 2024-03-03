import initTaskListeners from './initTaskListeners';
import renderEmptyState from './renderEmptyState';
import renderTask from './renderTasks';

export const initTaskList = (tasks) => {
  if (tasks?.length) {
    renderTask(tasks);
    initTaskListeners();
  } else {
    renderEmptyState();
  }
};

export default initTaskList;
