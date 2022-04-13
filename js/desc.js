// Title external link

let elExternal = document.querySelector(".external-btn");

elExternal.addEventListener("click", () => {
  elExternal.style.fontSize = "15px";
  elExternal.innerHTML = "Nusxa olindi";
});

// Desc buttons

let elDescBtn = document.querySelector(".text__summary");
let elDescSpec = document.querySelector(".text__spec");
let elColor = document.querySelector(".text__color");
let eldescSummaryInfo = document.querySelector(".text__summary-info");
let elDescSpecification = document.querySelector(".text__specifications");

elDescSpec.addEventListener("click", () => {
  elColor.style.transform = "translateX(100%)";
  eldescSummaryInfo.classList.remove("show-it");
  elDescSpecification.classList.add("show-it");
});

elDescBtn.addEventListener("click", () => {
  elColor.style.transform = "translateX(0)";
  eldescSummaryInfo.classList.add("show-it");
  elDescSpecification.classList.remove("show-it");
});

// Bottom slider

let elSimilarList = document.querySelector(".laptopMac__list");
let elRight = document.querySelector(".right");
let elLeft = document.querySelector(".left");
let elCheck = 0;

elRight.addEventListener("click", () => {
  elCheck++;

  carouselIt();
});

elLeft.addEventListener("click", () => {
  elCheck--;

  carouselIt();
});

function carouselIt(){
  if(elCheck == 0){
    elLeft.style.display = "none";
  } else if(elCheck > 0){
    elLeft.style.display = "block";
  }

  if(elCheck == 7){
    elRight.style.display = "none";
  } else{
    elRight.style.display = "block";
  }

  elSimilarList.style.transform = `translate(${-elCheck * 33.3}%)`;
}