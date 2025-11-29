// --- Sticky Header Logic ---
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll ke bawah
        header.classList.add('header-hidden');
    } else {
        // Scroll ke atas
        header.classList.remove('header-hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

// --- Dynamic Gallery Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');

    // Hanya jalankan jika container galeri ada di halaman ini
    if (galleryContainer) {
        fetch('gallery.json')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    const galleryItem = document.createElement('div');
                    galleryItem.classList.add('gallery-item');

                    galleryItem.innerHTML = `
                        <div class="gallery-item-image-container">
                            <img src="${item.image}" alt="${item.title}">
                            <div class="gallery-item-overlay">
                                <h3>${item.title}</h3>
                            </div>
                        </div>
                        <p>${item.description}</p>
                    `;
                    galleryContainer.appendChild(galleryItem);
                });
            })
            .catch(error => console.error('Gagal memuat data galeri:', error));
    }
});