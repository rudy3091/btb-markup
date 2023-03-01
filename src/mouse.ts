export default () => {
  const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.src = "./src/splash.svg";
  img.width = 10;
  img.height = 10;
  img.onload = () => {
    console.log("sprite loaded");
  };

  let intervalId = 0;
  let targetX = -1, targetY = -1;
  canvas.addEventListener("mousedown", (ev: MouseEvent) => {
    targetX = ev.offsetX;
    targetY = ev.offsetY;

    intervalId = setInterval(() => {
      ctx?.drawImage(img, targetX - 20, targetY - 20);
    }, 50);
  });
  canvas.addEventListener("mousemove", (ev: MouseEvent) => {
    targetX = ev.offsetX;
    targetY = ev.offsetY;
  });
  canvas.addEventListener("mouseup", () => {
    clearInterval(intervalId);
  });
};
