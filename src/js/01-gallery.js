// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const ulGallery = document.querySelector('.gallery');
console.log(ulGallery);

function createGallery(elements) {
  return elements
    .map(
      el => `
  <li class='gallery__item>
    <a class = 'gallery__link' href ='${el.original}'>
      <img
      class='gallery__image'
        src='${el.preview}'        
        alt='${el.description}'
      />
    </a>
  </li> 
  `
    )
    .join('');
}

const liGallery = createGallery(galleryItems);

ulGallery.innerHTML = liGallery;

const images = document.querySelectorAll('img');
const altValues = [];

images.forEach(image => {
  altValues.push(image.alt);
});

console.log(altValues);

let lightbox = new SimpleLightbox({
  elements: document.querySelectorAll('li'),
  captions: altValues,
  captionDelay: 250,
});
