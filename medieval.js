const images = ["banner1.webp", "banner22.webp"];
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % 
  images.length;
  document.getElementById("bannerImg").src = images[currentIndex];
}
setInterval(changeImage, 7000)

