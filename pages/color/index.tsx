import styles from './color.module.scss';

function getVal(id) {
  console.log(this)
  // const val = this.forms[0][id]["value"];
  // return parseInt(val).toString(16).padStart(2, "0");
}

function handleSubmit() {
  const resR = getVal('r');
  const resG = getVal('g');
  const resB = getVal('b');

  const bgColor = `#${resR}${resG}${resB}`;
  // const res = document.getElementById("res");

  const msg = bgColor.includes('NaN')
    ? `请输入数字值`
    : bgColor.includes('-')
    ? `请输入正整数`
    : bgColor.length > 7
    ? `请输入不超过255的值`
    : null;

  const renderEle = `
    <div>${bgColor}</div>
    <div class="showColor" style="background-color: ${bgColor}"></div>
    `;

  // res.innerHTML = msg ?? renderEle;
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
}

export default function () {
  return (
    <div>
      <div className={styles.flex}>
        <form action='#'>
          <div className={styles.flex}>
            <label>R </label>
            <input name='r' id='r' placeholder='请输入R' />
          </div>
          <div className={styles.flex}>
            <label>G </label>
            <input name='g' id='g' placeholder='请输入G' />
          </div>
          <div className={styles.flex}>
            <label>B </label>
            <input name='b' id='b' placeholder='请输入B' />
          </div>

          <button type="submit" className='btn btn-primary' onClick={() => handleSubmit()}>
            转换
          </button>
          <input className='btn btn-primary' type='reset' value='重置'></input>
        </form>
        <form action='#'>
          <div className='flex'>
            <label>16进制 </label>
            <input name='hex' placeholder='请输入16进制' />
          </div>

          <a href='' className='btn btn-primary' onClick={undefined}>
            转换
          </a>
          <input className='btn btn-primary' type='reset' value='重置'></input>
        </form>
      </div>
    </div>
  );
}
