const btn = document.getElementById("btn");

function getVal(id) {
  const val = document.forms[0][id]['value'];
  return parseInt(val).toString(16).padStart(2, "0");
}

function handleSubmit() {
  const resR = getVal("r");
  const resG = getVal("g");
  const resB = getVal("b");

  const bgColor = `#${resR}${resG}${resB}`;
  const res = document.getElementById("res");

  const ele = `
    <div>${bgColor}</div>
    <div class="showColor" style="background-color: ${bgColor}"></div>
    `;
  res.innerHTML = ele;
}

