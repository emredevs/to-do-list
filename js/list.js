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

let sonuc = 0;
let yaz = document.querySelector("#write");
let art = document.querySelector("#art");
let azalt = document.querySelector("#azalt");
yaz.innerHTML = sonuc;
function islem() {
  this.id == "art"
    ? (yaz.innerHTML = sonuc += 1)
    : (yaz.innerHTML = sonuc -= 1);
}

art.addEventListener("click", islem);
azalt.addEventListener("click", islem);
