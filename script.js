// Interactive inspiration messages

const themeSelect = document.querySelector('#theme-select');
const themeStorageKey = 'rinconCreativoTheme';
const availableThemes = ['original', 'jardin', 'oceano', 'atardecer', 'lavanda', 'noche'];
let selectedTheme = 'original';

try {
  const savedTheme = localStorage.getItem(themeStorageKey);
  if (availableThemes.includes(savedTheme)) {
    selectedTheme = savedTheme;
  }
} catch {}

document.documentElement.dataset.theme = selectedTheme;
themeSelect.value = selectedTheme;

themeSelect.addEventListener('change', () => {
  selectedTheme = themeSelect.value;
  document.documentElement.dataset.theme = selectedTheme;

  try {
    localStorage.setItem(themeStorageKey, selectedTheme);
  } catch {}
});

const inspirationButton = document.querySelector('#inspire-button');
const inspirationMessage = document.querySelector('#inspiration-message');

const messages = [
  'Empieza con una versión pequeña y deja que crezca.',
  'La curiosidad ya es un buen primer paso.',
  'Hazlo imperfecto, pero hazlo real.',
  'Guarda diez minutos para una idea que te importe.'
];

inspirationButton.addEventListener('click', () => {
  const currentMessage = inspirationMessage.textContent;
  const availableMessages = messages.filter((message) => message !== currentMessage);
  const nextMessage = availableMessages[Math.floor(Math.random() * availableMessages.length)];

  inspirationMessage.textContent = nextMessage;
});

// Analog clock
const clockHour = document.querySelector('#clock-hour');
const clockMinute = document.querySelector('#clock-minute');
const clockSecond = document.querySelector('#clock-second');

// Update the clock every second
function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  clockHour.style.transform = `translateX(-50%) rotate(${hours * 30}deg)`;
  clockMinute.style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`;
  clockSecond.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
}

updateClock();
setInterval(updateClock, 1000);
