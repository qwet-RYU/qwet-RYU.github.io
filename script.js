// Menunggu DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  // Ambil semua link mobile dengan ID
  const mobileLinks = [
    document.getElementById('about-link'),
    document.getElementById('it-link'),
    document.getElementById('arab-link'),
    document.getElementById('tahfidz-link'),
    document.getElementById('susursungai-link'),
    document.getElementById('media-link')
  ];

  // Tambahkan event listener pada setiap link
  mobileLinks.forEach(link => {
    if (link) {
      link.addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
          mobileMenu.hidden = true;
        }
      });
    }
  });
});

// gambar carousel
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('carouselExampleIndicators');
  const carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 5000, // 5 detik
    ride: 'carousel'
  });
});


// teks
const texts = [
  "seorang murid yang terus berusaha <br>untuk menjadi lebih baik dan berguna demi masa depan,<br>silahkan lihat-lihat apa yang ana lakukan di<br>SMA IT HSI BOARDING SCHOOL",
  "a diligent student that always attempt<br>to become more better and helpful for future,<br>feel free to look out what i'm doing on<br>SMA IT HSI BOARDING SCHOOL",
  "طَالِبٌ مُجْتَهِدٌ يَسْعَى دَائِمًا<br>,لِأَنْ يَكُونَ أَفْضَلَ وَأَكْثَرَ فَائِدَةً لِلْمُسْتَقْبَلِ، <br>تَفَضَّلْ إِلْقَاءُ نَظْرَةٍ عَلَى مَا أَفْعَلُهُ فِي<br>الْمَدْرَسَةِ الثَّانِوِيَّةِ حَسَّءِ مَدْرَسَةٍ دَاخِلِيَّةٍ"
];

let currentIndex = 0;
const textElement = document.getElementById('changing-text');

function changeText() {
  textElement.classList.add('fade-out');
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    textElement.innerHTML = texts[currentIndex]; // Gunakan innerHTML untuk mendukung <br>
    textElement.classList.remove('fade-out');
    textElement.classList.add('fade-in');
    setTimeout(() => {
      textElement.classList.remove('fade-in');
    }, 500);
  }, 500);
}

setInterval(changeText, 5000);

// opsi fullscreen buat poster
function openFullscreen(img) {
  const modal = document.getElementById('fullscreenModal');
  const fullImg = document.getElementById('fullImg');
  fullImg.src = img.src;
  modal.style.display = 'flex';
}
// closeFullscreen
function closeFullscreen() {
  document.getElementById('fullscreenModal').style.display = 'none';
}
