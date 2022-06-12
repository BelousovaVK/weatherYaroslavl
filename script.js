// Создание времени
for (let i = 0; i < 24; i++) {
   const sliderTimesWrapper = document.querySelector(".sliderTimesWrapper");
   if (i<10) {
    sliderTimesWrapper.insertAdjacentHTML('beforeend',`<p>0${i}:00</p>`);
   }
   else{
    sliderTimesWrapper.insertAdjacentHTML('beforeend',`<p>${i}:00</p>`);
   }
}

// Слайдер
const next = document.querySelector(".sliderNext")
const prev = document.querySelector(".sliderPrev")
const wrapper = document.querySelector(".sliderTimesWrapper")
const HEIGHT_ITEM = 53

let correctTime = 2

// рендеринг слайдера
function moveWrapper(pos) {
    wrapper.style.top = pos * -HEIGHT_ITEM + HEIGHT_ITEM*2 + "px"
}

// движение вниз
next.addEventListener("click", ()=>{
    if (correctTime > -1 && correctTime <= 22) {
        correctTime++
    }
    moveWrapper(correctTime)
})

// движение вверх
prev.addEventListener("click", ()=>{
    if (correctTime >= 1 && correctTime <= 23) {
        correctTime--
    }
    moveWrapper(correctTime)
})