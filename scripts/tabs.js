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

daysOfWeek.forEach((day, index) => {
  const li = document.createElement('li');
  li.classList.add('nav-item');
  li.innerHTML = `
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
  navTabs.appendChild(li);
});
