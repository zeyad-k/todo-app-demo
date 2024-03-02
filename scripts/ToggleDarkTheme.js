import { AppElement } from './elements';
import saveToDatabase from './saveToDatabase';

const ToggleDarkTheme = () => {
  AppElement.classList.toggle('App--isDark');
  saveToDatabase(
    'darkThemeFlag',
    AppElement?.classList.contains('App--isDark'),
  );
};
export default ToggleDarkTheme;
