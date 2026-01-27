// ARRAY OF IMAGE SOURCES
const images = [
  "Images/mango.png",
  "Images/kale.png",
  "Images/Berry Variety.jpg",
  "Images/Root Veg.jpg",
];

// Open Lightbox with selected image function openLightbox()
function openLightbox(index) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  lightboxImg.src = images[index];
}

// CLOSE LIGHTBOX
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

// CLOSE LIGHTBOX WHEN CLICKING OUTSIDE THE IMAGE
window.onclick = function (event) {
  const lightbox = this.document.getElementById("lightbox");
  if (event.target === lightbox) {
    closeLightbox();
  }
};
