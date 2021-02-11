const carouselContainer = document.querySelector('.carousel-container');
const listImageArea = carouselContainer.querySelector('.next-list"');
const listOfImages = listImageArea.querySelectorAll('img');
const currentImage = carouselContainer.querySelector('.current-image');
const arrowLeft = carouselContainer.querySelector('.arrow-left');
const arrowRight = carouselContainer.querySelector('.arrow-right');

function styleList() {
  if (listImageArea.scrollWidth === listImageArea.offsetWidth) {
    listImageArea.style.justifyContent = 'center';
  } else {
    listImageArea.style.justifyContent = 'flex-start';
  }
}

function goToRight() {
  let current = listImageArea.querySelector('.current-image-list');
  current.parentElement.nextElementSibling.children[0].classList.add(
    'current-image-list'
  );
  current.classList.remove('current-image-list');
  current = listImageArea.querySelector('.current-image-list');
  listImageArea.scrollLeft = current.offsetLeft;
  currentImage.attributes.src.value = current.attributes.src.value;
  currentImage.classList.add('slideInFromRight');
  setTimeout(() => {
    currentImage.classList.remove('slideInFromRight');
  }, 500);
}

function goToLeft() {
  let current = listImageArea.querySelector('.current-image-list');
  current.parentElement.previousElementSibling.children[0].classList.add(
    'current-image-list'
  );
  current.classList.remove('current-image-list');
  current = listImageArea.querySelector('.current-image-list');
  listImageArea.scrollLeft = current.offsetLeft;
  currentImage.attributes.src.value = current.attributes.src.value;
  currentImage.classList.add('slideInFromLeft');
  setTimeout(() => {
    currentImage.classList.remove('slideInFromLeft');
  }, 500);
}

function changeCurrentImage() {
  currentImage.classList.add('fadeIn');
  setTimeout(() => {
    currentImage.classList.remove('fadeIn');
  }, 500);
  currentImage.attributes.src.value = this.attributes.src.value;
  listOfImages.forEach((image) => {
    image.classList.remove('current-image-list');
  });
  this.classList.add('current-image-list');
}

styleList();

arrowLeft.addEventListener('click', goToLeft);
arrowRight.addEventListener('click', goToRight);

window.addEventListener('resize', () => {
  styleList();
});

listOfImages.forEach((image) => {
  image.addEventListener('click', changeCurrentImage);
});