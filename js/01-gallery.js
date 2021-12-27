import { galleryItems } from './gallery-items.js';
// Change code below this line

const instance = basicLightbox.create(`
    <div class="modal">
         <img src="">
    </div>`
);

const imageContainer = document.querySelector('.gallery');
const modal = instance.element().querySelector('img');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => 
     `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`).join('');

imageContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function onOpenModal(evt) {
    evt.preventDefault()
    if (evt.currentTarget === evt.target) {
        return;
    };

    modal.src = evt.target.dataset.source;
    document.addEventListener('keydown', onEscKeyPress);

    instance.show();
};

function onEscKeyPress(evt) {
    if (evt.code === 'Escape') {
    document.removeEventListener('keydown', onEscKeyPress);
    instance.close()
    };
};

window.addEventListener('click', onEscKeyPress);
imageContainer.addEventListener('click', onOpenModal);
