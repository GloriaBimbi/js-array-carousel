// recupero gli elementi html che mi servono
slidesContainerEl = document.getElementById("slides-container");

// creo l'array di immagini
allSlides = ["01.webb", "02.webb", "03.webb", "04.webb", "05.webb"];
console.log(allSlides);

// creo un ciclo for con cui inserisco le immagini nell'html e a cui inserisco la classe active
let slidesHtml = "";
for (let i = 0; i < allSlides.lenght; i++) {
  const slide = allSlides[i];

  let activeClass = i == 0 ? "active" : "";

  slidesHtml += `<img src="./img/${slide}" class="slide ${activeClass}" alt="img ${i}" />`;
}

slidesContainerEl.innerHTML = slidesHtml;
