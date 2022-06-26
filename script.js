import { data } from "../data.js";

// Создание времени
const sliderTimesWrapper = document.querySelector(".sliderTimesWrapper");
for (let i = 0; i < 24; i++) {
    sliderTimesWrapper.insertAdjacentHTML('beforeend', `<p class="hour">${String(i).padStart(2, "0")}:00</p>`);
}

// Слайдер
const next = document.querySelector(".sliderNext")
const prev = document.querySelector(".sliderPrev")
const wrapper = document.querySelector(".sliderTimesWrapper")
const HEIGHT_ITEM = 53

let correctTime = 2
// рендеринг слайдера
function moveWrapper(pos) {
    wrapper.style.top = pos * -HEIGHT_ITEM + HEIGHT_ITEM * 2 + "px"
}

// движение вниз
next.addEventListener("click", () => {
    if (correctTime > -1 && correctTime <= 22) {
        correctTime++
    }
    moveWrapper(correctTime)
    dataTime(correctTime)
})

// движение вверх
prev.addEventListener("click", () => {
    if (correctTime >= 1 && correctTime <= 23) {
        correctTime--
    }
    moveWrapper(correctTime)
    dataTime(correctTime)
})

// вывод данных
const tempP = document.querySelector(".tempP")
const windP = document.querySelector(".windP")
const precipP = document.querySelector(".precipP")
function dataTime(correctTime) {
    tempP.innerHTML = data[correctTime].temp + `°`
    windP.innerHTML = data[correctTime].wind + `mhp`
    precipP.innerHTML = data[correctTime].temp + `%`
}
dataTime(correctTime)

// Получение даты
let date = new Date();
let output = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
document.querySelector(".dat").innerHTML = output