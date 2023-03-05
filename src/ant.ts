import image from './splash.svg';

export class Ant {
  private static mw: number = 500;
  private static mh: number = 500;
  private vx: number = Math.random() - 0.5;
  private vy: number = Math.random() - 0.5;

  constructor(public x: number, public y: number) {}

  public update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > Ant.mw) this.vx *= -1;
    if (this.y < 0 || this.y > Ant.mh) this.vy *= -1;
  }

  public randomize() {
    if (Math.random() > 0.7) {
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;
    }
  }
}

export default () => {
  const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.src = image;
  img.width = 10;
  img.height = 10;
  img.onload = () => {
    console.log("sprite loaded");
  };

  const ants: Ant[] = [];

  canvas.addEventListener("click", (ev: MouseEvent) => {
    const ant = new Ant(ev.offsetX, ev.offsetY);
    ants.push(ant);
  });

  setInterval(() => {
    ants.forEach((ant) => {
      ant.randomize();
    });
  }, 1000);

  const updateAntsPosition = () => {
    ants.forEach((ant) => {
      ctx?.clearRect(ant.x, ant.y, img.width, img.height);
      ctx?.drawImage(img, ant.x, ant.y);
      ant.update();
    });
    requestAnimationFrame(updateAntsPosition);
  };

  requestAnimationFrame(updateAntsPosition);
};
