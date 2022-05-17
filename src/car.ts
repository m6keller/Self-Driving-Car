import { Controls } from "./controls";

export class Car {
  x: number;
  y: number;
  width: number;
  height: number;
  controls: Controls;
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.controls = new Controls();
  }

  update() {
    if (this.controls.forward) {
      this.y -= 2;
    }
    if (this.controls.reverse) {
      this.y += 2;
    }
  }
  //@ts-ignore
  draw(context) {
    context.beginPath();
    context.rect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    context.fill();
  }
}
