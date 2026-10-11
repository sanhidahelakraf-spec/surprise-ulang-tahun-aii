const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicLabel = document.getElementById("musicLabel");
const musicIcon = document.getElementById("musicIcon");
const hearts = document.getElementById("hearts");

// Musik baru bisa terdengar setelah pengunjung menekan tombol, sesuai aturan browser.
musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicBtn.classList.add("playing");
      musicLabel.textContent = "Musik menyala";
      musicIcon.textContent = "♫";
    } catch (error) {
      musicLabel.textContent = "Tambahkan music.mp3";
      alert("Tambahkan file musik bernama music.mp3 ke folder website, lalu coba lagi ya.");
    }
  } else {
    music.pause();
    musicBtn.classList.remove("playing");
    musicLabel.textContent = "Putar musik";
    musicIcon.textContent = "♫";
  }
});

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
  burstHearts(14);
});

const envelope = document.querySelector(".envelope");
const letter = document.getElementById("loveLetter");
const openLetterBtn = document.getElementById("openLetterBtn");
openLetterBtn.addEventListener("click", () => {
  const opening = letter.classList.contains("hidden");
  letter.classList.toggle("hidden");
  envelope.classList.toggle("open", opening);
  openLetterBtn.textContent = opening ? "Tutup pesan ♡" : "Buka pesan 💌";
  if (opening) {
    burstHearts(24);
    setTimeout(() => letter.scrollIntoView({ behavior: "smooth", block: "center" }), 200);
  }
});

const wishResult = document.getElementById("wishResult");
document.querySelectorAll(".wish-card").forEach((card) => {
  card.addEventListener("click", () => {
    wishResult.textContent = card.dataset.wish;
    wishResult.classList.remove("hidden");
    burstHearts(8);
  });
});

const modal = document.getElementById("wishModal");
const modalText = document.getElementById("modalText");
function closeModal() { modal.classList.add("hidden"); }
document.querySelectorAll(".wish-card").forEach((card) => {
  card.addEventListener("dblclick", () => {
    modalText.textContent = card.dataset.wish;
    modal.classList.remove("hidden");
  });
});
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("modalOkay").addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

document.getElementById("wishBtn").addEventListener("click", () => {
  document.getElementById("finalMessage").classList.remove("hidden");
  document.getElementById("wishBtn").textContent = "Harapannya sudah disimpan di hati ♡";
  document.getElementById("wishBtn").disabled = true;
  burstHearts(36);
  setTimeout(() => document.getElementById("finalMessage").scrollIntoView({ behavior: "smooth", block: "center" }), 150);
});

function burstHearts(count) {
  const symbols = ["♥", "♡", "✦", "💗"];
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${12 + Math.random() * 18}px`;
    heart.style.animationDuration = `${3 + Math.random() * 4}s`;
    heart.style.animationDelay = `${Math.random() * 0.8}s`;
    hearts.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}

// Hati kecil bergerak secara berkala.
setInterval(() => {
  if (document.hidden) return;
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${10 + Math.random() * 12}px`;
  heart.style.animationDuration = `${6 + Math.random() * 5}s`;
  hearts.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}, 1200);


// Album foto: klik kartu untuk memperbesar foto dan gunakan panah untuk berpindah.
const photoCards = [...document.querySelectorAll(".photo-card")];
const photoLightbox = document.getElementById("photoLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
let currentPhotoIndex = 0;

function showPhoto(index) {
  currentPhotoIndex = (index + photoCards.length) % photoCards.length;
  const card = photoCards[currentPhotoIndex];
  lightboxImage.src = card.dataset.photo;
  lightboxCaption.textContent = card.dataset.caption;
  photoLightbox.classList.remove("hidden");
}
function closePhoto() {
  photoLightbox.classList.add("hidden");
  lightboxImage.src = "";
}
photoCards.forEach((card, index) => card.addEventListener("click", () => showPhoto(index)));
document.getElementById("lightboxClose").addEventListener("click", closePhoto);
document.getElementById("photoPrev").addEventListener("click", () => showPhoto(currentPhotoIndex - 1));
document.getElementById("photoNext").addEventListener("click", () => showPhoto(currentPhotoIndex + 1));
photoLightbox.addEventListener("click", (event) => {
  if (event.target === photoLightbox) closePhoto();
});
document.addEventListener("keydown", (event) => {
  if (photoLightbox.classList.contains("hidden")) return;
  if (event.key === "Escape") closePhoto();
  if (event.key === "ArrowLeft") showPhoto(currentPhotoIndex - 1);
  if (event.key === "ArrowRight") showPhoto(currentPhotoIndex + 1);
});
