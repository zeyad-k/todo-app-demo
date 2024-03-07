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

  //
  getTasksElements().forEach((task) => {
    task.addEventListener('click', function () {
      const taskValue = this.querySelector('.TaskList__value');
      const currentValue = taskValue.textContent;

      // Create an input field and set its initial value to the current task value
      const input = document.createElement('input');
      input.type = 'text';
      input.value = currentValue;

      // When the input field loses focus, change it back to a regular task
      input.addEventListener('blur', function () {
        taskValue.textContent = this.value;
        this.replaceWith(taskValue);
      });

      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault(); // Prevent form submission
          taskValue.textContent = this.value;
          this.replaceWith(taskValue);
        }
      });

      // Replace the current task value with the input field
      taskValue.replaceWith(input);

      // Automatically focus on the input field
      input.focus();
    });
  });
}; export default initTaskListeners;

//  edit on click functionality
const tasks = document.querySelectorAll('.TaskList__taskContent');

tasks.forEach((task) => {
  task.addEventListener('click', function () {
    const taskValue = this.querySelector('.TaskList__value');
    const currentValue = taskValue.textContent;

    // Create an input field and set its initial value to the current task value
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentValue;

    // When the input field loses focus, change it back to a regular task
    input.addEventListener('blur', function () {
      taskValue.textContent = this.value;
      this.replaceWith(taskValue);
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault(); // Prevent form submission
        taskValue.textContent = this.value;
        this.replaceWith(taskValue);
      }
    });

    // Replace the current task value with the input field
    taskValue.replaceWith(input);

    // Automatically focus on the input field
    input.focus();
  });
});
