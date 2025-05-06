document.addEventListener('DOMContentLoaded', function() {
    // Configuration initiale - cacher les détails complets et ajouter bouton "Voir plus"
    setupProductCards();
    
    // Gérer l'ouverture des pages produits en plein écran
    setupModalSystem();
    
    // Ajouter les écouteurs d'événements pour les boutons
    document.body.addEventListener('click', function(e) {
        // Vérifier si l'élément cliqué est un bouton "Voir les détails"
        if (e.target.classList.contains('btn-view-details')) {
            const productId = e.target.getAttribute('data-product-id');
            showProductDetails(productId);
        }
        
        // Fermer la modal quand on clique sur l'overlay
        if (e.target.classList.contains('product-modal-overlay')) {
            closeAllModals();
        }
        
        // Fermer avec le bouton de fermeture
        if (e.target.classList.contains('modal-close-btn')) {
            closeAllModals();
        }
    });
    
    // Fermer la modal avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
});

function setupProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        // Sauvegarder le contenu complet original
        const fullContent = card.innerHTML;
        card.setAttribute('data-full-content', fullContent);
        
        // Créer une version simplifiée
        const title = card.querySelector('h3').textContent;
        
        // Choisir une icône appropriée basée sur le titre
        let icon = '✨'; // Icône par défaut
        let customDescription = '';
        
        if (title.includes('BOTLOBBY') && !title.includes('RANKED')) {
            icon = '🎮';
            customDescription = "Accélérez le déblocage de vos camouflages et niveaux avec nos lobbies optimisés. Solution rapide et sécurisée pour tous les joueurs de Black Ops 6.";
        } else if (title.includes('RANKED BOT LOBBY')) {
            icon = '🏆';
            customDescription = "Maximisez votre SR en toute sécurité. Progression garantie dans le mode classé sans risque de bannissement. Accessible avec votre ID Activision uniquement.";
        } else if (title.includes('BOOST RANKED')) {
            icon = '⚡';
            customDescription = "Montez rapidement dans les rangs compétitifs avec notre service de boost professionnel. De Bronze à Master, atteignez votre rang désiré en un temps record.";
        } else if (title.includes('HARD UNLOCK')) {
            icon = '🔓';
            customDescription = "Débloquez les camouflages les plus prestigieux du jeu (Dark Matter, Nebula, Abyss) sans effort. Service 100% sécurisé pour tous supports.";
        } else if (title.includes('UNLOCK ALL')) {
            icon = '✅';
            customDescription = "Obtenez instantanément l'accès à tout le contenu du jeu : opérateurs, camouflages, accessoires et plus encore. Solution complète pour BO6/WZ.";
        }
        
        // Créer un résumé condensé sans image avec une belle présentation
        const simplifiedContent = `
            <div class="card-icon">${icon}</div>
            <h3>${title}</h3>
            <p class="card-summary">${customDescription}</p>
            <div class="card-actions">
                <button class="btn-view-details" data-product-id="${index}">Voir les détails</button>
            </div>
        `;
        
        // Remplacer le contenu de la carte
        card.innerHTML = simplifiedContent;
        
        // Ajouter un attribut de données pour identifier la carte
        card.setAttribute('data-product-id', index);
    });
}

function setupModalSystem() {
    // Création de l'élément modal qui sera réutilisé
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'product-modal-overlay';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'product-modal-content';
    
    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close-btn';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', closeAllModals);
    
    modalContent.appendChild(closeButton);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
}

function showProductDetails(productId) {
    // Récupérer la carte produit correspondante
    const productCard = document.querySelector(`[data-product-id="${productId}"]`);
    
    // Récupérer le contenu complet
    const fullContent = productCard.getAttribute('data-full-content');
    
    // Mettre à jour le contenu de la modal
    const modalContent = document.querySelector('.product-modal-content');
    
    // Créer une version modifiée du contenu complet (sans les images)
    let processedContent = fullContent;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = fullContent;
    
    // Supprimer les balises img si elles existent
    const imgElements = tempDiv.querySelectorAll('img');
    imgElements.forEach(img => img.remove());
    
    // Récupérer le contenu sans images
    processedContent = tempDiv.innerHTML;
    
    // Déterminer si c'est un service spécifique pour personnaliser le bouton d'action
    let actionText = "Commander sur Discord";
    let iconClass = "";
    
    const productTitle = productCard.querySelector('h3').textContent;
    
    if (productTitle.includes('BOTLOBBY')) {
        iconClass = "🎮";
    } else if (productTitle.includes('RANKED')) {
        iconClass = "🏆";
    } else if (productTitle.includes('BOOST')) {
        iconClass = "⚡";
    } else if (productTitle.includes('HARD UNLOCK')) {
        iconClass = "🔓";
    } else if (productTitle.includes('UNLOCK ALL')) {
        iconClass = "✅";
    }
    
    modalContent.innerHTML = `
        <button class="modal-close-btn">&times;</button>
        <div class="modal-product-details">
            ${processedContent}
        </div>
        <div class="modal-actions">
            <a href="#discord" class="modal-action-btn" onclick="closeAllModals()">${iconClass} ${actionText}</a>
        </div>
    `;
    
    // Réattacher l'écouteur d'événement pour le bouton de fermeture
    document.querySelector('.modal-close-btn').addEventListener('click', closeAllModals);
    
    // Afficher la modal
    document.querySelector('.product-modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden'; // Empêcher le défilement
    
    // Ajouter une classe spéciale pour les animations
    setTimeout(() => {
        document.querySelector('.modal-product-details').classList.add('animated');
    }, 100);
}

function closeAllModals() {
    const modalOverlay = document.querySelector('.product-modal-overlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restaurer le défilement
    }
}

function truncateText(text, maxLength) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    
    // Trouver le dernier espace avant maxLength pour ne pas couper un mot
    const lastSpace = text.substring(0, maxLength).lastIndexOf(' ');
    const endPos = lastSpace > 0 ? lastSpace : maxLength;
    
    return text.substr(0, endPos) + '...';
}