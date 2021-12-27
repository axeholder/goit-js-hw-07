import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => 
 `
 <a class="gallery__item" href="${original}">
 <img class="gallery__image" src="${preview}" alt="${description}" />
 </a>
`).join('');

imageContainer.insertAdjacentHTML('beforeend', galleryMarkup);
imageContainer.addEventListener('click', onContainerClick);


new SimpleLightbox('.gallery__item a', {captionsData:'alt', captionDelay:'250'});

function onContainerClick (event) {
    if(!event.target.classList.contains("gallery__item")) {
        return;
    };
};       
