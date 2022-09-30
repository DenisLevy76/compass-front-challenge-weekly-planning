const daysOfWeek = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

const styles = {
  sunday: { translate: 'Domingo', color: '#FFA246' },
  monday: { translate: 'Segunda-feira', color: '#35E185' },
  tuesday: { translate: 'Terça-feira', color: '#6688FF' },
  wednesday: { translate: 'Quarta-feira', color: '#B266FF' },
  thursday: { translate: 'Quinta-feira', color: '#66D1FF' },
  friday: { translate: 'Sexta-feira', color: '#FF66D4' },
  saturday: { translate: 'Sábado', color: '#FF6666' },
};

const navTabs = document.querySelector('.nav-tabs');
const tabContent = document.querySelector('.tab-content');

const createActivityList = (value, day, time) => {
  let activities = '';
  value.forEach((text) => {
    if (text !== '')
      activities += `<li class="activity__activity">
        <p>
          ${text}
        </p>
        <button type="button" class="activity__delete" onclick="deleteActivity('${day}', '${time}')">Apagar</button>
      </li>`;
  });
  return activities;
};

const createActivities = (day) => {
  const activities = document.createElement('ul');
  activities.classList.add('activities');

  try {
    for (const [key, value] of Object.entries(data.days[day])) {
      const activity = document.createElement('li');
      activity.className = 'activity';

      const activityList = createActivityList(value, day, key);

      activity.innerHTML = `
<span class="activity__time">${key}</span>
<ul class="activity__activities">${activityList}</ul>
`;
      if (activityList !== '') activities.appendChild(activity);
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
