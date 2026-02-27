/**
 * ============================================================
 * TRANSLATIONS.JS — Dictionnaire multilingue (FR, EN, ES)
 * ============================================================
 * Chaque clé correspond à un attribut data-i18n dans le HTML.
 * Pour ajouter une langue : ajouter un objet au même format.
 */

const translations = {

    /* ──────────────────────────── FRANÇAIS (défaut) ──────────────────────────── */
    fr: {
        /* Navigation */
        navSubtitle:        "Automatisation sur mesure · Les Cluses",

        /* Hero — statut */
        heroStatus:         "Systèmes actifs — Automatisations en cours",

        /* Hero — titres */
        heroTitle1:         "L'IA travaille.",
        heroTitle2:         "Vous développez.",
        heroSubtitle:       "Solutions d'automatisation sur mesure pour particuliers ou professionnels.",

        /* Hero — fenêtre IA : 3 états */
        aiWindowLabel:      "flux-agent · actif",
        state1Sector:       "▸ Immobilier",
        state1Line1:        "Résumé Prospect :",
        state1Line2:        "Budget 450k€ validé.",
        state1Line3:        "Critère :",
        state1Line4:        "Cuisine ouverte.",
        state2Sector:       "▸ Gîtes & Location",
        state2Line1:        "Contrat de location généré",
        state2Line2:        "— Signature effectuée.",
        state3Sector:       "▸ Finance",
        state3Line1:        "Facture analysée",
        state3Line2:        "› Données extraites vers",
        state3Line3:        "Excel.",

        /* Bento Grid — titre section */
        sectionTitle:       "L'invisible qui fait la différence.",
        sectionSubtitle:    "Des processus sur mesure qui tournent silencieusement en arrière-plan, 24h/24.",

        /* Carte 1 — Bénéfice */
        card1Badge:         "Bénéfice",
        card1Title:         "Des centaines d'heures libérées.",
        card1Desc:          "Ne gaspillez plus votre énergie sur des tâches répétitives ou de la saisie manuelle. L'intelligence artificielle gère vos flux d'informations instantanément, vous permettant de vous concentrer sur ce qui a vraiment de la valeur : vos clients et votre développement.",

        /* Carte 2 — Fiabilité */
        card2Title:         "Zéro erreur. Une précision absolue.",
        card2Desc:          "Une facture complexe ? Un contrat de location avec des dizaines de variables ? L'IA ne connaît ni la fatigue ni les oublis. Chaque donnée est extraite, vérifiée et transférée avec une rigueur mathématique, à toute heure du jour ou de la nuit.",

        /* Carte 3 — Intégration */
        card3Badge:         "Intégration",
        card3Title:         "Connecté à vos outils actuels.",
        card3Desc:          "Pas de nouveaux logiciels complexes à apprendre ou à installer. Nous branchons notre intelligence artificielle directement dans les applications que vous utilisez déjà tous les jours, pour que tout communique de façon parfaitement invisible.",

        /* CTA */
        ctaLabel:           "Prêt à libérer votre temps ?",
        ctaButton:          "Parlons de votre projet",

        /* Footer */
        footerEI:           "Entrepreneur Individuel : Thomas Olivier Sylvain Finkelstein",
        footerSiret:        "SIRET : 101 660 249 00018  ·  Code APE : 62.01Z",
        footerAddress:      "Siège social : Les Cluses (66480), France",

        /* ── iPad — État 1 : Chat ── */
        chatOnline:         "● En ligne",
        chatReply:          "Merci, je prépare la visite.",

        /* ── iPad — État 2 : Contrat ── */
        contractTitle:      "Contrat de Location",
        gitesLabel:         "Gîtes & Location",
        fieldTenant:        "Locataire",
        fieldDates:         "Période",
        fieldAmount:        "Montant",
        sigLabel:           "Signature",
        state2Badge:        "✓ Caution bloquée",

        /* ── iPad — État 3 : Tableur ── */
        sheetNotif:         "Facture_Orange.pdf détectée",
        sheetDate:          "Date",
        sheetSupplier:      "Fournisseur",
        sheetAmount:        "Montant HT",
        sheetVat:           "TVA",
    },

    /* ──────────────────────────── ENGLISH ──────────────────────────── */
    en: {
        navSubtitle:        "Custom automation · Les Cluses, France",

        heroStatus:         "Systems active — Automations running",
        heroTitle1:         "AI does the work.",
        heroTitle2:         "You grow the business.",
        heroSubtitle:       "Tailor-made automation solutions for individuals and businesses.",

        aiWindowLabel:      "flux-agent · active",
        state1Sector:       "▸ Real Estate",
        state1Line1:        "Prospect Summary:",
        state1Line2:        "Budget €450k validated.",
        state1Line3:        "Criteria:",
        state1Line4:        "Open kitchen.",
        state2Sector:       "▸ Vacation Rentals",
        state2Line1:        "Rental agreement generated",
        state2Line2:        "— Signature completed.",
        state3Sector:       "▸ Finance",
        state3Line1:        "Invoice analyzed",
        state3Line2:        "› Data extracted to",
        state3Line3:        "Excel.",

        sectionTitle:       "The invisible that makes the difference.",
        sectionSubtitle:    "Custom processes running silently in the background, 24/7.",

        card1Badge:         "Benefit",
        card1Title:         "Hundreds of hours freed up.",
        card1Desc:          "Stop wasting your energy on repetitive tasks or manual data entry. Artificial intelligence manages your information flows instantly, letting you focus on what truly matters: your clients and your growth.",

        card2Title:         "Zero errors. Absolute precision.",
        card2Desc:          "A complex invoice? A rental contract with dozens of variables? AI never tires or forgets. Every data point is extracted, verified and transferred with mathematical rigor, around the clock.",

        card3Badge:         "Integration",
        card3Title:         "Connected to your existing tools.",
        card3Desc:          "No complex new software to learn or install. We plug our artificial intelligence directly into the applications you already use every day, so everything communicates in a perfectly seamless way.",

        ctaLabel:           "Ready to free up your time?",
        ctaButton:          "Let's talk about your project",

        footerEI:           "Sole Proprietor: Thomas Olivier Sylvain Finkelstein",
        footerSiret:        "SIRET: 101 660 249 00018  ·  APE Code: 62.01Z",
        footerAddress:      "Headquarters: Les Cluses (66480), France",

        /* ── iPad — State 1 : Chat ── */
        chatOnline:         "● Online",
        chatReply:          "Thanks, I'll prepare the visit.",

        /* ── iPad — State 2 : Contract ── */
        contractTitle:      "Rental Agreement",
        gitesLabel:         "Vacation Rentals",
        fieldTenant:        "Tenant",
        fieldDates:         "Period",
        fieldAmount:        "Amount",
        sigLabel:           "Signature",
        state2Badge:        "✓ Deposit secured",

        /* ── iPad — State 3 : Spreadsheet ── */
        sheetNotif:         "Invoice_Orange.pdf detected",
        sheetDate:          "Date",
        sheetSupplier:      "Supplier",
        sheetAmount:        "Amount ex.VAT",
        sheetVat:           "VAT",
    },

    /* ──────────────────────────── ESPAÑOL ──────────────────────────── */
    es: {
        navSubtitle:        "Automatización a medida · Les Cluses, Francia",

        heroStatus:         "Sistemas activos — Automatizaciones en curso",
        heroTitle1:         "La IA trabaja.",
        heroTitle2:         "Tú creces.",
        heroSubtitle:       "Soluciones de automatización a medida para particulares o profesionales.",

        aiWindowLabel:      "flux-agent · activo",
        state1Sector:       "▸ Inmobiliaria",
        state1Line1:        "Resumen Prospecto:",
        state1Line2:        "Presupuesto 450k€ validado.",
        state1Line3:        "Criterio:",
        state1Line4:        "Cocina abierta.",
        state2Sector:       "▸ Alquileres",
        state2Line1:        "Contrato de alquiler generado",
        state2Line2:        "— Firma completada.",
        state3Sector:       "▸ Finanzas",
        state3Line1:        "Factura analizada",
        state3Line2:        "› Datos extraídos a",
        state3Line3:        "Excel.",

        sectionTitle:       "Lo invisible que marca la diferencia.",
        sectionSubtitle:    "Procesos a medida que funcionan silenciosamente en segundo plano, 24/7.",

        card1Badge:         "Beneficio",
        card1Title:         "Cientos de horas liberadas.",
        card1Desc:          "Deja de gastar tu energía en tareas repetitivas o entrada manual de datos. La inteligencia artificial gestiona tus flujos de información al instante, permitiéndote centrarte en lo que realmente importa: tus clientes y tu desarrollo.",

        card2Title:         "Cero errores. Precisión absoluta.",
        card2Desc:          "¿Una factura compleja? ¿Un contrato de alquiler con decenas de variables? La IA no conoce el cansancio ni los olvidos. Cada dato es extraído, verificado y transferido con rigor matemático, a cualquier hora del día o de la noche.",

        card3Badge:         "Integración",
        card3Title:         "Conectado a tus herramientas actuales.",
        card3Desc:          "Sin nuevos softwares complejos que aprender o instalar. Conectamos nuestra inteligencia artificial directamente en las aplicaciones que ya usas cada día, para que todo se comunique de forma perfectamente invisible.",

        ctaLabel:           "¿Listo para liberar tu tiempo?",
        ctaButton:          "Hablemos de tu proyecto",

        footerEI:           "Empresario Individual: Thomas Olivier Sylvain Finkelstein",
        footerSiret:        "SIRET: 101 660 249 00018  ·  Código APE: 62.01Z",
        footerAddress:      "Sede social: Les Cluses (66480), Francia",

        /* ── iPad — Estado 1 : Chat ── */
        chatOnline:         "● En línea",
        chatReply:          "Gracias, preparo la visita.",

        /* ── iPad — Estado 2 : Contrato ── */
        contractTitle:      "Contrato de Alquiler",
        gitesLabel:         "Alquileres Vacacionales",
        fieldTenant:        "Arrendatario",
        fieldDates:         "Período",
        fieldAmount:        "Importe",
        sigLabel:           "Firma",
        state2Badge:        "✓ Fianza bloqueada",

        /* ── iPad — Estado 3 : Hoja de cálculo ── */
        sheetNotif:         "Factura_Orange.pdf detectada",
        sheetDate:          "Fecha",
        sheetSupplier:      "Proveedor",
        sheetAmount:        "Importe s/IVA",
        sheetVat:           "IVA",
    },
};
