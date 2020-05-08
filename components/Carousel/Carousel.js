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

const carouselContainer = document.querySelector('.carousel-container')


const newCarousel = () => {

  /////////////////////////////////////////////////
  const mySlidesFadeOne = document.createElement('div')
  // const numbertextOne = document.createElement('div')
  const imgOne = document.createElement('img')
  const textOne = document.createElement('div')

  const mySlidesFadeTwo = document.createElement('div')
  // const numbertextTwo = document.createElement('div')
  const imgTwo = document.createElement('img')
  const textTwo = document.createElement('div')

  const mySlidesFadeThree = document.createElement('div')
  // const numbertextThree = document.createElement('div')
  const imgThree = document.createElement('img')
  const textThree = document.createElement('div')

  const mySlidesFadeFour = document.createElement('div')
  // const numbertextFour = document.createElement('div')
  const imgFour = document.createElement('img')
  const textFour = document.createElement('div')
  /////////////////////////////////////////////////////

  const prevButton = document.createElement('button')
  const nextButton = document.createElement('button')
  ///////////////////////////////////////////////////

  // const dotDiv = document.createElement('div')
  // const dotOne = document.createElement('span')
  // const dotTwo = document.createElement('span')
  // const dotThree = document.createElement('span')



  //////////////////////////////////////////////////
  carouselContainer.appendChild(mySlidesFadeOne)
  // mySlidesFadeOne.appendChild(numbertextOne)
  mySlidesFadeOne.appendChild(imgOne)
  mySlidesFadeOne.appendChild(textOne)

  carouselContainer.appendChild(mySlidesFadeTwo)
  // mySlidesFadeTwo.appendChild(numbertextTwo)
  mySlidesFadeTwo.appendChild(imgTwo)
  mySlidesFadeTwo.appendChild(textTwo)

  carouselContainer.appendChild(mySlidesFadeThree)
  // mySlidesFadeThree.appendChild(numbertextThree)
  mySlidesFadeThree.appendChild(imgThree)
  mySlidesFadeThree.appendChild(textThree)

  carouselContainer.appendChild(mySlidesFadeFour)
  // mySlidesFadeFour.appendChild(numbertextOne)
  mySlidesFadeFour.appendChild(imgFour)
  mySlidesFadeFour.appendChild(textFour)
  /////////////////////////////////////////////////////
  carouselContainer.appendChild(prevButton)
  carouselContainer.appendChild(nextButton)
  /////////////////////////////////////////////////////
  // carouselContainer.append(dotDiv)
  // dotDiv.appendChild(dotOne)
  // dotDiv.appendChild(dotTwo)
  // dotDiv.appendChild(dotThree)
  /////////////////////////////////////////////////////


  mySlidesFadeOne.classList.add('mySlides', 'fade')
  // numbertextOne.classList.add('numbertext')
  textOne.classList.add('text')

  mySlidesFadeTwo.classList.add('mySlides', 'fade')
  // numbertextTwo.classList.add('numbertext')
  textTwo.classList.add('text')

  mySlidesFadeThree.classList.add('mySlides', 'fade')
  // numbertextThree.classList.add('numbertext')
  textThree.classList.add('text')

  mySlidesFadeFour.classList.add('mySlides', 'fade')
  // numbertextFour.classList.add('numbertext')
  textFour.classList.add('text')
  /////////////////////////////////////////////////////

  prevButton.classList.add('prev')
  nextButton.classList.add('next')
  ////////////////////////////////////////////////////

  // dotOne.classList.add('dot')
  // dotTwo.classList.add('dot')
  // dotThree.classList.add('dot')
  ////////////////////////////////////////////////////

  // numbertextOne.textContent = '1 / 4'
  imgOne.src = './assets/carousel/mountains.jpeg'
  textOne.textContent = 'Hi I am the mountains'
  textOne.style.textAlign = 'center'

  // numbertextTwo.textContent = '2 / 4'
  imgTwo.src = './assets/carousel/computer.jpeg'
  textTwo.textContent = 'Hi I am computer man'
  textOne.style.textAlign = 'center'

  // numbertextThree.textContent = '3 / 4'
  imgThree.src = './assets/carousel/trees.jpeg'
  textThree.textContent = 'Hi I am a forest'
  textOne.style.textAlign = 'center'

  // numbertextFour.textContent = '4 / 4'
  imgFour.src = './assets/carousel/turntable.jpeg'
  textFour.textContent = 'Hi I am a record player'
  textOne.style.textAlign = 'center'
  //////////////////////////////////////////////////////
  prevButton.addEventListener('click', event => {
    plusSlides(-1)
  })

  nextButton.addEventListener('click', event => {
    plusSlides(1)
  })

  prevButton.textContent = 'previous'
  nextButton.textContent = 'next'

  /////////////////////////////////////////////////////

  // dotDiv.style.textAlign = 'center'

  // dotOne.addEventListener('click', event => {
  //   currentSlide(1)
  // })

  // dotTwo.addEventListener('click', event => {
  //   currentSlide(2)
  // })

  // dotThree.addEventListener('click', event => {
  //   currentSlide(3)
  // })



}

newCarousel()



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}





