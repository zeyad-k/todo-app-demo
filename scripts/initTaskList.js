import fetchData from './fetchData';
import initTaskListeners from './initTaskListeners';
import renderTask from './renderTasks';

const initTaskList = (tasks) => {
  renderTask(fetchData(tasks));
  initTaskListeners();
};

export default initTaskList;
