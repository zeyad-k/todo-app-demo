import dropTaskDown from './dropTaskDown';
import fetchData from './fetchData';
import initTaskList from './initTaskList';
import saveToDatabase from './saveToDatabase';

const toggleATask = (event, index) => {
  const tasks = fetchData('tasks');

  event.currentTarget.parentElement.classList.toggle('TaskList__taskContent--isActive');
  tasks[index].isCompleted = !tasks[index].isCompleted;

  // drop the task at the end of the list when toggle
  dropTaskDown(tasks, index);
  saveToDatabase('tasks', tasks);

  initTaskList(tasks);
};

export default toggleATask;
