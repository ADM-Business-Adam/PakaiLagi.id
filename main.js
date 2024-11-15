// Menyimpan referensi elemen slider
const slider = document.querySelector('.product-slider');
const productItemWidth = document.querySelector('.product-item').offsetWidth;
const gap = 10; // Sama dengan gap CSS antara produk

// Menambahkan event listener untuk scroll horizontal dengan touchpad atau mouse scroll
slider.addEventListener('wheel', (event) => {
    if (event.deltaY !== 0) {
        event.preventDefault();
        slider.scrollBy({
            left: event.deltaY > 0 ? productItemWidth + gap : -(productItemWidth + gap),
            behavior: 'smooth'
        });
    }
});
// Ambil elemen hamburger dan nav list
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

// Tambahkan event listener untuk klik pada hamburger
hamburger.addEventListener('click', () => {
    // Toggle kelas "active" pada nav list
    navList.classList.toggle('active');
});

// Jika ingin nav list muncul saat hover
hamburger.addEventListener('mouseover', () => {
    navList.classList.add('active');
});

// Jika ingin nav list hilang saat mouse keluar
hamburger.addEventListener('mouseout', () => {
    navList.classList.remove('active');
});
