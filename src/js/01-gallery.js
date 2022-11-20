import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const refs = {
  containerGalleryItemsMarkup: document.querySelector('.gallery'),
};

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
refs.containerGalleryItemsMarkup.insertAdjacentHTML(
  'beforeend',
  galleryItemsMarkup
);

function createGalleryItemsMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});
