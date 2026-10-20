/* =========================================================
   THE EMBER TABLE — WEBSITE INTERACTIONS
   ========================================================= */


/* =========================
   SCROLL REVEAL
   ========================= */

const revealElements = document.querySelectorAll(
    '.section-heading, .about-content, .about-image, .menu-card, .gallery-item, .experience-content, .reservation-content, .reservation-form, .contact-grid'
);

revealElements.forEach((element) => {
    element.classList.add('reveal');
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});
/* =========================
   WHATSAPP RESERVATION
   ========================= */

const reservationForm =
    document.getElementById('reservationForm');

reservationForm.addEventListener('submit', function (event) {

    event.preventDefault();

    const name =
        document.getElementById('name').value.trim();

    const phone =
        document.getElementById('phone').value.trim();

    const date =
        document.getElementById('date').value;

    const guests =
        document.getElementById('guests').value;

    if (!name || !phone || !date) {

        alert('Please fill in all required details.');

        return;

    }

    const message =
        `Hello The Ember Table,%0A%0A` +
        `I would like to request a table reservation.%0A%0A` +
        `Name: ${name}%0A` +
        `Phone: ${phone}%0A` +
        `Date: ${date}%0A` +
        `Guests: ${guests}`;

    const whatsappNumber = '919876543210';

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');

    reservationForm.reset();

});




/* =========================
   CURRENT YEAR
   ========================= */

const copyright =
    document.querySelector('.copyright');

if (copyright) {

    const currentYear =
        new Date().getFullYear();

    copyright.innerHTML =
        `© ${currentYear} The Ember Table. All rights reserved.`;

}


/* =========================
   HEADER SHADOW ON SCROLL
   ========================= */

const header =
    document.querySelector('.header');


window.addEventListener('scroll', () => {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            '0 8px 30px rgba(0,0,0,0.08)';

    } else {

        header.style.boxShadow = 'none';

    }

});
/* =========================
   MOBILE MENU
   ========================= */

const menuToggle =
    document.getElementById('menuToggle');

const navbar =
    document.querySelector('.navbar');


menuToggle.addEventListener('click', () => {

    navbar.classList.toggle('active');

});


const navLinks =
    document.querySelectorAll('.navbar a');


navLinks.forEach((link) => {

    link.addEventListener('click', () => {

        navbar.classList.remove('active');

    });

});
/* =========================
   GALLERY LIGHTBOX
   ========================= */

const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

galleryItems.forEach((item) => {

    const openLightbox = () => {

        const image = item.querySelector('img');

        if (!image) return;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add('active');

    };

    item.addEventListener('click', openLightbox);

    item.addEventListener('keydown', (event) => {

        if (event.key === 'Enter' || event.key === ' ') {

            event.preventDefault();
            openLightbox();

        }

    });

});

lightboxClose.addEventListener('click', () => {

    lightbox.classList.remove('active');

    lightboxImage.src = '';

});


lightbox.addEventListener('click', (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove('active');

        lightboxImage.src = '';

    }

});


document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape') {

        lightbox.classList.remove('active');

        lightboxImage.src = '';

    }

});/* =========================
   MENU CATEGORY FILTER
   ========================= */

const categoryButtons =
    document.querySelectorAll('.category-btn');

const menuCards =
    document.querySelectorAll('.menu-card');

categoryButtons.forEach((button) => {

    button.addEventListener('click', () => {

        const selectedCategory =
            button.getAttribute('data-category');

        categoryButtons.forEach((btn) => {
            btn.classList.remove('active');
        });

        button.classList.add('active');

        menuCards.forEach((card) => {

            const cardCategory =
                card.getAttribute('data-category');

            if (
                selectedCategory === 'all' ||
                cardCategory === selectedCategory
            ) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }

        });

    });

});