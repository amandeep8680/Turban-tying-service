
src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"


const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const messageBox = document.getElementById('confirmationMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => {
            if (response.ok) {
                form.classList.add("disabled-form");
                form.reset();
                submitBtn.disabled = true;
                messageBox.style.display = 'block';
            } else {
                messageBox.style.display = 'block';
                messageBox.textContent = '❌ Something went wrong. Please try again.';
                messageBox.style.backgroundColor = '#ffe6e6';
                messageBox.style.color = '#721c24';
                messageBox.style.borderLeft = '5px solid #dc3545';
            }
        })
        .catch(error => {
            messageBox.style.display = 'block';
            messageBox.textContent = '❌ Error: ' + error.message;
            messageBox.style.backgroundColor = '#ffe6e6';
            messageBox.style.color = '#721c24';
            messageBox.style.borderLeft = '5px solid #dc3545';
        });
});


document.getElementById("contactForm").addEventListener("submit", function (e) {
    const phoneValue = phoneInput.value.replace(/\D/g, "");
    if (phoneValue.length !== 10) {
        alert("Please enter a valid 10-digit phone number.");
        e.preventDefault();
    }
});


const phoneInput = document.getElementById("phone");

// Block non-numeric key presses
phoneInput.addEventListener("keydown", function (e) {
    const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"
    ];

    if (
        allowedKeys.includes(e.key) ||
        (e.ctrlKey && ["a", "c", "v", "x"].includes(e.key.toLowerCase()))
    ) {
        return; // allow control keys
    }

    if (!/\d/.test(e.key)) {
        e.preventDefault(); // block anything not a digit
    }
});

// Auto-format input on typing
phoneInput.addEventListener("input", function (e) {
    let input = e.target.value.replace(/\D/g, "").substring(0, 10); // Only digits, max 10
    const area = input.slice(0, 3);
    const mid = input.slice(3, 6);
    const last = input.slice(6, 10);

    if (input.length > 6) {
        e.target.value = `(${area}) ${mid}-${last}`;
    } else if (input.length > 3) {
        e.target.value = `(${area}) ${mid}`;
    } else if (input.length > 0) {
        e.target.value = `(${area}`;
    }
});


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Toggle menu
menuBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent immediate close
    navLinks.classList.toggle("active");
});

// Close menu on outside click
document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove("active");
    }
});

// Close on clicking any nav link
const links = navLinks.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item, index) => {
    const button = item.querySelector('.faq-question');

    button.addEventListener('click', () => {
        faqItems.forEach((i, idx) => {
            if (idx !== index) i.classList.remove('active');
        });
        item.classList.toggle('active');
    });
});





const flipSwiper = new Swiper(".flip-swiper", {
    effect: "flip",
    grabCursor: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
});


const testimonialSwiper = new Swiper(".testimonialSwiper", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
    },
    pagination: {
        el: ".testimonial-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});






// fade in
 const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -30px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });





 