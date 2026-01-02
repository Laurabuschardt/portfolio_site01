/**** DIALOG 5 ******/

let btn_open5 = document.querySelector("#cta_open5");
let dialog5 = document.querySelector("#dialog5");

btn_open5.addEventListener("click", openModal5);

function openModal5() {
  dialog5.classList.add("spinIn");
  dialog5.showModal();

  dialog5.scrollTop = 0;
}

dialog5.addEventListener("click", (e) => {
  if (e.target === dialog5) {
    dialog5.close();
  }
});

/**** DIALOG 6 ******/

let btn_open6 = document.querySelector("#cta_open6");
let dialog6 = document.querySelector("#dialog6");

btn_open6.addEventListener("click", openModal6);

function openModal6() {
  dialog6.classList.add("spinIn");
  dialog6.showModal();

  dialog6.scrollTop = 0;
}

dialog6.addEventListener("click", (e) => {
  if (e.target === dialog6) {
    dialog6.close();
  }
});
