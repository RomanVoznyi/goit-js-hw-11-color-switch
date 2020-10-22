/*Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн - стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.*/

import colors from "./colors.js";

const refs = {
	body: document.querySelector("body"),
	btnStart: document.querySelector("button[data-action='start']"),
	btnStop: document.querySelector("button[data-action='stop']"),
}
let timerId;

refs.btnStart.addEventListener("click", onStartEvent);
refs.btnStop.addEventListener("click", onStopEvent);

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartEvent() {
	timerId = setInterval(() => {
		refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
	}, 1000);
	refs.btnStart.disabled = true;
}

function onStopEvent() {
	clearInterval(timerId);
	refs.btnStart.disabled = false;
}

