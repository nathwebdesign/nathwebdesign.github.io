document.addEventListener('DOMContentLoaded', function() {
    console.log('TSK Services - Site chargé!');
    
    // Effet de chargement progressif des éléments
    const fadeElements = document.querySelectorAll('section, .product-card');
    const header = document.querySelector('header');
    
    // Animation du logo TSK Services
    const siteName = document.querySelector('header h1');
    if (siteName) {
        const text = siteName.textContent;
        siteName.innerHTML = '';
        
        // Animation lettre par lettre
        for (let i = 0; i < text.length; i++) {
            const letter = document.createElement('span');
            letter.textContent = text[i];
            letter.style.opacity = '0';
            letter.style.transform = 'translateY(-20px)';
            letter.style.display = 'inline-block';
            letter.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
            letter.style.transitionDelay = `${i * 0.1}s`;
            siteName.appendChild(letter);
            
            setTimeout(() => {
                letter.style.opacity = '1';
                letter.style.transform = 'translateY(0)';
            }, 100);
        }
    }
    
    // Effet de particules en arrière-plan (façon jeu vidéo)
    createParticles();
    
    // Animer les sections au scroll
    window.addEventListener('scroll', function() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                element.classList.add('visible');
            }
        });
        
        // Effet de parallaxe pour l'en-tête
        const scrollPosition = window.scrollY;
        if (header) {
            header.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });
    
    // Ajouter une classe pour gérer les animations CSS
    fadeElements.forEach(element => {
        element.classList.add('animate-on-scroll');
    });
    
    // Ajouter un effet de survol aux cartes
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            productCards.forEach(c => {
                if (c !== card) {
                    c.classList.add('dimmed');
                }
            });
        });
        
        card.addEventListener('mouseleave', function() {
            productCards.forEach(c => {
                c.classList.remove('dimmed');
            });
        });
    });
    
    // Déclencher l'événement de défilement pour afficher les éléments visibles au chargement
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 500);
});

// Fonction pour créer les particules en arrière-plan
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.overflow = 'hidden';
    particlesContainer.style.zIndex = '-2';
    document.body.appendChild(particlesContainer);
    
    // Créer plusieurs particules
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    
    // Style de base des particules
    particle.style.position = 'absolute';
    particle.style.background = `rgba(255, 140, 0, ${Math.random() * 0.3})`;
    
    // Taille aléatoire
    const size = Math.random() * 5 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Position initiale aléatoire
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    
    // Effet de flou et bordure arrondie
    particle.style.borderRadius = '50%';
    particle.style.filter = 'blur(1px)';
    
    // Animation
    particle.style.transition = 'opacity 0.5s ease';
    
    // Ajouter au DOM
    container.appendChild(particle);
    
    // Animation de flottement
    animateParticle(particle);
}

function animateParticle(particle) {
    // Durée aléatoire pour l'animation
    const duration = Math.random() * 15 + 10;
    
    // Valeurs initiales
    let posX = parseFloat(particle.style.left);
    let posY = parseFloat(particle.style.top);
    
    // Définir une direction aléatoire
    const directionX = Math.random() > 0.5 ? 1 : -1;
    const directionY = Math.random() > 0.5 ? 1 : -1;
    
    // Vitesse aléatoire
    const speedX = Math.random() * 0.05 * directionX;
    const speedY = Math.random() * 0.05 * directionY;
    
    // Fonction d'animation
    function moveParticle() {
        // Mise à jour de la position
        posX += speedX;
        posY += speedY;
        
        // Vérifier les limites
        if (posX > 100 || posX < 0) posX = Math.random() * 100;
        if (posY > 100 || posY < 0) posY = Math.random() * 100;
        
        // Appliquer la nouvelle position
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Continuer l'animation
        requestAnimationFrame(moveParticle);
    }
    
    // Démarrer l'animation
    moveParticle();
}
