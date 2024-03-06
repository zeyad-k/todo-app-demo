import dropTaskDown from './dropTaskDown';
import fetchData from './fetchData';
import initTaskList from './initTaskList';
import saveToDatabase from './saveToDatabase';

// const dropTaskDown = (tasks, index) => {
//   if (tasks[index].isCompleted) {
//     const completedTask = tasks.splice(index, 1)[0];
//     tasks.push(completedTask);
//   }
// };

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
