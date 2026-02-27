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

    var DISPLAY_MS  = 6500;
    var PROGRESS_MS = 6000;

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

}());
