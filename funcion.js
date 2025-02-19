let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function updateCarousel() {
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;

    document.getElementById('prev').disabled = currentIndex === 0;
    document.getElementById('next').disabled = currentIndex === totalImages - 1;
    carouselImages.style.width = `${totalImages * 100}%`;

    images.forEach(img => {
        img.style.width = `${100 / totalImages}%`;
    });

    
    const visibleImage = images[currentIndex];
    const carousel = document.querySelector('.carousel');

    
    if (currentIndex === 1) {
        carousel.style.width = `${visibleImage.naturalWidth}px`;
        carousel.style.height = `${visibleImage.naturalHeight}px`;
    } else {
        carousel.style.width = '100%';  
        carousel.style.height = `${visibleImage.clientHeight}px`;
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

function nextImage() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
        updateCarousel();
    }
}

document.getElementById('prev').addEventListener('click', prevImage);
document.getElementById('next').addEventListener('click', nextImage);

window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);

updateCarousel();