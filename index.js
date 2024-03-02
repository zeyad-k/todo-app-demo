import ToggleDarkTheme from './scripts/ToggleDarkTheme';
import { DarkThemeToggleElement } from './scripts/elements';
import initDataOnStartup from './scripts/initDataOnStartup';

initDataOnStartup();
DarkThemeToggleElement.addEventListener('click', ToggleDarkTheme);
