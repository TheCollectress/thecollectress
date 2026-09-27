const descriptions = [
  'Black sleeveless dress with white trim and a front pocket',
  'Yellow two-piece outfit with an orange and pink circular motif',
  'Black open-knit dress with a fringed hem',
  'Yellow halterneck swimsuit with a pineapple motif',
  'Black top with burgundy feathered shoulders and a colourful graphic',
  'Cream printed tank top with blue graphics',
  'Pink floral dress with a cut-out waist',
  'Black off-the-shoulder lace dress',
  'Green and black patterned top with flared sleeves'
];
let current = 0;
const photo = document.querySelector('#photo');
function move(direction) {
  current = (current + direction + descriptions.length) % descriptions.length;
  photo.src = `assets/${current + 1}.png`;
  photo.alt = descriptions[current];
}
document.querySelector('.previous').addEventListener('click', () => move(-1));
document.querySelector('.next').addEventListener('click', () => move(1));
document.querySelector('.carousel').addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    move(event.key === 'ArrowRight' ? 1 : -1);
  }
});

document.querySelector('#copyright-year').textContent = new Date().getFullYear();

// Discourage saving images through the context menu or dragging.
document.addEventListener('contextmenu', event => {
  if (event.target instanceof Element && event.target.closest('img')) {
    event.preventDefault();
  }
});
document.addEventListener('dragstart', event => {
  if (event.target instanceof Element && event.target.closest('img')) {
    event.preventDefault();
  }
});
document.querySelectorAll('img').forEach(img => {
  img.draggable = false;
});
