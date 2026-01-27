// ARRAY OF IMAGE SOURCES
const images = [
  "Images/mango.png",
  "Images/kale.png",
  "Images/Berry Variety.jpg",
  "Images/Root Veg.jpg",
];

// ADD VARIABLE TO TRACK CURRENT IMAGE
let currentIndex = 0;

// Open Lightbox with selected image function openLightbox()
function openLightbox(index) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  currentIndex = index; // STORE THE CURRENT IMAGE INDEX
  lightbox.style.display = "flex";
  lightboxImg.src = images[index];
}

// NAVIGATE TO NEXT/PREVIOUS IMAGE
function changeImage(direction) {
  currentIndex += direction;
 // LOOP BACK TO START IF AT THE END
 if (currentIndex >= images.length) {
  currentIndex = 0
 }
 // LOOP TO END IF AT BEGINNING
 if (currentIndex < 0) {
  currentIndex = images.length - 1;
 }
 // UPDATE THE DISPLAYED IMAGE
 const lightboxImg = document.getElementById("lightbox-img");
 lightboxImg.src = images[currentIndex]; 
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
