import { data } from './home';

const daysOfWeek = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

const translate = {
  sunday: 'Domingo',
  monday: 'Segunda-feira',
  tuesday: 'Terça-feira',
  wednesday: 'Quarta-feira',
  thursday: 'Quinta-feira',
  friday: 'Sexta-feira',
  saturday: 'Sábado',
};

const navTabs = document.querySelector('.nav-tabs');

daysOfWeek.forEach((day, index) => {
  const li = document.createElement('li');
  li.innerHTML = `<li class="nav-item" role="presentation">
  <button
    class="nav-link ${index === 0 ? 'active' : ''}"
    id="${day}-tab"
    data-bs-toggle="tab"
    data-bs-target="#${day}-tab-pane"
    type="button"
    role="tab"
    aria-controls="${day}-tab-pane"
    aria-selected="true"
  >
    ${translate[day]}
  </button>
</li>
<li class="nav-item" role="presentation">`;
  navTabs.appendChild(li);
});
