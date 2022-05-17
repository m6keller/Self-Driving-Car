import { Car } from "./car";

//@ts-ignore
const canvas: HTMLCanvasElement = document.getElementById("myCanvas")!;
canvas.width = 200;

const context = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);

const animate = () => {
  car.update();
  canvas.height = window.innerHeight;
  car.draw(context);
  requestAnimationFrame(animate);
};
