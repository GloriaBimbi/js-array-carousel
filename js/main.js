// recupero gli elementi html che mi servono
const slidesContainerEl = document.getElementById("slides-container");
const arrowBeforeEl = document.getElementById("arrow-before");
const arrowAfterEl = document.getElementById("arrow-after");

// creo l'array di immagini
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
console.log(slides);

// creo la slide mostrata
let slideIndex = 0;

// creo un ciclo for con cui inserisco le immagini nell'html e a cui inserisco la classe active
let slidesHtml = "";
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  let activeClass = i == slideIndex ? "active" : "";
  slidesHtml += `<img src="./img/${slide}" class="slide ${activeClass}" alt="img ${i}" />`;
  console.log("Slide index: " + slideIndex);
}

slidesContainerEl.innerHTML = slidesHtml;

//creo una variabile per la nuova slide mostrata dopo il click su un bottone
let newSlide;
// creo un evento sul click della freccia in basso (arrow next)
arrowAfterEl.addEventListener("click", function () {
  // con la funzione giusta elimino la classe active dalla slide mostrata
  delateActiveClass();
  // con la funzione giusta incremento slideIndex (indice della slide mostrata) e ottengo anche un ciclo infinito
  infiniteCircleAfter();
  // con la funzione giusta mostro la nuova slide
  showNewSlide();
  // con la funzione giusta do la classe active alla nuova slide mostrata
  addActiveClass();
});

// creo un evento sul click della freccia in alto (arrow before)
arrowBeforeEl.addEventListener("click", function () {
  // con la funzione giusta elimino la classe active dalla slide mostrata
  delateActiveClass();
  // con la funzione giusta decremento slideIndex (indice della slide mostrata) e faccio in modo di ottenere un ciclo infinito
  infiniteCircleBefore();
  // con la funzione giusta mostro la nuova slide
  showNewSlide();
  // con la funzione giusta do la classe active alla nuova slide mostrata
  addActiveClass();
});

//FUNCTIONS:
// creo una funzione che elimina la classe active dalla slide mostrata
function delateActiveClass() {
  let oldSlide = document.querySelector(".slide.active");
  oldSlide.classList.remove("active");
}

// creo una funzione che incrementa slideIndex (indice della slide mostrata) e ottiene anche un ciclo infinito quando sull'ultima slide si vuole andare ancora avanti
function infiniteCircleAfter() {
  if (slideIndex >= slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
    console.log("Slide index: " + slideIndex);
  }
}

// creo una funzione che decrementa slideIndex (indice della slide mostrata) e fa in modo di ottenere un ciclo infinito quando sono sulla prima slide e voglio andare ancora indietro
function infiniteCircleBefore() {
  if (slideIndex <= 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
    console.log("Slide index: " + slideIndex);
  }
}

// creo una funzione che mostra la nuova slide
function showNewSlide() {
  const allSlides = document.getElementsByClassName("slide");
  newSlide = allSlides[slideIndex];
}

// creo una funzione che da la classe active alla nuova slide mostrata
function addActiveClass() {
  newSlide.classList.add("active");
}
