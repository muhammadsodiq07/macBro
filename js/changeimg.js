
// Changing the imgs in colour buttons

let elColorBtns = document.querySelectorAll(".color-btn");

elColorBtns.forEach((item, index) => {
  item.addEventListener("click", () => {
    if(index == 0){
      elBigImgHolder.innerHTML = "";
      macObject[0].gold.forEach((item) => {
        let elImgKeeper = document.createElement("div");
        elImgKeeper.className = "hero__img-keeper";
      
        elImgKeeper.innerHTML = `
          <img src="${item}" alt="laptop">
        `;
      
        elBigImgHolder.appendChild(elImgKeeper);
      }); 

      elHeroList.innerHTML = "";
      macObject[0].gold.forEach((item) => {
        let elImgitem = document.createElement("li");
        elImgitem.className = "hero__item";
      
        elImgitem.innerHTML = `
          <button class="hero__btn">
            <img src="${item}" alt="laptop">
          </button>
        `;
      
        elHeroList.appendChild(elImgitem);
      });
      
      let elImages = document.querySelectorAll(".hero__item");
      elImages[0].classList.add("active");
      elBigImgHolder.style.transform = `translateX(${0}px)`;
      carousel();

      let elModalList = document.querySelector(".modal-list");
      elModalList.innerHTML = "";
      macObject[0].gold.forEach((item) => {
        let elImgKeeper = document.createElement("div");
        elImgKeeper.className = "modal-item";
      
        elImgKeeper.innerHTML = `
          <img src="${item}" alt="laptop">
        `;
      
        elModalList.appendChild(elImgKeeper);
      }); 
      
      let elModalBtnDiv = document.querySelector(".modal-btn-div");
      elModalBtnDiv.innerHTML = '';
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
      let elBorder = document.querySelectorAll(".modal-item-btn");
      elBorder[0].classList.add("active"); 
      elModalList.style.transform = `translateX(${0}px)`;
      carouselModal();
    } else if(index == 1){
      elBigImgHolder.innerHTML = "";
      macObject[0].silver.forEach((item) => {
        let elImgKeeper = document.createElement("div");
        elImgKeeper.className = "hero__img-keeper";
      
        elImgKeeper.innerHTML = `
          <img src="${item}" alt="laptop">
        `;
      
        elBigImgHolder.appendChild(elImgKeeper);
      });

      elHeroList.innerHTML = "";
      macObject[0].silver.forEach((item) => {
        let elImgitem = document.createElement("li");
        elImgitem.className = "hero__item";
      
        elImgitem.innerHTML = `
          <button class="hero__btn">
            <img src="${item}" alt="laptop">
          </button>
        `;
      
        elHeroList.appendChild(elImgitem);
      });

      let elImages = document.querySelectorAll(".hero__item");
      elImages[0].classList.add("active");
      elBigImgHolder.style.transform = `translateX(${0}px)`;
      carousel();

      let elModalList = document.querySelector(".modal-list");
      elModalList.innerHTML = "";
      macObject[0].silver.forEach((item) => {
        let elImgKeeper = document.createElement("div");
        elImgKeeper.className = "modal-item";
      
        elImgKeeper.innerHTML = `
          <img src="${item}" alt="laptop">
        `;
      
        elModalList.appendChild(elImgKeeper);
      }); 
      
      let elModalBtnDiv = document.querySelector(".modal-btn-div");
      elModalBtnDiv.innerHTML = '';
      macObject[0].silver.forEach((item) => {
        let elImgitem = document.createElement("li");
        elImgitem.className = "modal-item-btn";
      
        elImgitem.innerHTML = `
          <button class="modal-btn">
            <img src="${item}" alt="laptop">
          </button>
        `;
      
        elModalBtnDiv.appendChild(elImgitem);
      });
      let elBorder = document.querySelectorAll(".modal-item-btn");
      elBorder[0].classList.add("active"); 
      elModalList.style.transform = `translateX(${0}px)`;
      carouselModal();
    } else{
      elBigImgHolder.innerHTML = "";
      macObject[0].spaceGray.forEach((item) => {
        let elImgKeeper = document.createElement("div");
        elImgKeeper.className = "hero__img-keeper";
      
        elImgKeeper.innerHTML = `
          <img src="${item}" alt="laptop">
        `;
      
        elBigImgHolder.appendChild(elImgKeeper);
      });

      elHeroList.innerHTML = "";
      macObject[0].spaceGray.forEach((item) => {
        let elImgitem = document.createElement("li");
        elImgitem.className = "hero__item";
      
        elImgitem.innerHTML = `
          <button class="hero__btn">
            <img src="${item}" alt="laptop">
          </button>
        `;
      
        elHeroList.appendChild(elImgitem);
      });

      let elImages = document.querySelectorAll(".hero__item");
      elImages[0].classList.add("active");
      elBigImgHolder.style.transform = `translateX(${0}px)`;
      carousel();

      let elModalList = document.querySelector(".modal-list");
      elModalList.innerHTML = "";
      macObject[0].spaceGray.forEach((item) => {
        let elImgKeeper = document.createElement("div");
        elImgKeeper.className = "modal-item";
      
        elImgKeeper.innerHTML = `
          <img src="${item}" alt="laptop">
        `;
      
        elModalList.appendChild(elImgKeeper);
      }); 
      
      let elModalBtnDiv = document.querySelector(".modal-btn-div");
      elModalBtnDiv.innerHTML = '';
      macObject[0].spaceGray.forEach((item) => {
        let elImgitem = document.createElement("li");
        elImgitem.className = "modal-item-btn";
      
        elImgitem.innerHTML = `
          <button class="modal-btn">
            <img src="${item}" alt="laptop">
          </button>
        `;
      
        elModalBtnDiv.appendChild(elImgitem);
      });
      
      let elBorder = document.querySelectorAll(".modal-item-btn");
      elBorder[0].classList.add("active");
      elModalList.style.transform = `translateX(${0}px)`;
      carouselModal();  
    }

    elColorBtns.forEach((element) => {
      element.classList.remove("active");
    })
    item.classList.add("active");
    
    let elClassName = document.querySelector(".color-name");
    elClassName.innerText = `${macObject[0].color[index]}`;
  });
});