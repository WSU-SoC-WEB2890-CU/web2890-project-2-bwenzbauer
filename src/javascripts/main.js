
// Portfolio Gallery
window.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".portfolio-box img");

  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.background = "rgba(0,0,0,0.85)";
  modal.style.display = "none";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.cursor = "pointer";
  modal.style.zIndex = "9999";

  const modalImg = document.createElement("img");
  modalImg.style.maxWidth = "90%";
  modalImg.style.maxHeight = "90%";
  modalImg.style.borderRadius = "50px";
  modal.appendChild(modalImg);

  document.body.appendChild(modal);

  images.forEach(img => {
    img.addEventListener("click", e => {
      e.stopPropagation();
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

// Calendar
const calendarGrid = document.querySelector('.calendar-grid');
const calendarTitle = document.getElementById('calendarTitle');
const prevBtn = document.getElementById('prevMonth');
const nextBtn = document.getElementById('nextMonth');

const year = 2026;
let currentMonth = 0;

const events = {
  '2026-03-06': ['Hostlers Model Railroad Festival (36th Annual)'],
  '2026-03-07': ['Hostlers Model Railroad Festival (36th Annual)'],
  '2026-03-08': ['Hostlers Model Railroad Festival (36th Annual)'],
  '2026-04-03': ['Ophir, Tintic & Western Train Show'],
  '2026-04-04': ['Ophir, Tintic & Western Train Show'],
  '2026-08-07': ['Evanston Roundhouse Festival (28th Annual)'],
  '2026-08-08': ['Evanston Roundhouse Festival (28th Annual)'],
  '2026-08-09': ['Evanston Roundhouse Festival (28th Annual)'],
  '2026-11-07': ['Intermountain Train Expo'],
  '2026-11-08': ['Intermountain Train Expo']
};

function renderCalendar(month) {
  calendarGrid.querySelectorAll('.calendar-day').forEach(e => e.remove());

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  calendarTitle.textContent =
    new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    empty.className = 'calendar-day inactive';
    calendarGrid.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const cell = document.createElement('div');
    cell.className = 'calendar-day';
    cell.innerHTML = `<div class="date">${day}</div>`;

    if (events[dateKey]) {
      events[dateKey].forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event';
        eventDiv.textContent = event;
        cell.appendChild(eventDiv);
      });
    }

    calendarGrid.appendChild(cell);
  }
}

prevBtn.addEventListener('click', () => {
  if (currentMonth > 0) {
    currentMonth--;
    renderCalendar(currentMonth);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentMonth < 11) {
    currentMonth++;
    renderCalendar(currentMonth);
  }
});

renderCalendar(currentMonth);
