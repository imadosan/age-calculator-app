'use strict';

// Selecting elements
const form = document.querySelector('.form');
const dayInput = document.querySelector('#day--input');
const monthInput = document.querySelector('#month--input');
const yearInput = document.querySelector('#year--input');
const dayLabel = document.querySelector('.day--label');
const monthLabel = document.querySelector('.month--label');
const yearLabel = document.querySelector('.year--label');
const dayResult = document.querySelector('.day--result');
const monthResult = document.querySelector('.month--result');
const yearResult = document.querySelector('.year--result');
const formBtn = document.querySelector('.form-submit');

const now = new Date();
let currentDay = now.getDate();
let currentMonth = 1 + now.getMonth();
let currentYear = now.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const validateForm = function () {
  if (dayInput.value > 31 || dayInput.value < 0 || dayInput.value === '') {
    const html = `<div class="error--message">Must be a valid day</div>`;
    dayInput.insertAdjacentHTML('afterend', html);
    dayInput.classList.add('input--day-error');
    dayLabel.classList.add('label--day-error');
  }

  if (
    monthInput.value > 12 ||
    monthInput.value < 0 ||
    monthInput.value === ''
  ) {
    const html = `<div class="error--message">Must be a valid month</div>`;
    monthInput.insertAdjacentHTML('afterend', html);
    monthInput.classList.add('input--month-error');
    monthLabel.classList.add('label--month-error');
  }

  if (
    yearInput.value > currentYear ||
    yearInput.value < 0 ||
    yearInput.value === ''
  ) {
    const html = `<div class="error--message">Must be a valid Year</div>`;
    yearInput.insertAdjacentHTML('afterend', html);
    yearInput.classList.add('input--year-error');
    yearLabel.classList.add('label--year-error');
  }
};

const calcAge = function () {
  if (dayInput.value > currentDay) {
    currentDay = currentDay + months[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }
  if (monthInput.value > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  const day = currentDay - dayInput.value;
  const month = currentMonth - monthInput.value;
  const year = currentYear - yearInput.value;

  dayResult.textContent = day;
  monthResult.textContent = month;
  yearResult.textContent = year;
};

formBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!validateForm()) calcAge();
});
