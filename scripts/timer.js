const date = new Date();
const hour = document.querySelector('.header__time strong');
const today = document.querySelector('.header__time p');

const padNumber = (number) => {
  return number.toString().padStart(2, '0');
};

const showHour = () => {
  hour.innerText = `${padNumber(date.getHours())}:${padNumber(
    date.getMinutes()
  )}`;
};

const showDate = () => {
  moment.locale('pt-BR');
  today.innerText = moment().format('D [de] MMMM [de] YYYY');
};

showHour();
showDate();

const timer = setInterval(() => {
  showDate();
  showHour();
}, 60 * 1000); // 60 secs
