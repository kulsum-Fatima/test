const popupButton = document.getElementById('popup-button');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

popupButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
