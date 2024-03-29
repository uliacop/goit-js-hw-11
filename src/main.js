import { fetchImg } from './js/pixabay-api';
import { renderImg } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
export const galleryList = document.querySelector('.gallery');
export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const preloader = document.querySelector('.loader');
const showLoader = () => {
  preloader.classList.remove('hidden');
};
const hideLoader = () => {
  preloader.classList.add('hidden');
};

form.addEventListener('submit', sendForm);

function sendForm(e) {
  e.preventDefault();
  galleryList.innerHTML = '';

  const inputValue = form.elements.search.value.trim();
  if (inputValue !== '') {
    showLoader();
    fetchImg(inputValue)
      .then(photos => {
        renderImg(photos.hits);
        hideLoader();
        form.reset();
      })
      .catch(error => {
        console.error(error);
        hideLoader();
        iziToast.error({
          message: `Sorry, an error occurred while loading. Please try again!`,
          position: 'topRight',
        });
      });
  } else {
    iziToast.error({
      message: `Please complete the field!`,
      position: 'topRight',
    });
  }
}
