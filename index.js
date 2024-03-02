const DarkThemeToggleElement = document.querySelector('.DarkThemeToggle');
const AppElement = document.querySelector('.App');

const ToggleDarkTheme = () => {
  console.log('hi hooooda , you will turn the theme');
  AppElement.classList.toggle('App--isDark');
};

DarkThemeToggleElement.addEventListener('click', (event) => {
  event.preventDefault();
  ToggleDarkTheme();
});
