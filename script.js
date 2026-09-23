// Documenta cada función del archivo script.js

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

// Reloj analógico
const clockHour = document.querySelector('#clock-hour');
const clockMinute = document.querySelector('#clock-minute');
const clockSecond = document.querySelector('#clock-second');

// Actualiza el reloj cada segundo
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
