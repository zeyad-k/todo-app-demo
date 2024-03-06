const dropTaskDown = (tasks, index) => {
  if (tasks[index].isCompleted) {
    const completedTask = tasks.splice(index, 1)[0];
    tasks.push(completedTask);
  }
};
export default dropTaskDown;
