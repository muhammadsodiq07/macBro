
// Modal 

let elFullScreen = document.querySelector(".full-screen");
let elExit = document.querySelector(".exit-btn");
let elModalList = document.querySelector(".modal-list");
let elModal = document.querySelector(".modal-part");

elFullScreen.addEventListener("click", () => {
  elModal.style.opacity = "1";
  elModal.style.zIndex = "99999999";
});

elExit.addEventListener("click", () => {
  elModal.style.opacity = "0";
  elModal.style.zIndex = "-999999";
});

macObject[0].gold.forEach((item) => {
  let elImgKeeper = document.createElement("div");
  elImgKeeper.className = "modal-item";

  elImgKeeper.innerHTML = `
    <img src="${item}" alt="laptop">
  `;

  elModalList.appendChild(elImgKeeper);
}); 

let elModalBtnDiv = document.querySelector(".modal-btn-div");

macObject[0].gold.forEach((item) => {
  let elImgitem = document.createElement("li");
  elImgitem.className = "modal-item-btn";

  elImgitem.innerHTML = `
    <button class="modal-btn">
      <img src="${item}" alt="laptop">
    </button>
  `;

  elModalBtnDiv.appendChild(elImgitem);
}); 

let modalItemBtns = document.querySelectorAll(".modal-item-btn");
modalItemBtns[0].classList.add("active");

modalItemBtns.forEach((item, index) => {
  item.addEventListener("click", () => {
    modalItemBtns.forEach((value) => {
      value.classList.remove("active");
    });
    item.classList.add("active");
  });
});

carouselModal();

function carouselModal(){
  let arr = document.querySelectorAll(".modal-item-btn");
  arr.forEach((item, index) => {
    item.addEventListener("click", () => {
      arr.forEach((value) => {
        value.classList.remove("active");
      });
      item.classList.add("active");

      elModalList.style.transform = `translateX(${-index * 550}px)`;
    });
  });  
}
