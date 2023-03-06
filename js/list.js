let note = document.querySelector("#note");
let save = document.querySelector("#save");
let newUl = document.querySelector("#list");
let clear = document.querySelector("#clear");
let newLi;
function listele() {
  newLi = document.createElement("li");
  newLi.innerHTML = note.value.toString();
  newUl.append(newLi);
}

clear.addEventListener("click", function temizle() {
  newUl.remove();
});
save.addEventListener("click", listele);

let solution = 0;
let write = document.querySelector("#write");
let increase = document.querySelector("#increase");
let toReduce = document.querySelector("#toReduce");
write.innerHTML = solution;
function process() {
  this.id == "increase"
    ? (write.innerHTML = solution += 1)
    : (write.innerHTML = solution -= 1);
}

increase.addEventListener("click", process);
toReduce.addEventListener("click", process);
