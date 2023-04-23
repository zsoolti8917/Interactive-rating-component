
const ratingElements = document.querySelectorAll(".rating");
ratingElements.forEach(function(ratingElement) {
  ratingElement.addEventListener("click", function() {
    ratingElement.classList.toggle("ratings-selected");
  });
});

document.querySelector(".button").addEventListener("click", function(e){  
const selectedElements = document.querySelectorAll(".ratings-selected");
  const selectedNumElement = document.querySelector("#selected-num");
  selectedNumElement.textContent = selectedElements.length;
  
  const mainElement = document.querySelector(".main");
mainElement.style.display = "none";

const ratingScreenElement = document.querySelector(".rating__screen");
ratingScreenElement.style.display = "grid";
console.log(selectedElements.length);
})

