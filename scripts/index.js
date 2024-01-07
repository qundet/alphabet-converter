function switchAlphabet() {
  const from = document.getElementById("from");
  const to = document.getElementById("to");
  let tmp = from.innerHTML;
  from.innerHTML = to.innerHTML;
  to.innerHTML = tmp;
  console.log(alph);
}

function onInput() {
  setTimeout(() => {
    let val = document.getElementById("input").value;
    let translated = cyrillicToLatin(val);
    document.getElementById("output").value = translated;
  }, 1000);
}

function cyrillicToLatin(str) {
  for (let i = 0; i < cyrillicAlph.length; i++) {
    const regex = new RegExp(`${cyrillicAlph[i]}`, "g");
    str = str.replace(regex, latinAlph[i]);
    console.log(str);
  }
  console.log(str);
  return str;
}
