const activity = document.querySelector('.form__activity');
const day = document.querySelector('.form__select');
const time = document.querySelector('.form__time');

const activityList = document.querySelector('.activities');

const data = JSON.parse(localStorage.getItem('data')) || { days: {} };

const createActivity = (event) => {
  event.preventDefault();

  try {
    data.days[day.value][time.value].push(activity.value);
  } catch (error) {
    data.days[day.value] = {
      ...data.days[day.value],
      [time.value]: [activity.value],
    };
  }
};

const saveLocalStorage = () =>
  localStorage.setItem('data', JSON.stringify(data));