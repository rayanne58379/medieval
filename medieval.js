const images = ["fotos/banner1.webp", "fotos/banner22.webp"];
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % 
  images.length;
  document.getElementById("bannerImg").src = images[currentIndex];
}
// Troca de imagem a cada 3 segundos (3000 milissegundos)
setInterval(changeImage, 7000)

