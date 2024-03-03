import { taskListElement } from './elements';

const renderEmptyState = () => {
  taskListElement.innerHTML = `<li class='EmptyList'>
<img class='EmptyList__img' src="./assets/icon-empty.svg" alt="list is empty" />
<p>قائمة المهام فارغة</p>  </li>`;
};

export default renderEmptyState;
