import fetchData from './fetchData';
import saveToDatabase from './saveToDatabase';

const toggleATask = (event, index) => {
  const tasks = fetchData('tasks');

  event.currentTarget.parentElement.classList.toggle('TaskList__taskContent--isActive');
  tasks[index].isCompleted = !tasks[index].isCompleted;
  saveToDatabase('tasks', tasks);
};

export default toggleATask;
