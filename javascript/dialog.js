/**** DIALOG 1 ******/

let btn_open = document.querySelector("#cta_open1");
let dialog1 = document.querySelector("#dialog1");

btn_open.addEventListener("click", openModal);

function openModal() {
  console.log("der er klikket");
  dialog1.classList.add("spinIn");
  dialog1.showModal();

  dialog1.scrollTop = 0;
}

dialog1.addEventListener("click", (e) => {
  if (e.target === dialog1) {
    dialog1.close();
  }
});
