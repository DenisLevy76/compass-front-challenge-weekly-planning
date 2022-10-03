const activity = document.querySelector('.form__activity');
const day = document.querySelector('.form__select');
const time = document.querySelector('.form__time');

let data = JSON.parse(localStorage.getItem('data')) || { days: {} };

const createTimeSelectOption = (value, label = '') => {
  const option = document.createElement('option');
  option.setAttribute('value', value);
  option.innerText = label || value;
  return option;
};

const createActivity = (event) => {
  event.preventDefault();

  try {
    data.days[day.value][time.value].push(
      activity.value.replace(/<[^>]*>?/gm, '')
    );
  } catch (error) {
    data.days[day.value] = {
      ...data.days[day.value],
      [time.value]: [activity.value.replace(/<[^>]*>?/gm, '')],
    };
  }

  updateScreen();
};

const deleteActivity = (day, hour, index) => {
  data.days[day][hour][index] = '';
  updateScreen();
};

const deleteCurrentDay = () => {
  data.days[currentTab] = null;
  updateScreen();
};

const saveLocalStorage = () => {
  localStorage.setItem('data', JSON.stringify(data));
  updateScreen();
};

const resetLocalStorage = () => {
  localStorage.clear();
  data = { days: {} };
  updateScreen();
};

var timeSkip = 1;
var mins = ['00', '30'];

for (let i = 0; i < 24; i += timeSkip) {
  mins
    .sort()
    .forEach((min) =>
      time.appendChild(
        createTimeSelectOption(
          `${i.toString().padStart(2, '0')}h${min.toString().padStart(2, '0')}m`
        )
      )
    );
}
