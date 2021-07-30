function handler(r, g, b) {
  const valR = parseInt(r.value);
  const valG = parseInt(g.value);
  const valB = parseInt(b.value);

  const resR = valR.toString(16);
  const resG = valG.toString(16);
  const resB = valB.toString(16);

  const res = `#${resR}${resG}${resB}`;
  const resDiv = document.getElementById('res');

  const ele = `<div>${res}</div><div class="showColor" style="background-color: ${res}"></div>`
  resDiv.innerHTML = ele;
}

var btn = document.getElementById("btn");
var r = document.getElementById("r");
var g = document.getElementById("g");
var b = document.getElementById("b");
btn.addEventListener("click", () => handler(r, g, b), false);
