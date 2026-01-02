/* dialoger for tema 3 */
/**** DIALOG 2 ******/

let btn_open2 = document.querySelector("#cta_open2");
let dialog2 = document.querySelector("#dialog2");

btn_open2.addEventListener("click", openModal2);

function openModal2() {
  dialog2.classList.add("spinIn");
  dialog2.showModal();

  dialog2.scrollTop = 0;
}

dialog2.addEventListener("click", (e) => {
  if (e.target === dialog2) {
    dialog2.close();
  }
});

/**** DIALOG 3 ******/

let btn_open3 = document.querySelector("#cta_open3");
let dialog3 = document.querySelector("#dialog3");

btn_open3.addEventListener("click", openModal3);

function openModal3() {
  dialog3.classList.add("spinIn");
  dialog3.showModal();

  dialog3.scrollTop = 0;
}

dialog3.addEventListener("click", (e) => {
  if (e.target === dialog3) {
    dialog3.close();
  }
});

/**** DIALOG 4 ******/

let btn_open4 = document.querySelector("#cta_open4");
let dialog4 = document.querySelector("#dialog4");

btn_open4.addEventListener("click", openModal4);

function openModal4() {
  dialog4.classList.add("spinIn");
  dialog4.showModal();

  dialog4.scrollTop = 0;
}

dialog4.addEventListener("click", (e) => {
  if (e.target === dialog4) {
    dialog4.close();
  }
});
