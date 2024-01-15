// recupero gli elementi html che mi servono
const slidesContainerEl = document.getElementById("slides-container");
const arrowBeforeEl = document.getElementById("arrow-before");
const arrowAfterEl = document.getElementById("arrow-after");

// creo l'array di immagini
slides = ["01.webb", "02.webb", "03.webb", "04.webb", "05.webb"];
console.log(slides);

// creo la slide mostrata
let slideIndex = 0;

// creo un ciclo for con cui inserisco le immagini nell'html e a cui inserisco la classe active
let slidesHtml = "";
for (let i = 0; i < slides.lenght; i++) {
  const slide = slides[i];

  let activeClass = i == slideIndex ? "active" : "";

  slidesHtml += `<img src="./img/${slide}" class="slide ${activeClass}" alt="img ${i}" />`;
}

slidesContainerEl.innerHTML = slidesHtml;

// creo un evento sul click della freccia in basso (arrow next)
arrowAfterEl.addEventListener("click", function () {
  // elimino la classe active dalla slide mostrata
  let oldSlide = document.querySelector(".slide.active");
  oldSlide.classList.remove("active");

  // incremento slideIndex (indice della slide mostrata)
  slideIndex++;
  console.log('Slide index: ' slideIndex);

  // mostro la nuova slide
  const allSlides = document.getElementsByClassName("slide");
  const newSlide = allSlides[slideIndex];
});

// creo un evento sul click della freccia in alto (arrow before)
arrowBeforeEl.addEventListener("click", function () {
   // elimino la classe active dalla slide mostrata
   let oldSlide = document.querySelector(".slide.active");
   oldSlide.classList.remove("active");
 
   // incremento slideIndex (indice della slide mostrata)
   slideIndex--;
   console.log('Slide index: ' slideIndex);
 
   // mostro la nuova slide
   const allSlides = document.getElementsByClassName("slide");
   const newSlide = allSlides[slideIndex];
});
