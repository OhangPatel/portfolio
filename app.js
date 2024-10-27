
// Animate the position and opacity of the nameInfo and profilePhoto elements based on scroll position
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    const photo = document.getElementById("profilePhoto");
    const nameInfo = document.querySelector(".nameInfo");

    if (window.innerWidth > 700) {
        
        const photoDistanceFromCenter = Math.abs(photo.getBoundingClientRect().top + window.scrollY - scrollY - windowHeight / 2);
        photo.style.transform = `translateX(${scrollY * 0.2}px)`; // Only horizontal movement
        photo.style.opacity = 1 - Math.pow(photoDistanceFromCenter / (windowHeight * 1.2), 2);

        const nameInfoDistanceFromCenter = Math.abs(nameInfo.getBoundingClientRect().top + window.scrollY - scrollY - windowHeight / 2);
        nameInfo.style.transform = `translateX(${-scrollY * 0.2}px)`; // Only horizontal movement
        nameInfo.style.opacity = 1 - Math.pow(nameInfoDistanceFromCenter / (windowHeight * 1.2), 2);
    } else {
        const photoDistanceFromCenter = Math.abs(photo.getBoundingClientRect().top + window.scrollY - scrollY - windowHeight / 2);
        photo.style.transform = `translateY(${-scrollY * 0.3}px)`; // High-speed upward movement
        photo.style.opacity = 1 - Math.pow(photoDistanceFromCenter / (windowHeight * 1.2), 2);

        const nameInfoDistanceFromCenter = Math.abs(nameInfo.getBoundingClientRect().top + window.scrollY - scrollY - windowHeight / 2);
        nameInfo.style.transform = `translateY(${-scrollY * 0.3}px)`; // High-speed upward movement
        nameInfo.style.opacity = 1 - Math.pow(nameInfoDistanceFromCenter / (windowHeight * 1.2), 2);
    }
});


// Animate photo movement based on mouse position within the photo element
const photo = document.getElementById('profilePhoto');
photo.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY, target } = e;
  const { clientWidth, clientHeight } = target;
  
  const x = (offsetX / clientWidth) * 100;
  const y = (offsetY / clientHeight) * 100;

  const moveX = (20 - x) / 10; 
  const moveY = (20 - y) / 10;

  photo.style.transform = `translate(${moveX}px, ${moveY}px) scale(0.98)`; 
});

photo.addEventListener('mouseleave', () => {
  photo.style.transform = 'translate(0, 0) scale(1)'; 
});











