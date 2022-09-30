const daysOfWeek = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const styles = {
  sunday: { translate: 'Domingo', color: '#FF6666' },
  monday: { translate: 'Segunda-feira', color: '#FFA246' },
  tuesday: { translate: 'Terça-feira', color: '#35E185' },
  wednesday: { translate: 'Quarta-feira', color: '#6688FF' },
  thursday: { translate: 'Quinta-feira', color: '#B266FF' },
  friday: { translate: 'Sexta-feira', color: '#66D1FF' },
  saturday: { translate: 'Sábado', color: '#FF66D4' },
};

const navTabs = document.querySelector('.nav-tabs');
const tabContent = document.querySelector('.tab-content');

const createActivityList = (value, day, time) => {
  let activities = [];
  value.forEach((text, index) => {
    if (text !== '')
      activities.push(`<li class="activity__activity" style="border-color: ${styles[day].color}">
        <p>
          ${text}
        </p>
        <button type="button" class="activity__delete" onclick="deleteActivity('${day}', '${time}', '${index}')">Apagar</button>
      </li>`);
  });
  return activities;
};

const createActivities = (day) => {
  const activities = document.createElement('ul');
  activities.classList.add('activities');

  try {
    for (const [key, value] of Object.entries(data.days[day])) {
      const activityList = createActivityList(value, day, key);
      const activity = document.createElement('li');
      activity.className = `activity ${
        activityList.length > 1 ? 'activity--conflict--conflict' : ''
      }`;

      activity.innerHTML = `
<span class="activity__time" style="background-color: ${
        styles[day].color
      }40">${key}</span>
<ul class="activity__activities">${activityList.join('')}</ul>
`;
      if (activityList.length > 0) activities.appendChild(activity);
    }
  } catch (error) {}

  return activities;
};

const createTabPane = (day, isActive) => {
  const tabPane = document.createElement('div');
  tabPane.className = `tab-pane fade show ${isActive ? 'active' : ''}`;
  tabPane.setAttribute('id', `${day}-tab-pane`);
  tabPane.setAttribute('role', `tabpanel`);
  tabPane.setAttribute('aria-labelledby', `${day}-tab`);
  tabPane.setAttribute('tabindex', '0');

  const activities = createActivities(day);
  tabPane.appendChild(activities);

  return tabPane;
};

const createTab = (day, isActive) => {
  const tab = document.createElement('li');
  tab.classList.add('nav-item');
  tab.innerHTML = `
  <button
    class="nav-link ${isActive ? 'active' : ''}"
    id="${day}-tab"
    style="background-color: ${styles[day].color}; color: white;"
    data-bs-toggle="tab"
    data-bs-target="#${day}-tab-pane"
    type="button"
    role="tab"
    aria-controls="${day}-tab-pane"
    aria-selected="true"
  >
    ${styles[day].translate}
  </button>
`;

  return tab;
};

const updateScreen = () => {
  navTabs.innerHTML = '';
  tabContent.innerHTML = '';

  daysOfWeek.forEach((day, index) => {
    // tabs
    const tab = createTab(day, index === 0);
    navTabs.appendChild(tab);

    // tabs content
    tabContent.appendChild(createTabPane(day, index === 0));
  });
};

updateScreen();
