const btn = document.getElementById("btn");

function getVal(id) {
  const val = document.forms[0][id]["value"];
  return parseInt(val).toString(16).padStart(2, "0");
}

function handleSubmit() {
  const resR = getVal("r");
  const resG = getVal("g");
  const resB = getVal("b");

  const bgColor = `#${resR}${resG}${resB}`;
  const res = document.getElementById("res");

  const msg = bgColor.includes("NaN")
    ? `请输入数字值`
    : bgColor.includes("-")
    ? `请输入正整数`
    : bgColor.length > 7
    ? `请输入不超过255的值`
    : null;

  const renderEle = `
    <div>${bgColor}</div>
    <div class="showColor" style="background-color: ${bgColor}"></div>
    `;

  res.innerHTML = msg ?? renderEle;
}

function handleHex() {
  let val = document.forms[1]["hex"]["value"];
  let arr = [];
  if (val.startsWith("#")) {
    val = val.slice(1);
  }

  for (let i = 0; i < 3; i++) {
    const v = val.slice(i * 2, (i + 1) * 2);
    const t = parseInt(v, 16).toString(10);
    arr.push(t);
  }
  const bgColor = `rgb(${arr[0]},${arr[1]},${arr[2]})`;
  const renderEle = `
    <div>${bgColor}</div>
    <div class="showColor" style="background-color: ${bgColor}"></div>
    `;
  res.innerHTML = renderEle;
}
