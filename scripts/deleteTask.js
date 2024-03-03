import fetchData from './fetchData';
import initTaskList from './initTaskList';
import saveToDatabase from './saveToDatabase';

const deleteATask = (event, index) => {
  const answer = confirm('هل أنت متأكد من حذف هذه المهمة؟');
  if (!answer) return;

  const tasks = fetchData('tasks');
  tasks.splice(index, 1);
  saveToDatabase('tasks', tasks);
  initTaskList(tasks);
};

export default deleteATask;
