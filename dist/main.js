"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("./car");
const canvas = document.getElementById("myCanvas");
canvas.width = 200;
const context = canvas.getContext("2d");
const car = new car_1.Car(100, 100, 30, 50);
const animate = () => {
    car.update();
    canvas.height = window.innerHeight;
    car.draw(context);
    requestAnimationFrame(animate);
};
