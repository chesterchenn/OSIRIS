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

  const ele = msg ?? renderEle;
  res.innerHTML = ele;
}
