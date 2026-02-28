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

        /* Hero — badge */
        heroBadge:          "Pour professionnels & particuliers",

        /* Hero — statut iPad */
        heroStatus:         "Systèmes actifs",

        /* Hero — titres */
        heroTitle1:         "L'IA bosse.",
        heroTitle2:         "Vous cartonnez.",
        heroSubtitle:       "Des automatisations intelligentes qui tournent pour vous, 24h/24, sans effort.",
        scrollHint:         "Voir les solutions",

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

        /* ── Focus Overlay ── */
        focusTrigger:       "Explications concrètes avec exemples",
        focusQuestion:      "Comment pouvons-nous vous aider ?",
        focusProLabel:      "Solutions Professionnelles",
        focusPersoLabel:    "Automatisation Personnelle",
        focusBackBtn:       "Retour",
        focusProTitle:      "Choisissez votre secteur",
        tileImmo:           "Immobilier",
        tileGites:          "Gîtes & Locations",
        tileEnt:            "Entreprises",

        /* ── Modale Immobilier ── */
        modalImmoTitle:     "Ne visitez qu'avec des acheteurs qualifiés.",
        modalImmoP1Label:   "Filtre IA",
        modalImmoP1Desc:    "Grâce à un formulaire rempli par votre prospect, ses critères sont analysés par l'IA qui vous prépare une fiche de synthèse. Au choix : vous la recevez en validation, ou elle s'intègre automatiquement dans votre CRM.",
        modalImmoP2Label:   "Estimation",
        modalImmoP2Desc:    "À la réception d'une demande d'estimation, l'IA extrait les données du bien et génère un pré-rapport sauvegardé en brouillon. À vous de le vérifier d'un clic avant de l'envoyer au vendeur.",
        modalImmoP3Label:   "Compte-rendu",
        modalImmoP3Desc:    "Envoyez un simple mémo vocal après votre visite : l'IA rédige un compte-rendu professionnel impeccable. Vous pouvez le relire en brouillon, ou le laisser s'envoyer directement.",

        /* ── Modale Gîtes ── */
        modalGitesTitle:    "Votre conciergerie en pilote automatique.",
        modalGitesP1Label:  "Contrats",
        modalGitesP1Desc:   "Grâce aux informations de réservation, le contrat de location se remplit de lui-même. Vous choisissez : l'envoyer instantanément pour signature électronique, ou le générer en brouillon pour vérification.",
        modalGitesP2Label:  "Accueil",
        modalGitesP2Desc:   "Un livret d'accueil est préparé et traduit automatiquement la veille de l'arrivée. L'envoi par WhatsApp peut être 100% automatisé ou nécessiter votre validation finale sur votre téléphone.",
        modalGitesP3Label:  "Avis",
        modalGitesP3Desc:   "Le lendemain du départ, un message chaleureux est préparé pour s'assurer de leur satisfaction. Un simple clic de validation de votre part suffit pour l'envoyer et récolter vos avis 5 étoiles.",

        /* ── Modale Entreprises ── */
        modalEntTitle:      "La fin absolue de la saisie manuelle.",
        modalEntP1Label:    "Factures",
        modalEntP1Desc:     "En transférant vos factures PDF à une adresse dédiée, l'IA lit et pré-remplit votre tableau de bord financier. Vous gardez le contrôle total : les lignes restent \"à valider\" jusqu'à votre approbation.",
        modalEntP2Label:    "Devis",
        modalEntP2Desc:     "À chaque demande de devis, les informations du client sont extraites et préparées en brouillon dans votre logiciel commercial. Une vérification rapide, et la fiche est validée sans aucune saisie.",
        modalEntP3Label:    "Notes de frais",
        modalEntP3Desc:     "Vos employés prennent en photo leurs reçus : l'IA extrait le montant et la TVA. Le remboursement et la saisie comptable attendent simplement votre clic de validation.",

        /* ── Modale Personnel ── */
        modalPersoTitle:    "Reprenez le contrôle de votre temps libre.",
        modalPersoP1Label:  "Tri administratif",
        modalPersoP1Desc:   "Lorsqu'une facture arrive par mail, elle est téléchargée et classée. Vous pouvez configurer le système pour qu'il la place dans un dossier \"À vérifier\", ou qu'il l'archive définitivement.",
        modalPersoP2Label:  "Assistant quotidien",
        modalPersoP2Desc:   "En connectant vos agendas, l'IA vous prépare un résumé de votre journée. Vous recevez un brouillon de votre planning chaque matin, pour ne garder que l'essentiel.",
        modalPersoP3Label:  "Budget",
        modalPersoP3Desc:   "L'analyse de vos reçus alimente votre tableau de budget en vous proposant des suggestions. L'IA repère les abonnements inutiles et vous demande confirmation avant de les signaler.",

        /* ── Disclaimer ── */
        magicDisclaimer:    "Ces exemples illustrent quelques automatisations parmi tant d'autres — chaque solution est entièrement personnalisée selon vos outils et vos habitudes.",
    },

    /* ──────────────────────────── ENGLISH ──────────────────────────── */
    en: {
        navSubtitle:        "Custom automation · Les Cluses, France",

        heroBadge:          "For businesses & individuals",

        heroStatus:         "Systems active",
        heroTitle1:         "AI grinds.",
        heroTitle2:         "You win.",
        heroSubtitle:       "Smart automations working for you, around the clock, effortlessly.",
        scrollHint:         "See the solutions",

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

        /* ── Focus Overlay ── */
        focusTrigger:       "Concrete examples & explanations",
        focusQuestion:      "How can we help you?",
        focusProLabel:      "Professional Solutions",
        focusPersoLabel:    "Personal Automation",
        focusBackBtn:       "Back",
        focusProTitle:      "Choose your sector",
        tileImmo:           "Real Estate",
        tileGites:          "Vacation Rentals",
        tileEnt:            "Businesses",

        /* ── Modal: Real Estate ── */
        modalImmoTitle:     "Only visit with qualified buyers.",
        modalImmoP1Label:   "AI Filter",
        modalImmoP1Desc:    "Through a form filled out by your prospect, their criteria are analyzed by AI which prepares a summary sheet. Your choice: receive it for approval, or have it automatically integrated into your CRM.",
        modalImmoP2Label:   "Appraisal",
        modalImmoP2Desc:    "Upon receiving an appraisal request, AI extracts property data and generates a pre-report saved as a draft. Just verify it with one click before sending it to the seller.",
        modalImmoP3Label:   "Visit Report",
        modalImmoP3Desc:    "Send a simple voice memo after your visit: AI writes a flawless professional report. You can review it as a draft, or let it send automatically.",

        /* ── Modal: Vacation Rentals ── */
        modalGitesTitle:    "Your concierge service on autopilot.",
        modalGitesP1Label:  "Contracts",
        modalGitesP1Desc:   "Using booking information, the rental agreement fills itself out. Your choice: send it instantly for electronic signature, or generate it as a draft for review.",
        modalGitesP2Label:  "Welcome",
        modalGitesP2Desc:   "A welcome booklet is prepared and automatically translated the day before arrival. WhatsApp delivery can be 100% automated or require your final approval on your phone.",
        modalGitesP3Label:  "Reviews",
        modalGitesP3Desc:   "The day after departure, a warm message is prepared to check on their satisfaction. A single validation click from you is enough to send it and collect your 5-star reviews.",

        /* ── Modal: Businesses ── */
        modalEntTitle:      "The absolute end of manual data entry.",
        modalEntP1Label:    "Invoices",
        modalEntP1Desc:     "By forwarding your PDF invoices to a dedicated address, AI reads and pre-fills your financial dashboard. You keep total control: rows remain \"pending approval\" until you confirm.",
        modalEntP2Label:    "Quotes",
        modalEntP2Desc:     "For each quote request, client information is extracted and prepared as a draft in your business software. A quick check, and the record is validated without any typing.",
        modalEntP3Label:    "Expense Reports",
        modalEntP3Desc:     "Your employees photograph their receipts: AI extracts the amount and VAT. Reimbursement and accounting entries simply await your validation click.",

        /* ── Modal: Personal ── */
        modalPersoTitle:    "Take back control of your free time.",
        modalPersoP1Label:  "Admin Sorting",
        modalPersoP1Desc:   "When an invoice arrives by email, it's downloaded and filed. You can configure the system to place it in a \"To Review\" folder, or archive it permanently.",
        modalPersoP2Label:  "Daily Assistant",
        modalPersoP2Desc:   "By connecting your calendars, AI prepares a summary of your day. You receive a draft of your schedule each morning, keeping only what matters.",
        modalPersoP3Label:  "Budget",
        modalPersoP3Desc:   "Analysis of your receipts feeds your budget dashboard with suggestions. AI spots unnecessary subscriptions and asks for confirmation before flagging them.",

        /* ── Disclaimer ── */
        magicDisclaimer:    "These examples illustrate just a few of the many possible automations — every solution is fully tailored to your tools and habits.",
    },

    /* ──────────────────────────── ESPAÑOL ──────────────────────────── */
    es: {
        navSubtitle:        "Automatización a medida · Les Cluses, Francia",

        heroBadge:          "Para profesionales y particulares",

        heroStatus:         "Sistemas activos",
        heroTitle1:         "La IA trabaja duro.",
        heroTitle2:         "Tú triunfas.",
        heroSubtitle:       "Automatizaciones inteligentes trabajando para ti, las 24h, sin esfuerzo.",
        scrollHint:         "Ver las soluciones",

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

        /* ── Focus Overlay ── */
        focusTrigger:       "Explicaciones concretas con ejemplos",
        focusQuestion:      "¿Cómo podemos ayudarte?",
        focusProLabel:      "Soluciones Profesionales",
        focusPersoLabel:    "Automatización Personal",
        focusBackBtn:       "Volver",
        focusProTitle:      "Elige tu sector",
        tileImmo:           "Inmobiliaria",
        tileGites:          "Alquileres Vacacionales",
        tileEnt:            "Empresas",

        /* ── Modal: Inmobiliaria ── */
        modalImmoTitle:     "Visita solo con compradores cualificados.",
        modalImmoP1Label:   "Filtro IA",
        modalImmoP1Desc:    "Gracias a un formulario rellenado por tu prospecto, sus criterios son analizados por la IA que te prepara una ficha resumen. A tu elección: la recibes para validación, o se integra automáticamente en tu CRM.",
        modalImmoP2Label:   "Tasación",
        modalImmoP2Desc:    "Al recibir una solicitud de tasación, la IA extrae los datos del inmueble y genera un pre-informe guardado como borrador. Solo tienes que verificarlo con un clic antes de enviarlo al vendedor.",
        modalImmoP3Label:   "Informe de visita",
        modalImmoP3Desc:    "Envía un simple memo de voz después de tu visita: la IA redacta un informe profesional impecable. Puedes revisarlo como borrador, o dejarlo enviar directamente.",

        /* ── Modal: Alquileres ── */
        modalGitesTitle:    "Tu conserjería en piloto automático.",
        modalGitesP1Label:  "Contratos",
        modalGitesP1Desc:   "Gracias a la información de reserva, el contrato de alquiler se rellena solo. Tú eliges: enviarlo instantáneamente para firma electrónica, o generarlo como borrador para verificación.",
        modalGitesP2Label:  "Bienvenida",
        modalGitesP2Desc:   "Un libro de bienvenida se prepara y traduce automáticamente la víspera de la llegada. El envío por WhatsApp puede ser 100% automatizado o requerir tu validación final en tu teléfono.",
        modalGitesP3Label:  "Reseñas",
        modalGitesP3Desc:   "Al día siguiente de la salida, un mensaje cálido se prepara para asegurar su satisfacción. Un simple clic de validación por tu parte basta para enviarlo y recoger tus reseñas de 5 estrellas.",

        /* ── Modal: Empresas ── */
        modalEntTitle:      "El fin absoluto de la entrada manual de datos.",
        modalEntP1Label:    "Facturas",
        modalEntP1Desc:     "Al reenviar tus facturas PDF a una dirección dedicada, la IA lee y pre-rellena tu panel financiero. Mantienes el control total: las líneas permanecen \"pendientes de aprobar\" hasta tu confirmación.",
        modalEntP2Label:    "Presupuestos",
        modalEntP2Desc:     "Para cada solicitud de presupuesto, la información del cliente se extrae y prepara como borrador en tu software comercial. Una verificación rápida, y la ficha se valida sin teclear nada.",
        modalEntP3Label:    "Notas de gastos",
        modalEntP3Desc:     "Tus empleados fotografían sus recibos: la IA extrae el importe y el IVA. El reembolso y el asiento contable simplemente esperan tu clic de validación.",

        /* ── Modal: Personal ── */
        modalPersoTitle:    "Recupera el control de tu tiempo libre.",
        modalPersoP1Label:  "Organización administrativa",
        modalPersoP1Desc:   "Cuando una factura llega por correo, se descarga y clasifica. Puedes configurar el sistema para que la coloque en una carpeta \"Por revisar\", o la archive definitivamente.",
        modalPersoP2Label:  "Asistente diario",
        modalPersoP2Desc:   "Al conectar tus calendarios, la IA te prepara un resumen de tu jornada. Recibes un borrador de tu planning cada mañana, para quedarte solo con lo esencial.",
        modalPersoP3Label:  "Presupuesto",
        modalPersoP3Desc:   "El análisis de tus recibos alimenta tu tabla de presupuesto con sugerencias. La IA detecta suscripciones innecesarias y te pide confirmación antes de señalarlas.",

        /* ── Disclaimer ── */
        magicDisclaimer:    "Estos ejemplos ilustran solo algunas de las muchas automatizaciones posibles — cada solución se adapta por completo a tus herramientas y hábitos.",
    },
};
