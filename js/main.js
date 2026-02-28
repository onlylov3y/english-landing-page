/**
 * Main JavaScript for The Thinker Landing Page
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav');

    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Sticky Header
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Search Toggle
    const searchBtn = document.getElementById('search-btn');
    const closeSearch = document.getElementById('close-search');
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');

    if (searchBtn && closeSearch && searchOverlay) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchOverlay.classList.add('active');
            setTimeout(() => {
                if (searchInput) searchInput.focus();
            }, 300);
        });

        closeSearch.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });
    }

    // Mobile Dropdown Toggle
    const dropdownToggles = document.querySelectorAll('.has-dropdown > .nav-link');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                const parent = toggle.parentElement;
                parent.classList.toggle('open');
            }
        });
    });


    // Program Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const programCards = document.querySelectorAll('.program-card');

    if (filterBtns.length > 0 && programCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                programCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Search Functionality
    const searchForm = document.querySelector('.search-form');
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput.value.trim().toLowerCase();
            if (query) {
                // Simple search highlighting/filtering on programs
                programCards.forEach(card => {
                    const text = card.textContent.toLowerCase();
                    if (text.includes(query)) {
                        card.style.display = 'flex';
                        card.style.opacity = '1';
                        // Switch filter to 'All'
                        filterBtns.forEach(b => b.classList.remove('active'));
                        document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
                    } else {
                        card.style.display = 'none';
                    }
                });

                // Scroll to programs section
                const programsSection = document.getElementById('programs');
                if (programsSection) {
                    programsSection.scrollIntoView({ behavior: 'smooth' });
                }

                // Close overlay
                searchOverlay.classList.remove('active');
            }
        });
    }

    // Form Submission Handling
    const consultationForm = document.getElementById('hero-consultation-form');
    if (consultationForm) {
        consultationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.');
            consultationForm.reset();
        });
    }

    // Close Mobile Menu on Link Click
    const navLinks = document.querySelectorAll('.nav-link:not(.has-dropdown > a)');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --- Bi-lingual Translation Logic ---

    // Define current language
    let currentLang = localStorage.getItem('appLang') || 'vi';

    // Elements to translate
    const translatableElements = document.querySelectorAll('[data-i18n]');
    const translatablePlaceholders = document.querySelectorAll('[data-i18n-placeholder]');
    const translatableOptgroups = document.querySelectorAll('[data-i18n-label]');

    // Toggle button elements
    const langToggleBtn = document.getElementById('lang-toggle');
    const langEnSpan = document.querySelector('.lang-en');
    const langViSpan = document.querySelector('.lang-vi');

    // Function to apply translations
    const setLanguage = (lang) => {
        if (!translations[lang]) return;

        // Update text nodes
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key]; // Using innerHTML to support span.highlight br etc
            }
        });

        // Update placeholders
        translatablePlaceholders.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });

        // Update optgroup labels
        translatableOptgroups.forEach(el => {
            const key = el.getAttribute('data-i18n-label');
            if (translations[lang][key]) {
                el.setAttribute('label', translations[lang][key]);
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update toggle styles
        if (lang === 'en') {
            langEnSpan.classList.add('highlight');
            langViSpan.classList.remove('highlight');
        } else {
            langViSpan.classList.add('highlight');
            langEnSpan.classList.remove('highlight');
        }

        // Save preference
        localStorage.setItem('appLang', lang);
        currentLang = lang;
    };

    // Initialize Language Setting
    setLanguage(currentLang);

    // Toggle event listener
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'vi' ? 'en' : 'vi';
            setLanguage(newLang);
        });
    }

});
