/**** DIALOG 7 ******/

let btn_open7 = document.querySelector("#cta_open7");
let dialog7 = document.querySelector("#dialog7");

btn_open7.addEventListener("click", openModal7);

function openModal7() {
  dialog7.classList.add("spinIn");
  dialog7.showModal();

  dialog7.scrollTop = 0;
}

dialog7.addEventListener("click", (e) => {
  if (e.target === dialog7) {
    dialog7.close();
  }
});

/**** DIALOG 8 ******/

let btn_open8 = document.querySelector("#cta_open8");
let dialog8 = document.querySelector("#dialog8");

btn_open8.addEventListener("click", openModal8);

function openModal8() {
  dialog8.classList.add("spinIn");
  dialog8.showModal();

  dialog8.scrollTop = 0;
}

dialog8.addEventListener("click", (e) => {
  if (e.target === dialog8) {
    dialog8.close();
  }
});
