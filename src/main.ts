import "./style.scss";
import icon1 from "./icons/account_circle_black_24dp.svg";
import icon2 from "./icons/done_black_24dp.svg";
import icon3 from "./icons/home_black_24dp.svg";
import icon4 from "./icons/search_black_24dp.svg";
import icon5 from "./icons/settings_black_24dp.svg";

const icons = [icon1, icon2, icon3, icon4, icon5];
let selectedIconIndex = 0;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container closed">
    <div class="selected-brush">
      <img class="selected-brush-icon" src="${icon1}" alt="" />
    </div>
    <div class="brush-container">
      ${Array(5)
        .fill(0)
        .map((_, i) => i + 1)
        .map(
          (_, i) => `
          <div class="brush${i === selectedIconIndex ? " selected" : ""}">
            <img src="${icons[i]}" class="brush-icon" />
          </div>
        `
        )
        .join("")}
    </div>
  </div>
`;

const container = document.querySelector<HTMLDivElement>(".container")!;
container.addEventListener("click", () => {
  container.classList.remove("closed");
});

document.body.addEventListener("click", (ev) => {
  const target = (ev.target as HTMLElement).closest('.container');
  if (!target && !container.classList.contains('closed')) {
    container.classList.add("closed");
  }
});

const selectedBrush = document.querySelector<HTMLImageElement>('.selected-brush-icon')!;

const iconElems = document.querySelectorAll<HTMLElement>(".brush")!;
iconElems.forEach((iconElem, idx) => {
  iconElem.addEventListener('click', () => {
    iconElems[selectedIconIndex].classList.remove('selected');
    selectedIconIndex = idx;
    iconElems[selectedIconIndex].classList.add('selected');
    selectedBrush.src = icons[selectedIconIndex];
  });
});
