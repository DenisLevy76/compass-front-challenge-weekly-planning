const activity = document.querySelector('.form__activity');
const day = document.querySelector('.form__select');
const time = document.querySelector('.form__time');

const data = JSON.parse(localStorage.getItem('data')) || { days: {} };

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

  saveLocalStorage(JSON.stringify(data));
  updateScreen();
};

const deleteActivity = (day, hour, index) => {
  console.log(data);
  data.days[day][hour][index] = '';
  updateScreen();
};

const saveLocalStorage = () =>
  localStorage.setItem('data', JSON.stringify(data));
