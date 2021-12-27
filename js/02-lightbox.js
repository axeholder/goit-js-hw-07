import { galleryItems } from './gallery-items.js';
// Change code below this line


const container = document.querySelector(".gallery");

const markupGallery = createGalleryMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markupGallery);

container.addEventListener('click', onContainerClick);

function createGalleryMarkup (gallery) {
   return gallery
    .map (({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </div>`;
    })
    .join(""); 
};

new SimpleLightbox('.gallery__item a', {captionsData:'alt', captionDelay:'250'});

function onContainerClick (event) {
    if(!event.target.classList.contains("gallery__item")) {
        return;
    };
}; 


// kakogo to hera ne rabotaet, bydem rozbiratsa

// const imageContainer = document.querySelector('.gallery');

// const galleryMarkup = galleryItems.map(({ preview, original, description }) => 
//  `
//  <a class="gallery__item" href="${original}">
//  <img class="gallery__image" src="${preview}" alt="${description}" />
//  </a>
// `).join('');

// imageContainer.insertAdjacentHTML('beforeend', galleryMarkup);
// imageContainer.addEventListener('click', onContainerClick);


// new SimpleLightbox('.gallery__item a', {captionsData:'alt', captionDelay:'250'});

// function onContainerClick (event) {
//     if(!event.target.classList.contains("gallery__item")) {
//         return;
//     };
// };       
