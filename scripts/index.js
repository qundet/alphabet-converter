let fromArr = cyrillic;
let toArr = latin;

function switchAlphabet() {
  // header
  const from = document.getElementById("from");
  const to = document.getElementById("to");
  let tmp = from.innerHTML;
  from.innerHTML = to.innerHTML;
  to.innerHTML = tmp;

  // placeholders
  const inputPH = document.getElementById("input");
  const outputPH = document.getElementById("output");
  tmp = inputPH.placeholder;
  inputPH.placeholder = outputPH.placeholder;
  outputPH.placeholder = tmp;

  // arrays
  tmp = fromArr;
  fromArr = toArr;
  toArr = tmp;
}

function onInput() {
  setTimeout(() => {
    let val = document.getElementById("input").value;
    let translated = cyrillicToLatin(val);
    document.getElementById("output").value = translated;
  }, 1000);
}

function cyrillicToLatin(input) {
  for (let i = 0; i < fromArr.length; i++) {
    const regex = new RegExp(`${fromArr[i]}`, "g");
    input = input.replace(regex, toArr[i]);
    console.log(input);
  }
  console.log(input);
  return input;
}
