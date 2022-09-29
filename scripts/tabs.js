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

daysOfWeek.forEach((day, index) => {
  // tabs
  const tab = document.createElement('li');
  tab.classList.add('nav-item');
  tab.innerHTML = `
  <button
    class="nav-link ${index === 0 ? 'active' : ''}"
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
  navTabs.appendChild(tab);

  // tabs content

  const activities = document.createElement('ul');
  activities.classList.add('activities');

  try {
    for (const [key, value] of Object.entries(data.days[day])) {
      const activity = document.createElement('li');
      activity.className = 'activity';

      activity.innerHTML = `
<span class="activity__time">${key}</span>
<ul class="activity__activities">
  <li class="activity__activity">
    <p>
      ${value}
    </p>
    <button type="button" class="activity__delete">Apagar</button>
  </li>
</ul>
`;
      activities.appendChild(activity);
      console.log(key, value);
    }
  } catch (error) {}

  const tabPane = document.createElement('div');
  tabPane.className = 'tab-pane fade show';
  tabPane.setAttribute('id', `${day}-tab-pane`);
  tabPane.setAttribute('role', `tabpanel`);
  tabPane.setAttribute('aria-labelledby', `${day}-tab`);
  tabPane.setAttribute('tabindex', '0');
  tabPane.appendChild(activities);

  tabContent.appendChild(tabPane);
});
