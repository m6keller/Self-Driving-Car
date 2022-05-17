"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const controls_1 = require("./controls");
class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.controls = new controls_1.Controls();
    }
    update() {
        if (this.controls.forward) {
            this.y -= 2;
        }
        if (this.controls.reverse) {
            this.y += 2;
        }
    }
    draw(context) {
        context.beginPath();
        context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        context.fill();
    }
}
exports.Car = Car;
