import ToggleDarkTheme from './ToggleDarkTheme';
import fetchData from './fetchData';

const initDataOnStartup = () => {
	if (fetchData('darkThemeFlag')) ToggleDarkTheme();
};
export default initDataOnStartup;
