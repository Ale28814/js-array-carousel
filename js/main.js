/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// Titoli
const titleCollection = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];
//DECLARATION
const imagesRef = document.querySelector('.images');
const ithumbsRef = document.querySelector('.thumbs');

let activeImage = 1;

for (let i = 0; i < imageCollection.length; i++) {

    //IMAGES
    imagesRef.innerHTML += `<div class="image-container">
    <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
    <div class="text">
        <h3>${titleCollection[i]}</h3>
        <p>${textCollection[i]}</p>
    </div>
    </div>`;

    //THUMB
    ithumbsRef.innerHTML += `<div class="thumb">
    <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
    </div>`;
}

console.log(document.getElementsByClassName('image-container') );
document.getElementsByClassName('image-container')[activeImage].classList.add('active');

console.log(document.getElementsByClassName('thumb') );
document.getElementsByClassName('thumb')[activeImage].classList.add('active');

//PROX IMG
const next = document.querySelector('.next');

next.addEventListener('click', function() {
    //ACTIVE IMG
    if(activeImage === imageCollection.length - 1) {
        activeImage = 0;
    } else {
        activeImage++;
    }

    //SET ACTIVE IMG
    document.querySelector('.image-container.active').classList.remove('active');
    //NEXT ACTIVE IMG
    document.getElementsByClassName('image-container')[activeImage].classList.add('active');
    //SET THUMB
    document.querySelector('.thumb.active').classList.remove('active');

    document.getElementsByClassName('thumb')[activeImage].classList.add('active');
})

//PREVIOUS
const prev = document.querySelector('.prev');

prev.addEventListener('click', function() {
    //ACTIVE IMG
    if(activeImage === imageCollection.length - 5) {
        activeImage = 4;
    } else {
        activeImage--;
    }

    //SET ACTIVE IMG
    document.querySelector('.image-container.active').classList.remove('active');
    //NEXT ACTIVE IMG
    document.getElementsByClassName('image-container')[activeImage].classList.add('active');
    //SET THUMB
    document.querySelector('.thumb.active').classList.remove('active');

    document.getElementsByClassName('thumb')[activeImage].classList.add('active');
})