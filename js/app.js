/**
 * ============================================================
 * APP.JS — Logique principale
 * 1. Effet parallaxe 3D sur l'iPad (suivi souris)
 * 2. Animation crossfade du Hero (3 états IA animés)
 * 3. Gestion du système multilingue (i18n)
 * ============================================================
 * Dépendance : /js/translations.js doit être chargé avant.
 */

(function () {
    'use strict';

    /* ──────────────────────────────────────────────────────────
       1. PARALLAXE 3D — L'iPad suit la souris
       ────────────────────────────────────────────────────────── */

    var deviceBody  = document.getElementById('deviceBody');
    var deviceScene = document.getElementById('deviceScene');

    if (deviceBody && deviceScene) {

        /**
         * Intensité de la rotation (degrés max).
         * Valeur réduite vs iPhone pour un rendu iPad plus posé.
         */
        var MAX_TILT = 8;

        /**
         * On écoute le mousemove sur toute la section hero
         * pour un rayon de tracking large et naturel.
         */
        var hero = document.getElementById('hero');

        hero.addEventListener('mousemove', function (e) {
            var rect = hero.getBoundingClientRect();

            /* Position de la souris en pourcentage (-0.5 à +0.5) */
            var xPercent = (e.clientX - rect.left) / rect.width  - 0.5;
            var yPercent = (e.clientY - rect.top)  / rect.height - 0.5;

            /* Rotation inversée pour un effet naturel :
               souris à droite → l'iPad tourne vers la droite (rotateY positif)
               souris en bas   → l'iPad s'incline vers l'avant (rotateX négatif) */
            var rotateY =  xPercent * MAX_TILT;
            var rotateX = -yPercent * MAX_TILT;

            deviceBody.style.transform =
                'rotateX(' + rotateX.toFixed(2) + 'deg) ' +
                'rotateY(' + rotateY.toFixed(2) + 'deg)';
        });

        /* Retour à la position neutre quand la souris quitte le hero */
        hero.addEventListener('mouseleave', function () {
            deviceBody.style.transition = 'transform 0.6s ease-out';
            deviceBody.style.transform  = 'rotateX(0deg) rotateY(0deg)';

            setTimeout(function () {
                deviceBody.style.transition = 'transform 0.08s ease-out';
            }, 600);
        });

        /* Transition par défaut ultra-rapide pour la fluidité */
        deviceBody.style.transition = 'transform 0.08s ease-out';
    }


    /* ──────────────────────────────────────────────────────────
       2. ANIMATION CROSSFADE — 3 états animés dans l'iPad
          Durée augmentée à 6 500 ms pour que les animations
          CSS internes (chat → contrat → tableur) aient le temps
          de se jouer complètement avant le prochain état.
       ────────────────────────────────────────────────────────── */

    var DISPLAY_MS  = 3000;
    var PROGRESS_MS = 2500;

    var states       = Array.from(document.querySelectorAll('#aiStates .ai-state'));
    var progressFill = document.getElementById('progressFill');
    var counter      = document.getElementById('aiCounter');
    var current      = 0;

    function colorOf(i) {
        return states[i].getAttribute('data-color') || '#14b8a6';
    }

    function formatCounter(i, total) {
        return String(i + 1).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');
    }

    function animateProgress(color) {
        progressFill.style.transition = 'none';
        progressFill.style.width      = '0%';
        progressFill.style.background = color;
        void progressFill.offsetWidth;
        progressFill.style.transition = 'width ' + PROGRESS_MS + 'ms linear';
        progressFill.style.width      = '100%';
    }

    function nextState() {
        states[current].classList.remove('is-active');
        current = (current + 1) % states.length;

        /* Force un reflow avant d'ajouter is-active :
           garantit que toutes les animations CSS du nouvel état
           repartent de 0% même lors de la 2e+ rotation. */
        void states[current].offsetWidth;

        states[current].classList.add('is-active');
        counter.textContent = formatCounter(current, states.length);
        animateProgress(colorOf(current));
    }

    animateProgress(colorOf(0));
    counter.textContent = formatCounter(0, states.length);
    setInterval(nextState, DISPLAY_MS);


    /* ──────────────────────────────────────────────────────────
       3. SYSTÈME MULTILINGUE (i18n)
       ────────────────────────────────────────────────────────── */

    var currentLang  = 'fr';
    var langButtons  = document.querySelectorAll('[data-lang]');
    var i18nElements = document.querySelectorAll('[data-i18n]');

    function setLanguage(lang) {
        if (!translations[lang]) return;

        currentLang = lang;
        document.documentElement.lang = lang;

        i18nElements.forEach(function (el) {
            var key  = el.getAttribute('data-i18n');
            var text = translations[lang][key];
            if (text !== undefined) {
                if (el.hasAttribute('data-i18n-html')) {
                    el.innerHTML = text;
                } else {
                    el.textContent = text;
                }
            }
        });

        langButtons.forEach(function (btn) {
            btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
        });
    }

    langButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    setLanguage('fr');


    /* ──────────────────────────────────────────────────────────
       4. MAGIC MENU — Segmented control + staggered content
       ────────────────────────────────────────────────────────── */

    var overlay     = document.getElementById('focusOverlay');
    var trigger     = document.getElementById('focusTrigger');
    var closeBtn    = document.getElementById('magicClose');
    var tabs        = Array.from(document.querySelectorAll('.magic-tab'));
    var panels      = Array.from(document.querySelectorAll('.magic-panel'));
    var bubble      = document.getElementById('magicBubble');

    /** Positionner la bulle derrière l'onglet actif */
    function positionBubble(tab) {
        var tabsContainer = tab.parentElement;
        var containerRect = tabsContainer.getBoundingClientRect();
        var tabRect       = tab.getBoundingClientRect();
        var offsetLeft    = tabRect.left - containerRect.left;

        bubble.style.width     = tabRect.width + 'px';
        bubble.style.transform = 'translateX(' + (offsetLeft - 5) + 'px)';
    }

    /** Activer un onglet et son panneau associé */
    function activateTab(tab) {
        var targetPanel = tab.getAttribute('data-tab');

        /* Mettre à jour les onglets */
        tabs.forEach(function (t) { t.classList.remove('is-active'); });
        tab.classList.add('is-active');

        /* Déplacer la bulle */
        positionBubble(tab);

        /* Changer de panneau avec stagger restart */
        panels.forEach(function (p) {
            if (p.getAttribute('data-panel') === targetPanel) {
                /* Reset les animations stagger */
                var items = p.querySelectorAll('.stagger-item');
                items.forEach(function (item) {
                    item.style.animation = 'none';
                    void item.offsetWidth; /* reflow */
                    item.style.animation = '';
                });
                p.classList.add('is-active');
            } else {
                p.classList.remove('is-active');
            }
        });
    }

    /** Ouvrir l'overlay */
    function openOverlay() {
        overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';

        /* Positionner la bulle après que l'overlay soit visible */
        requestAnimationFrame(function () {
            var activeTab = document.querySelector('.magic-tab.is-active');
            if (activeTab) positionBubble(activeTab);

            /* Relancer les animations stagger du panneau actif */
            var activePanel = document.querySelector('.magic-panel.is-active');
            if (activePanel) {
                var items = activePanel.querySelectorAll('.stagger-item');
                items.forEach(function (item) {
                    item.style.animation = 'none';
                    void item.offsetWidth;
                    item.style.animation = '';
                });
            }
        });
    }

    /** Fermer l'overlay */
    function closeOverlay() {
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    /* Événements — onglets */
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            activateTab(tab);
        });
    });

    /* Événements — ouvrir/fermer */
    trigger.addEventListener('click', openOverlay);
    closeBtn.addEventListener('click', closeOverlay);

    /* Fermer avec Escape */
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
            closeOverlay();
        }
    });

    /* Fermer en cliquant sur le fond (pas sur le contenu) */
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeOverlay();
    });

    /* Repositionner la bulle au resize */
    window.addEventListener('resize', function () {
        var activeTab = document.querySelector('.magic-tab.is-active');
        if (activeTab && overlay.classList.contains('is-open')) {
            positionBubble(activeTab);
        }
    });

    /* Re-scanner les éléments i18n (le focus overlay est dans le DOM) */
    i18nElements = document.querySelectorAll('[data-i18n]');


    /* ──────────────────────────────────────────────────────────
       5. NAVBAR SCROLL — fondu + slide piloté par le scroll
          Logo part à gauche, langues partent à droite,
          synchronisé sur la progression du scroll dans le hero.
       ────────────────────────────────────────────────────────── */

    var nav      = document.querySelector('.hero-nav');
    var navBrand = document.querySelector('.hero-brand');
    var navLang  = document.querySelector('.lang-switcher');
    var heroSect = document.getElementById('hero');

    function updateNav() {
        var scrollY   = window.scrollY;
        /* Seuil = 75 % de la hauteur du hero, min 260 px */
        var threshold = Math.max(heroSect.offsetHeight * 0.75, 260);
        var t         = Math.min(Math.max(scrollY / threshold, 0), 1);

        /* Ease-in quadratique : disparition s'accélère */
        var eased = t * t;

        nav.style.opacity        = String(1 - eased);
        navBrand.style.transform = 'translateX(' + (-eased * 90) + 'px)';
        navLang.style.transform  = 'translateX(' + ( eased * 90) + 'px)';
        nav.style.pointerEvents  = t >= 0.97 ? 'none' : '';
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    window.addEventListener('resize', updateNav, { passive: true });
    updateNav();

}());
