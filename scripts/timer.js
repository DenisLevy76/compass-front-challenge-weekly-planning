const date = new Date();
const hour = document.querySelector('.header__time strong');

const padNumber = (number) => {
  return number.toString().padStart(2, '0');
};

const showHour = () => {
  hour.innerText = `${padNumber(date.getHours())}:${padNumber(
    date.getMinutes()
  )}`;
};

showHour();
