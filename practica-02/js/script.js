// Task 1
// Напишіть функцію, яка приймає у input числа і повертає більше з них. І виводить в out-1.

function findMaxNumber(inp) {
  let nums = inp.split(",").map((num) => parseInt(num.trim()));
  return Math.max(...nums);
}

document.querySelector("#b-1").onclick = function () {
  const inp = document.querySelector("#input-1").value;
  const result = findMaxNumber(inp);
  document.getElementById("out-1").textContent = result;
};
// Task 2.
// Напишіть функцію, яка приймає число і виводить таблицю множення для цього числа в out-2.
function getTableMultiple() {
  const num = parseInt(document.getElementById("input-2").value);
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${num} × ${i} = ${num * i}<br>`;
  }
  document.getElementById("out-2").innerHTML = result;
}
document.querySelector("#b-2").onclick = getTableMultiple;

// Task 3
// Напишіть функцію t3 яка приймає ваш рік народження та обчислює (повертає) ваш вік.
function t3(year) {
  const currentYear = new Date().getFullYear();
  return currentYear - year;
}
document.querySelector("#b-3").onclick = function () {
  const year = parseInt(document.getElementById("input-3").value);
  document.getElementById("out-3").textContent = t3(year);
};

// Task 4
// Напишіть функцію t4, яка приймає 2 числа та повертає випадкове ціле число від першого до другого прийнятого параметра.
function t4(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
document.querySelector("#b-4").onclick = function () {
  const a = parseInt(document.getElementById("input-4-1").value);
  const b = parseInt(document.getElementById("input-4-2").value);
  document.getElementById("out-4").textContent = t4(a, b);
};

// Task 5
// Напишіть функцію t5, яка повертає випадковий колір у форматі rgb(x,y,z)(рядок). Де x, y, z – випадкові числа в діапазоні [0, 255].

function t5() {
  return `rgb(${t4(0, 255)}, ${t4(0, 255)}, ${t4(0, 255)})`;
}
document.querySelector("#b-5").onclick = function () {
  const color = t5();
  const out = document.getElementById("out-5");
  out.textContent = color;
  out.style.backgroundColor = color;
};

// Task 6
// Напишіть функцію t6, яка приймає рядок як параметр і повертає результат з очищеними пробілами на початку та в кінці рядка. Тобто приймає _hello_(де знак _ символізує прогалину), а повертає hello. Для видалення пробілів – використовуйте trim.
function t6(str) {
  return str.trim();
}
document.querySelector("#b-6").onclick = function () {
  const inp = document.getElementById("input-6").value;
  document.getElementById("out-6").textContent = `"${t6(inp)}"`;
};

// Task 7
// Напишіть функцію t7, яка приймає число та повертає true, якщо число парне, і false якщо не парне.
function t7(num) {
  return num % 2 === 0;
}
document.querySelector("#b-7").onclick = function () {
  const num = parseInt(document.getElementById("input-7").value);
  document.getElementById("out-7").textContent = t7(num);
};

// Task 8
// Напишіть функцію для пошуку максимальної цифри у числі.
function t8(num) {
  return Math.max(...num.toString().split("").map(Number));
}
document.querySelector("#b-8").onclick = function () {
  const num = parseInt(document.getElementById("input-8").value);
  document.getElementById("out-8").textContent = t8(num);
};

// Task 9
/*
    Написати функцію, яка повертає число Фібоначчі за переданим порядковим номером.
    Числа Фібоначчі: 1, 1, 2, 3, 5, 8, 13 ... Ряд ґрунтується на тому, що кожне число дорівнює сумі двох попередніх чисел.
    Наприклад: порядковий номер 3 – число 2, порядковий номер 6 – число 8.
 */
function t9(index) {
  if (index <= 2) return 1;
  let a = 1,
    b = 1,
    result;
  for (let i = 3; i <= index; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;
}
document.querySelector("#b-9").onclick = function () {
  const idx = parseInt(document.getElementById("input-9").value);
  document.getElementById("out-9").textContent = t9(idx);
};

// Task 10

/*
    Створіть об'єкт, що описує автомобіль (виробник, модель, рік
    випуску, середня швидкість), і наступні функції для роботи з цим
    об'єктом.
    1. Функція для виведення інформації про автомобіль на
    екран.
    2. Функція для підрахунку необхідного часу для подолання
    переданої відстані із середньою швидкістю. Враховуйте,
    що через кожні 4 години дороги, водієві необхідно робити
    перерву на 1 годину.
    3. Функція, яка виводить на екран інформацію про час
    поїздки, а також час прибуття в пункт призначення.

 */
function t10() {
  const car = {
    producer: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue",
    engine: {
      type: "gasoline",
      capacity: 1.6,
    },
  };
  return car;
}

document.querySelector("#b-10").onclick = function () {
  const car = t10();
  let result = `
        Producer: ${car.producer}<br>
        Model: ${car.model}<br>
        Year: ${car.year}<br>
        Color: ${car.color}<br>
        Engine type: ${car.engine.type}<br>
        Engine capacity: ${car.engine.capacity}L
      `;
  document.getElementById("out-10").innerHTML = result;
};
