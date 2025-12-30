import { GoogleGenAI } from "@google/genai";

// --- Data for the portfolio ---

const portfolioItems = [
    {
        id: 'proj-catharsis',
        title: 'Catharsis',
        category: 'Album Cover',
        coverImage: 'images/cover catharsis.png',
        projectBrief: 'Album cover design and promotional materials for an artist\'s new release, "Catharsis". The project aimed to capture a powerful, transformative, and visually striking theme.',
        process: [
            { video: 'images/video out now.mp4', text: 'Promotional video announcing the release of the new album.' },
            { image: 'images/cover catharsis v2.png', text: 'An alternate version of the cover art, exploring a different color palette and composition.' },
            { image: 'images/catharsis verso.png', text: 'The back cover (verso) design, maintaining brand consistency while providing tracklist information.' },
            { image: 'images/cover catharsis.png', text: 'The final front cover artwork, which is also used in the 3D carousel.' }
        ]
    },
    {
        id: 'proj-match-1',
        title: 'Al Ahly vs Inter Miami',
        category: 'Poster Design',
        coverImage: 'images/ahly vs miami.png',
        projectBrief: 'Promotional match day poster for a fictional friendly between Al Ahly and Inter Miami.',
        process: [
            { image: 'images/ahly vs miami.png', text: 'The final poster design, using dynamic imagery and bold typography to create excitement for the event.' }
        ]
    },
     {
        id: 'proj-match-2',
        title: 'Man City vs Wydad AC',
        category: 'Poster Design',
        coverImage: 'images/man city vs wydad.png',
        projectBrief: 'A poster concept for a Club World Cup match featuring Manchester City and Wydad AC.',
        process: [
            { image: 'images/man city vs wydad.png', text: 'The design emphasizes the clash of champions with high-contrast visuals and team branding.' }
        ]
    },
    {
        id: 'proj-f1-1',
        title: 'Norris at Baku 2025',
        category: 'Poster Design',
        coverImage: 'images/norris baku 2025.png',
        projectBrief: 'A futuristic poster celebrating Lando Norris for the 2025 Azerbaijan Grand Prix in Baku.',
        process: [
            { image: 'images/norris baku 2025.png', text: 'The artwork combines elements of speed, technology, and the iconic Baku city circuit.' }
        ]
    },
    {
        id: 'proj-match-3',
        title: 'EST vs Flamengo',
        category: 'Poster Design',
        coverImage: 'images/taraji vs flamengo.png',
        projectBrief: 'Match day poster concept for a competitive clash between Espérance Sportive de Tunis and Flamengo.',
        process: [
            { image: 'images/taraji vs flamengo.png', text: 'The design uses fiery colors and dynamic player poses to represent the intensity of the match.' }
        ]
    },
    {
        id: 'proj-fight-1',
        title: 'Zlal vs Emmett',
        category: 'Poster Design',
        coverImage: 'images/zallal vs emmett.png',
        projectBrief: 'Fight night poster for a fictional martial arts bout between two formidable opponents.',
        process: [
            { image: 'images/zallal vs emmett.png', text: 'The poster uses a gritty, high-contrast style to highlight the intensity and focus of the fighters.' }
        ]
    },
    {
        id: 'proj-11',
        title: 'Quantum Dashboard',
        category: 'UI/UX Design',
        coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
        projectBrief: 'A sleek and intuitive dashboard design for a data analytics platform. The focus was on clear data visualization and a seamless user experience.',
        process: [
            { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop', text: 'The main dashboard view, showcasing various data widgets and charts. A dark theme was chosen for better contrast and reduced eye strain.' },
            { text: 'Extensive user research and wireframing were conducted to optimize the information architecture and user flow before diving into the visual design.' }
        ]
    },
    {
        id: 'proj-12',
        title: 'Aura Cosmetics',
        category: 'Branding',
        coverImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1287&auto=format&fit=crop',
        projectBrief: 'A complete branding identity for a new line of organic cosmetics. The brand aims to feel luxurious, natural, and modern.',
        process: [
            { image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1287&auto=format&fit=crop', text: 'The final logo and packaging design, featuring a minimalist aesthetic with elegant typography and a soft color palette derived from natural ingredients.' }
        ]
    },
    {
        id: 'proj-13',
        title: 'Data Stream',
        category: 'Motion Graphics',
        coverImage: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1287&auto=format&fit=crop',
        projectBrief: 'A dynamic logo animation for a tech startup, visualizing the concept of data flowing and transforming.',
        process: [
            { image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1287&auto=format&fit=crop', text: 'A still frame from the animation showing abstract particle streams forming the company logo. The effect was created using After Effects and Trapcode Particular.' }
        ]
    },
    { 
        id: 'proj-1', 
        title: 'Cosmic Drift', 
        category: 'Album Cover', 
        coverImage: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1471&auto=format&fit=crop',
        projectBrief: 'Album cover design for an electronic music artist. The goal was to evoke a sense of an epic interstellar journey.',
        process: [
            { image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1471&auto=format&fit=crop', text: 'The final composition, assembled in Photoshop. Vibrant nebulas and lighting effects were added to create a dynamic and atmospheric scene.' },
            { image: 'https://images.unsplash.com/photo-1610986665037-9934c83a7c66?q=80&w=1335&auto=format&fit=crop', text: '3D modeling for the main spaceship was done in Blender. This stage focused on creating a sleek, futuristic design that would be the centerpiece of the artwork.' },
            { image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1470&auto=format&fit=crop', text: 'Early concept sketches explored different ship designs and compositions. This helped to establish the overall mood and direction before moving to 3D.' },
            { image: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=1470&auto=format&fit=crop', text: 'A detail shot of the texture work on the ship\'s hull, showing the metallic finish and subtle weathering effects to add realism.' }
        ]
    },
    { 
        id: 'proj-2', 
        title: 'Vintage Brew', 
        category: 'Branding', 
        coverImage: 'https://images.unsplash.com/photo-1511920183276-542a97fb2b3f?q=80&w=1287&auto=format&fit=crop',
        projectBrief: 'A complete branding package for a local coffee shop aiming for a retro, cozy, and inviting atmosphere.',
        process: [
            { image: 'https://images.unsplash.com/photo-1511920183276-542a97fb2b3f?q=80&w=1287&auto=format&fit=crop', text: 'The final logo and branding elements applied to a mockup of a coffee bag. The design uses retro typography and a warm color palette.' },
            { text: 'Deliverables included a full logo suite (primary, secondary, and icon), menu designs, and packaging concepts to ensure brand consistency across all touchpoints.' }
        ] 
    },
    { 
        id: 'proj-3', 
        title: 'Serpent Ring', 
        category: '3D Jewelry', 
        coverImage: 'https://images.unsplash.com/photo-1611652032997-54a23b2c2a71?q=80&w=1374&auto=format&fit=crop',
        projectBrief: 'A detailed 3D model of a serpent ring, designed for manufacturing and product visualization.',
        process: [
            { image: 'https://images.unsplash.com/photo-1611652032997-54a23b2c2a71?q=80&w=1374&auto=format&fit=crop', text: 'The final render, showcasing the polished silver and the ruby eye. The focus was on creating a realistic material representation in Keyshot.' },
            { image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1287&auto=format&fit=crop', text: 'A different angle highlighting the intricate scale details, which were sculpted in ZBrush to give the model a high level of realism.' },
            { image: 'https://images.unsplash.com/photo-1605100804763-247f6storyb3557e?q=80&w=1470&auto=format&fit=crop', text: 'An early wireframe view from the modeling phase, showing the topology of the serpent\'s head and the clean geometry required for a smooth final product.' }
        ]
    }
];

const testimonials = [
    { quote: "Working with MEDAR STUDIO was an absolute pleasure. Their creativity and attention to detail transformed our vision into a stunning reality. Highly recommended!", author: "Jane Doe", company: "Creative Minds Inc." },
    { quote: "The level of professionalism and the quality of the final product exceeded all our expectations. A truly talented team that listens and delivers.", author: "John Smith", company: "Future Ventures" },
    { quote: "Incredible design sense and a collaborative spirit. They took our brand to the next level. We couldn't be happier with the results.", author: "Emily White", company: "Innovate Co." }
];

const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/med_amine_amarir', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@mohamedamineamarir', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg>' },
    { name: 'X', url: 'https://x.com/MohamedAmi39880', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>' },
    { name: 'WhatsApp', url: 'https://wa.me/message/EKPSYN2OA7CSA1', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohamed-amine-amarir-4b4682256', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>' }
];

const quickQuestions = [
    { question: "What services do you offer?", answer: "MEDAR STUDIO offers a range of creative services including UI/UX Design, Branding, Web Development, Illustration, and Motion Graphics. Do you have a specific project in mind?" },
    { question: "Tell me more about your studio.", answer: "MEDAR STUDIO is a creative space where our team of passionate designers and visual artists collaborate to craft unique and impactful digital experiences. You can learn more in the 'About Us' section!" },
    { question: "How can we start a project?", answer: "It's simple! Just head over to the 'Contact' section, fill out the form with some details about your project, and we'll get back to you as soon as possible to discuss the next steps." },
];

// --- Application State ---
let currentSection = 'home';
let inactivityTimer;

// --- Core Application Logic ---

/**
 * Renders the entire application structure into the DOM.
 */
function renderApp() {
    const appContainer = document.getElementById('root');
    const aiContainer = document.getElementById('ai-assistant-container');
    if (!appContainer || !aiContainer) return;

    const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];
    const logoText = "MEDAR STUDIO";
    const animatedLogoHTML = logoText.split('').map((char, index) => 
        `<span style="animation-delay: ${index * 0.05}s">${char}</span>`
    ).join('');

    appContainer.innerHTML = `
        <header class="header">
            <div class="container">
                <a href="#home" class="logo">
                    <div class="logo-animated">${animatedLogoHTML}</div>
                </a>
                <nav class="main-nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact" class="nav-cta">Let's Connect</a></li>
                    </ul>
                </nav>
                 <button class="mobile-nav-toggle" aria-controls="main-nav" aria-expanded="false">
                    <span class="sr-only">Menu</span>
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </header>

        <main>
            <section id="home" class="hero">
                <div class="container">
                    <h1>Creative Design & Visual Arts Studio</h1>
                    <p>Crafting unique digital experiences with passion and precision.</p>
                    <a href="#contact" class="cta-button">Let's Talk</a>
                </div>
            </section>

            <section id="work" class="portfolio" aria-label="Recent Projects">
                <div class="container">
                    <h2>Recent Projects</h2>
                    <div class="carousel-3d-container" aria-roledescription="carousel">
                        <div class="carousel-3d" id="carousel3d" tabindex="0" aria-live="polite">
                        </div>
                    </div>
                    <div class="carousel-buttons">
                        <button id="prevBtn" aria-label="Previous project"><i class="fas fa-chevron-left"></i></button>
                        <button id="nextBtn" aria-label="Next project"><i class="fas fa-chevron-right"></i></button>
                    </div>
                    <a href="#full-portfolio" class="cta-button view-all-btn">View All Projects</a>
                </div>
            </section>

            <section id="testimonials" class="testimonials">
                <div class="container">
                    <h2>What Our Clients Say</h2>
                    <div class="testimonial-slider-container">
                        <div class="testimonial-slider">
                            ${testimonials.map(t => `
                                <div class="testimonial-slide">
                                    <p class="testimonial-quote">"${t.quote}"</p>
                                    <div class="testimonial-author">
                                        <span class="author-name">${t.author}</span>
                                        <span class="author-company">${t.company}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="slider-nav">
                            <button class="slider-btn prev" aria-label="Previous testimonial">&lt;</button>
                            <button class="slider-btn next" aria-label="Next testimonial">&gt;</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="full-portfolio" class="portfolio full-portfolio-section">
                <div class="container">
                    <h2>Full Portfolio</h2>
                    <div class="portfolio-filters" role="tablist" aria-label="Portfolio categories">
                        ${categories.map((cat, index) => `
                            <button class="filter-btn ${index === 0 ? 'active' : ''}" data-filter="${cat.toLowerCase().replace(/\s+/g, '-')}">${cat}</button>
                        `).join('')}
                    </div>
                    <div class="portfolio-grid">
                        ${portfolioItems.map(item => `
                            <div class="portfolio-card" data-id="${item.id}" data-category="${item.category.toLowerCase().replace(/\s+/g, '-')}" tabindex="0" role="button" aria-label="View project: ${item.title}">
                                <img src="${item.coverImage}" alt="${item.title}">
                                <div class="portfolio-card-overlay">
                                    <h3>${item.title}</h3>
                                    <p>${item.category}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <section id="about" class="about">
                <div class="container about-container">
                    <div class="about-content fade-in-up">
                        <h2>About Our Studio</h2>
                        <div class="about-summary">
                            <p class="about-intro">Medar Studio is a creative space dedicated to bringing ideas to life through modern and meaningful visuals. Driven by curiosity and innovation, we design each project as a story to tell, seeking the perfect harmony between aesthetics and functionality.</p>
                            <button class="read-more-btn">Read More</button>
                        </div>
                        <div class="about-full-text">
                            <p>Our mission is to bring ideas to life through modern, balanced, and meaningful visuals. Each project is crafted with passion, thought, and careful attention to detail.</p>
                            <p>Born from a simple vision — to create, learn, and grow — Medar Studio is driven by curiosity, creativity, and innovation to imagine unique concepts. We believe that design goes beyond appearance: it is a way to communicate, to evoke emotion, and to reveal identity.</p>
                            <p>Every creation we produce reflects a pursuit of harmony between aesthetics and functionality, simplicity and impact. At Medar Studio, we see each project as an opportunity to tell a story, express an idea, and build a memorable visual experience.</p>
                            <blockquote class="about-quote">
                               <p>Medar Studio is more than just a creative studio — it’s a vision, a style, and a passion for everything related to the world of design and digital art.</p>
                            </blockquote>
                        </div>
                        <a href="#contact" class="cta-button get-in-touch-btn">Get In Touch</a>
                    </div>
                </div>
            </section>
            
            <section id="contact" class="contact">
                <div class="container contact-container">
                    <div class="contact-container-inner">
                        <div class="contact-info">
                            <h2>Get In Touch</h2>
                            <p>Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
                        </div>
                        <form action="https://formspree.io/f/meokznrv" method="POST" class="contact-form" novalidate>
                            <div class="form-row">
                                <div class="form-group">
                                    <input type="text" id="name" name="name" placeholder="Your Name" required>
                                    <span class="error-message"></span>
                                </div>
                                <div class="form-group">
                                    <input type="email" id="email" name="email" placeholder="Your Email" required>
                                    <span class="error-message"></span>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="tel" id="phone" name="phone" placeholder="WhatsApp Number (e.g., +1234567890)">
                                <span class="error-message"></span>
                            </div>
                            <div class="form-group">
                                <textarea name="message" id="message" placeholder="Your Message" rows="5" required></textarea>
                                <span class="error-message"></span>
                            </div>
                            <button type="submit" disabled>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>

        <footer class="footer">
            <div class="container">
                <h2 class="footer-title">Let's create something amazing together.</h2>
                <a href="mailto:medarstudio@gmail.com" class="footer-contact-link">medarstudio@gmail.com</a>
                <div class="footer-social">
                    ${socialLinks.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" title="${link.name}" aria-label="${link.name}">${link.icon}</a>`).join('')}
                </div>
                <p class="footer-copyright">&copy; ${new Date().getFullYear()} <span class="studio-name animated-gradient-text">MEDAR STUDIO.</span> All Rights Reserved.</p>
            </div>
        </footer>

        <div id="projectViewer" class="project-viewer" role="dialog" aria-modal="true" aria-hidden="true">
             <button class="project-viewer-close" aria-label="Close project viewer">&times;</button>
             <div class="project-viewer-content">
                <header class="project-viewer-header">
                    <h2 class="project-viewer-title"></h2>
                    <p class="project-viewer-category"></p>
                    <p class="project-viewer-brief"></p>
                </header>
                <div class="project-viewer-body">
                </div>
             </div>
        </div>
    `;

    aiContainer.innerHTML = `
        <div class="ai-chat-widget">
            <button class="chat-fab" aria-label="Open AI Assistant" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8" /><path d="M8.5 12.5a5 5 0 1 0 -5 0V12a3 3 0 0 0 3 3h1" /><path d="M18 18.5a5 5 0 1 0 0 -10v1.5" /><path d="M12.5 18H14a3 3 0 0 0 3 -3v-.5" /><path d="M16 12h-4" /></svg>
            </button>
            <div class="chat-window" role="dialog" aria-modal="true" aria-labelledby="chat-heading">
                <div class="chat-header">
                    <h3 id="chat-heading">AI Assistant</h3>
                    <button class="chat-close" aria-label="Close chat">&times;</button>
                </div>
                <div class="chat-body">
                    <div class="chat-messages"></div>
                </div>
                <div class="chat-footer">
                    <div class="quick-questions">
                         ${quickQuestions.map(q => `<button class="quick-question-btn">${q.question}</button>`).join('')}
                    </div>
                    <form class="chat-form">
                        <input type="text" placeholder="Ask me anything..." required />
                        <button type="submit" aria-label="Send message">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55(a.55 .55) 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;

    setupHeaderScrollEffect();
    setupSmoothScrolling();
    setupScrollAnimations();
    setup3DCarousel();
    setupPortfolioFilters();
    setupProjectViewer();
    setupMobileNav();
    setupTestimonialsSlider();
    setupAboutToggle();
    setupAIAssistant();
    setupContactForm();
    setupInteractiveBackground();
    setupSectionObserver();
    setupInactivityTimer();
}

function setupHeaderScrollEffect() {
    const header = document.querySelector('.header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });
}

function setupMobileNav() {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const header = document.querySelector('.header');
    if (navToggle && header) {
        navToggle.addEventListener('click', () => {
            header.classList.toggle('nav-open');
            navToggle.setAttribute('aria-expanded', header.classList.contains('nav-open'));
        });
    }
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const header = document.querySelector('.header');
            if (header?.classList.contains('nav-open')) {
                const navToggle = document.querySelector('.mobile-nav-toggle');
                header.classList.remove('nav-open');
                navToggle?.setAttribute('aria-expanded', 'false');
            }
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#' || targetId === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            const targetElement = document.querySelector(targetId);
            if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function setupScrollAnimations() {
    const items = document.querySelectorAll('.portfolio-item, .fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    items.forEach(item => observer.observe(item));
}

function setup3DCarousel() {
    const carousel3d = document.getElementById('carousel3d');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselContainer = document.querySelector('.carousel-3d-container');
    if (!carousel3d || !prevBtn || !nextBtn || !carouselContainer) return;

    const items = portfolioItems.slice(0, 6);
    const cardCount = items.length;
    const theta = 360 / cardCount;
    let currentAngle = 0;
    let isDragging = false;
    let dragStartX = 0;
    let startAngle = 0;
    const dragSensitivity = 0.6;

    const createCards = () => {
        items.forEach((item, i) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.transform = `rotateY(${i * theta}deg) translateZ(300px)`;
            if (i === 0) card.classList.add('active');
            card.dataset.id = item.id;
            card.innerHTML = `<img src="${item.coverImage}" alt="${item.title}"><div class="card-overlay"><h3>${item.title}</h3><p>${item.category}</p></div>`;
            carousel3d.appendChild(card);
        });
    };

    const updateActiveCard = () => {
        const cards = carousel3d.querySelectorAll('.card');
        const normalizedAngle = ((currentAngle % 360) + 360) % 360;
        const index = Math.round(normalizedAngle / theta) % cardCount;
        cards.forEach((card, i) => card.classList.toggle('active', i === (cardCount - index) % cardCount));
    };
    
    const rotateCarouselTo = (angle) => {
        currentAngle = angle;
        carousel3d.style.transform = `translateZ(-300px) rotateY(${currentAngle}deg)`;
    };

    const snapToAngle = (angle) => {
        carousel3d.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
        rotateCarouselTo(angle);
        updateActiveCard();
    };

    prevBtn.addEventListener('click', () => snapToAngle(currentAngle - theta));
    nextBtn.addEventListener('click', () => snapToAngle(currentAngle + theta));
    
    carouselContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        dragStartX = e.clientX;
        startAngle = currentAngle;
        carousel3d.style.transition = 'none';
    });
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const diffX = e.clientX - dragStartX;
        rotateCarouselTo(startAngle - (diffX * dragSensitivity));
    });
    window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        snapToAngle(Math.round(currentAngle / theta) * theta);
    });

    createCards();
    rotateCarouselTo(0);
}

function setupPortfolioFilters() {
    const filtersContainer = document.querySelector('.portfolio-filters');
    if (!filtersContainer) return;
    filtersContainer.addEventListener('click', (e) => {
        if (!e.target.matches('.filter-btn')) return;
        const filter = e.target.dataset.filter;
        filtersContainer.querySelector('.filter-btn.active')?.classList.remove('active');
        e.target.classList.add('active');
        document.querySelectorAll('.portfolio-card').forEach(card => {
            const shouldShow = filter === 'all' || card.dataset.category === filter;
            card.style.display = shouldShow ? '' : 'none';
        });
    });
}

function setupProjectViewer() {
    const viewer = document.getElementById('projectViewer');
    if (!viewer) return;
    const titleEl = viewer.querySelector('.project-viewer-title');
    const categoryEl = viewer.querySelector('.project-viewer-category');
    const briefEl = viewer.querySelector('.project-viewer-brief');
    const bodyEl = viewer.querySelector('.project-viewer-body');
    
    document.body.addEventListener('click', (e) => {
        const card = e.target.closest('[data-id]');
        if (card) {
            const project = portfolioItems.find(p => p.id === card.dataset.id);
            if (!project) return;
            titleEl.textContent = project.title;
            categoryEl.textContent = project.category;
            briefEl.textContent = project.projectBrief;
            bodyEl.innerHTML = project.process.map(step => {
                let html = '<div class="project-process-step">';
                if (step.video) html += `<video src="${step.video}" controls autoplay muted loop playsinline></video>`;
                else if (step.image) html += `<img src="${step.image}" alt="">`;
                if (step.text) html += `<p>${step.text}</p>`;
                return html + '</div>';
            }).join('');
            viewer.classList.add('is-visible');
            document.body.style.overflow = 'hidden';
        }
    });

    viewer.addEventListener('click', (e) => {
        if (e.target.closest('.project-viewer-close') || e.target === viewer) {
            viewer.classList.remove('is-visible');
            document.body.style.overflow = '';
        }
    });
}

function setupTestimonialsSlider() {
    const slider = document.querySelector('.testimonial-slider');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    if (!slider) return;
    let index = 0;
    const update = () => slider.style.transform = `translateX(-${index * 100}%)`;
    nextBtn.addEventListener('click', () => { index = (index + 1) % slider.children.length; update(); });
    prevBtn.addEventListener('click', () => { index = (index - 1 + slider.children.length) % slider.children.length; update(); });
}

function setupAboutToggle() {
    const btn = document.querySelector('.read-more-btn');
    const content = document.querySelector('.about-content');
    if (btn) btn.addEventListener('click', () => { content.classList.add('is-expanded'); btn.style.display = 'none'; });
}

function setupAIAssistant() {
    const widget = document.querySelector('.ai-chat-widget');
    const fab = widget?.querySelector('.chat-fab');
    const form = widget?.querySelector('.chat-form');
    const input = form?.querySelector('input');
    const messages = widget?.querySelector('.chat-messages');
    if (!widget) return;

    let textChat;
    try {
        const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
        textChat = ai.chats.create({
            model: 'gemini-3-flash-preview',
            config: { systemInstruction: "You are an assistant for MEDAR STUDIO agency." },
        });
    } catch (e) { console.error(e); }

    fab.addEventListener('click', () => widget.classList.toggle('chat-open'));
    widget.querySelector('.chat-close').addEventListener('click', () => widget.classList.remove('chat-open'));

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const msg = input.value.trim();
        if (!msg) return;
        const userMsg = document.createElement('div');
        userMsg.className = 'message user-message';
        userMsg.textContent = msg;
        messages.appendChild(userMsg);
        input.value = '';
        const aiMsg = document.createElement('div');
        aiMsg.className = 'message ai-message thinking';
        aiMsg.textContent = '...';
        messages.appendChild(aiMsg);
        messages.scrollTop = messages.scrollHeight;
        try {
            const res = await textChat.sendMessage({ message: msg });
            aiMsg.textContent = res.text;
            aiMsg.classList.remove('thinking');
        } catch (err) { aiMsg.textContent = "Error."; }
        messages.scrollTop = messages.scrollHeight;
    });
}

function setupContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    form.addEventListener('input', () => {
        form.querySelector('button').disabled = !form.checkValidity();
    });
}

function setupInteractiveBackground() {
    window.addEventListener('mousemove', e => {
        document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    });
}

function setupSectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) currentSection = e.target.id; });
    }, { threshold: 0.5 });
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
}

function setupInactivityTimer() {
    const show = () => document.querySelector('.chat-fab')?.classList.add('proactive-glow');
    const reset = () => {
        document.querySelector('.chat-fab')?.classList.remove('proactive-glow');
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(show, 30000);
    };
    ['mousemove', 'keydown', 'scroll', 'click'].forEach(e => window.addEventListener(e, reset));
    reset();
}

document.addEventListener('DOMContentLoaded', renderApp);
