/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imgNames = ['mountains', 'computer', 'trees', 'turntable'];
document.querySelector('.carousel-container').append(Carousel())

const carouselImages = document.querySelectorAll('.carousel img');
let imgIndex = 0;
carouselImages[imgIndex].style.display = 'block';

document.querySelector('.left-button').addEventListener('click', () => {
  if(imgIndex === 0){
    imgIndex = imgNames.length-1;
    carouselImages[0].style.display = 'none';
    carouselImages[imgIndex].style.display = 'block';
  }else{
    imgIndex--;
    carouselImages[imgIndex+1].style.display = 'none';
    carouselImages[imgIndex].style.display = 'block';
  }
})
document.querySelector('.right-button').addEventListener('click', () => {
  if(imgIndex === imgNames.length-1){
    imgIndex = 0;
    carouselImages[imgNames.length-1].style.display = 'none';
    carouselImages[imgIndex].style.display = 'block';
  }else{
    imgIndex++;
    carouselImages[imgIndex-1].style.display = 'none';
    carouselImages[imgIndex].style.display = 'block';
  }
})

function Carousel(){
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const rightButton = document.createElement('div');

  imgNames.forEach( item => {
    const img = document.createElement('img');
    carousel.append(img);
    img.src = `../../assets/carousel/${item}.jpeg`
  })

  carousel.append(leftButton);
  carousel.append(rightButton);

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  leftButton.textContent = '<';
  rightButton.classList.add('right-button');
  rightButton.textContent = '>';
  carousel.style.zIndex = '-1'

  return carousel;
}