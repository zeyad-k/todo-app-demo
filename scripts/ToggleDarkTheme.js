import { AppElement } from './elements';

const ToggleDarkTheme = () => {
	AppElement.classList.toggle('App--isDark');
};
export default ToggleDarkTheme;
