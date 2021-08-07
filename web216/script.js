const root = document.getElementById("root");
const colors = ["00", "33", "66", "99", "cc", "ff"];

function createElement(bg) {
  const element = `
    <div>
      <div class="ele" style="background-color: ${bg}"></div>
      <div>${bg}</div>
    </div>
  `;
  return element;
}

let result = "";
let counter = 0;

function render() {
  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < colors.length; j++) {
      for (let k = 0; k < colors.length; k++) {
        result += createElement(`#${colors[i]}${colors[j]}${colors[k]}`);
        counter++;
      }
    }
  }
}

render();
console.log(counter);

root.innerHTML = result;
