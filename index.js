let count = 0;
let countEl = document.getElementById("count");
let saveEl = document.getElementById("saved");
function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  console.log(countEl.innerText);
  saveEl.textContent += count + " - ";
  countEl.textContent = 0;
  count=0;

}
