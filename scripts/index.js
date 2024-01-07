function switchAlphabet() {
  const from = document.getElementById("from");
  const to = document.getElementById("to");
  let tmp = from.innerHTML;
  from.innerHTML = to.innerHTML;
  to.innerHTML = tmp;
  console.log(alph);
}
