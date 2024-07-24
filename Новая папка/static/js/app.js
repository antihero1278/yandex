const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;

function show(index){
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;

            if(index < 0) {
                index = images.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next'))
        {
            let index = imageIndex + 1;
            if (index >= images.length){
                index = 0;
            }

            show(index);
        }
    })
})

show(imageIndex);

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 4000;
 
function changeSlide() {
  slides[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.opacity = 1;
}
 
setInterval(changeSlide, slideInterval);

