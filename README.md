
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mathématiques</title>
<link href="style.css" rel="stylesheet" type="text/css" />
<script src="s.js" data-import=""></script>

<!-- Police manuscrite -->
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
<!-- Font Awesome pour les icônes -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

</head>

<body>

<header>
  <h1>Mathématiques</h1>
  <p>Bienvenue sur le site de mathématiques</p>
</header>

<div class="container">

  <!-- NAVIGATION -->
  <div class="nav-bar">
    <button onclick="openSection('Accueil')" id="nav-Accueil">
      <i class="fas fa-home"></i> Accueil
    </button>
    <button onclick="openSection('Sixieme')" id="nav-Sixieme">
      <i class="fas fa-child"></i> 6ème
    </button>
    <button onclick="openSection('Cinquieme')" id="nav-Cinquieme">
      <i class="fas fa-user-graduate"></i> 5ème
    </button>
    <button onclick="openSection('Quatrieme')" id="nav-Quatrieme">
      <i class="fas fa-user-graduate"></i> 4ème
    </button>
    <button onclick="openSection('Troisieme')" id="nav-Troisieme">
      <i class="fas fa-user-graduate"></i> 3ème
    </button>
    <button onclick="openSection('Seconde')" id="nav-Seconde">
      <i class="fas fa-chalkboard-user"></i> Seconde
    </button>
    <button onclick="openSection('Premiere')" id="nav-Premiere">
      <i class="fas fa-graduation-cap"></i> 1ère
    </button>
    <button onclick="openSection('Terminale')" id="nav-Terminale">
      <i class="fas fa-graduation-cap"></i> Tle
    </button>
    <button onclick="openSection('MathFLE')" id="nav-MathFLE">
      <i class="fas fa-language"></i> Math-FLE
    </button>
    <a href="https://23tr-an05.github.io/francais/" target="_blank">
      <i class="fas fa-book"></i> Français
    </a>
  </div>

  <!-- SECTION ACCUEIL -->
  <div id="Accueil" class="section active">
    <h2><i class="fas fa-home"></i> Bienvenue</h2>
    <p>Site de cours et ressources pour le Collège, le Lycée et le Baccalauréat.</p>

    <hr>

    <!-- LAYOUT: CALENDRIER + ÉVÉNEMENTS À VENIR -->
    <div class="calendar-layout">
      <div class="calendar-compact">
        <div class="calendar-header">
          <h4 id="current-month-year">Mars 2026</h4>
          <div class="calendar-nav">
            <button onclick="changeMonth(-1)"><i class="fas fa-chevron-left"></i></button>
            <button onclick="changeMonth(1)"><i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
        <div class="calendar-grid" id="calendar-grid">
          <div class="loading-spinner" style="padding: 20px;">
            <i class="fas fa-spinner"></i>
            <p>Chargement du calendrier...</p>
          </div>
        </div>
      </div>

      <div class="events-sidebar">
        <h3><i class="fas fa-bell"></i> Événements à venir</h3>
        <div id="upcoming-events-list">
          <div class="loading-spinner" style="padding: 20px;">
            <i class="fas fa-spinner"></i>
            <p>Chargement des événements...</p>
          </div>
        </div>
      </div>
    </div>

    <div id="event-details" class="event-details-section">
      <h4><i class="fas fa-info-circle"></i> Détails de l'événement</h4>
      <p id="event-text"></p>
      <button class="btn btn-small" onclick="closeEventDetails()">Fermer</button>
    </div>

    <div class="info-list">
      <h3><i class="fas fa-bullhorn"></i> Informations importantes</h3>
      <ul>
        <li><i class="fas fa-calendar-alt"></i> Consultez le calendrier pour les dates des DS</li>
        <li><i class="fas fa-book-open"></i> Pensez à réviser régulièrement</li>
        <li><i class="fas fa-clock"></i> Les cours reprennent le lundi</li>
      </ul>
    </div>

    <div class="citations-section">
      <h3><i class="fas fa-quote-left"></i> Citation du moment <i class="fas fa-quote-right"></i></h3>
      <div class="citation-container">
        <div class="citation-text" id="citation-text">Chargement des citations...</div>
        <div class="citation-author" id="citation-author">&nbsp;</div>
      </div>
      <div class="citation-dots" id="citation-dots"></div>
      <div class="citation-controls">
        <button onclick="previousCitation()"><i class="fas fa-backward"></i> Précédent</button>
        <button onclick="toggleAutoPlay()" id="autoPlayBtn"><i class="fas fa-pause"></i> Pause</button>
        <button onclick="nextCitation()"><i class="fas fa-forward"></i> Suivant</button>
      </div>
      <div class="citation-timer">
        <span><i class="fas fa-clock"></i> Changement toutes les <span id="timer-interval">20</span> secondes</span>
        <span><i class="fas fa-layer-group"></i> <span id="citation-count">0</span> citations disponibles</span>
      </div>
    </div>
  </div>

  <!-- SECTIONS DYNAMIQUES -->
  <div id="Sixieme" class="section"><div id="sixieme-content" class="dynamic-content"><div class="loading-spinner"><i class="fas fa-spinner"></i><p>Chargement du contenu de 6ème...</p></div></div></div>
  <div id="Cinquieme" class="section"><div id="cinquieme-content" class="dynamic-content"><div class="loading-spinner"><i class="fas fa-spinner"></i><p>Chargement du contenu de 5ème...</p></div></div></div>
  <div id="Quatrieme" class="section"><div id="quatrieme-content" class="dynamic-content"><div class="loading-spinner"><i class="fas fa-spinner"></i><p>Chargement du contenu de 4ème...</p></div></div></div>
  <div id="Troisieme" class="section"><div id="troisieme-content" class="dynamic-content"><div class="loading-spinner"><i class="fas fa-spinner"></i><p>Chargement du contenu de 3ème...</p></div></div></div>
  <div id="Seconde" class="section"><div id="seconde-content" class="dynamic-content"><div class="loading-spinner"><i class="fas fa-spinner"></i><p>Chargement du contenu de Seconde...</p></div></div></div>
  <div id="Premiere" class="section"><div id="premiere-content" class="dynamic-content"><div class="loading-spinner"><i class="fas fa-spinner"></i><p>Chargement du contenu de Première...</p></div></div></div>
  <div id="Terminale" class="section"><div id="terminale-content" class="dynamic-content"><div class="loading-spinner"><i class="fas fa-spinner"></i><p>Chargement du contenu de Terminale...</p></div></div></div>
  <div id="MathFLE" class="section"><div id="mathfle-content" class="dynamic-content"><div class="loading-spinner"><i class="fas fa-spinner"></i><p>Chargement de l'espace Math-FLE...</p></div></div></div>

</div>

<!-- POPUP -->
<div id="popup" class="popup">
  <div class="popup-content">
    <span class="close" onclick="closePopup()">×</span>
    <i class="fas fa-calendar-check" style="font-size: 2.5em; color: #1e90ff; margin-bottom: 12px;"></i>
    <p id="popup-text" style="font-size: 1em;"></p>
  </div>
</div>

<script>
// ============ GESTION DU CALENDRIER AVEC FICHIER EXTERNE ============
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let eventsDatabase = {}; // Base de données des événements chargée depuis events.json

// Charger les événements depuis le fichier JSON externe
async function loadEvents() {
    try {
        const response = await fetch('events.json');
        const data = await response.json();
        
        // Convertir le tableau d'événements en objet pour un accès facile
        eventsDatabase = {};
        data.events.forEach(event => {
            eventsDatabase[event.date] = {
                title: event.title,
                description: event.description
            };
        });
        
        console.log(`${data.events.length} événements chargés avec succès`);
        
        // Recharger le calendrier avec les nouveaux événements
        generateCalendar();
        updateUpcomingEvents();
        
        return true;
    } catch (error) {
        console.error('Erreur lors du chargement des événements:', error);
        // Événements par défaut en cas d'erreur
        eventsDatabase = {
            "2026-03-01": { title: "DS Chapitre 4 et 5", description: "Réviser bien l'exercice 5 du TD.<br>📅 Date: 1er mars 2026<br>⏰ Durée: 2h<br>📍 Salle: 204" },
            "2026-03-04": { title: "DM à rendre", description: "Exercices 1 à 10.<br>📅 Date limite: 4 mars 2026<br>📝 À rendre en début d'heure" },
            "2026-03-10": { title: "Contrôle continu", description: "Chapitres 1 à 3.<br>📅 Date: 10 mars 2026<br>⏰ Durée: 1h30" }
        };
        generateCalendar();
        updateUpcomingEvents();
        return false;
    }
}

function getEventsForMonth(year, month) {
    const events = {};
    const monthStr = String(month + 1).padStart(2, '0');
    
    for (const [date, event] of Object.entries(eventsDatabase)) {
        if (date.startsWith(`${year}-${monthStr}`)) {
            const day = parseInt(date.split('-')[2]);
            events[day] = event;
        }
    }
    return events;
}

function generateCalendar() {
    const calendarGrid = document.getElementById('calendar-grid');
    if (!calendarGrid) return;
    calendarGrid.innerHTML = '';
    
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    days.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day-name';
        dayDiv.textContent = day;
        calendarGrid.appendChild(dayDiv);
    });
    
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    let firstDayIndex = firstDayOfMonth.getDay();
    firstDayIndex = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const monthEvents = getEventsForMonth(currentYear, currentMonth);
    
    for (let i = 0; i < firstDayIndex; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'date-cell other-month';
        emptyDiv.innerHTML = '<div class="date-number"></div>';
        calendarGrid.appendChild(emptyDiv);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dateDiv = document.createElement('div');
        dateDiv.className = 'date-cell';
        dateDiv.innerHTML = `<div class="date-number">${day}</div>`;
        
        if (monthEvents[day]) {
            const indicator = document.createElement('div');
            indicator.className = 'event-indicator';
            dateDiv.appendChild(indicator);
            const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            dateDiv.onclick = () => showEventDetailsFromDate(dateStr);
        } else {
            dateDiv.onclick = () => showPopup(`Pas d'événement prévu le ${day} ${getMonthName(currentMonth)} ${currentYear}`);
        }
        
        calendarGrid.appendChild(dateDiv);
    }
    
    const monthYearElement = document.getElementById('current-month-year');
    if (monthYearElement) {
        monthYearElement.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    }
}

function changeMonth(delta) {
    currentMonth += delta;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar();
    updateUpcomingEvents();
}

function getMonthName(month) {
    return ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'][month];
}

function updateUpcomingEvents() {
    const eventsList = document.getElementById('upcoming-events-list');
    if (!eventsList) return;
    eventsList.innerHTML = '';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const upcomingEvents = [];
    
    for (const [dateStr, event] of Object.entries(eventsDatabase)) {
        const eventDate = new Date(dateStr);
        if (eventDate >= today) {
            upcomingEvents.push({ date: eventDate, dateStr: dateStr, event: event });
        }
    }
    
    upcomingEvents.sort((a, b) => a.date - b.date);
    const nextEvents = upcomingEvents.slice(0, 5);
    
    if (nextEvents.length === 0) {
        eventsList.innerHTML = '<p style="text-align: center; color: #888; padding: 20px;">Aucun événement à venir</p>';
        return;
    }
    
    nextEvents.forEach(item => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event-item';
        eventDiv.onclick = () => showEventDetailsFromDate(item.dateStr);
        const date = item.date;
        const day = date.getDate();
        const month = getMonthName(date.getMonth());
        
        eventDiv.innerHTML = `
            <i class="fas ${getEventIcon(item.event.title)}"></i>
            <div class="event-item-info">
                <strong>${item.event.title}</strong>
                <small>${day} ${month} ${date.getFullYear()}</small>
            </div>
        `;
        
        eventsList.appendChild(eventDiv);
    });
}

function getEventIcon(title) {
    if (title.includes('DS') || title.includes('Contrôle') || title.includes('Devoir')) return 'fa-pen-fancy';
    if (title.includes('DM')) return 'fa-tasks';
    if (title.includes('Bac')) return 'fa-graduation-cap';
    if (title.includes('Rendez-vous') || title.includes('parents')) return 'fa-users';
    if (title.includes('Correction')) return 'fa-check-circle';
    return 'fa-calendar-alt';
}

function showEventDetailsFromDate(dateStr) {
    const event = eventsDatabase[dateStr];
    if (event) {
        const textElement = document.getElementById("event-text");
        const detailsBox = document.getElementById("event-details");
        
        if (textElement && detailsBox) {
            textElement.innerHTML = `<strong>${event.title}</strong><br>${event.description}`;
            detailsBox.classList.add('show');
        }
    }
}

function closeEventDetails() {
    const detailsBox = document.getElementById("event-details");
    if (detailsBox) {
        detailsBox.classList.remove('show');
    }
}

// ============ CITATIONS ============
let citations = [];
let currentCitationIndex = 0;
let autoPlayInterval = null;
let autoPlayActive = true;
const CITATION_INTERVAL = 20000;

async function loadCitations() {
    try {
        const response = await fetch('citations.json');
        const data = await response.json();
        citations = data.citations;
        document.getElementById('citation-count').textContent = citations.length;
        if (citations.length > 0) {
            currentCitationIndex = Math.floor(Math.random() * citations.length);
            displayCitation(currentCitationIndex);
            startAutoPlay();
            createDots();
        }
    } catch (error) {
        citations = [
            { texte: "Les mathématiques sont le langage dans lequel Dieu a écrit l'univers.", auteur: "Galilée" },
            { texte: "En mathématiques, on ne comprend pas les choses, on s'y habitue.", auteur: "John von Neumann" },
            { texte: "Les mathématiques sont la reine des sciences.", auteur: "Carl Friedrich Gauss" }
        ];
        document.getElementById('citation-count').textContent = citations.length;
        displayCitation(0);
        startAutoPlay();
        createDots();
    }
}

function displayCitation(index) {
    if (!citations.length) return;
    const citation = citations[index];
    const citationText = document.getElementById('citation-text');
    const citationAuthor = document.getElementById('citation-author');
    citationText.style.animation = 'none';
    citationAuthor.style.animation = 'none';
    setTimeout(() => {
        citationText.style.animation = 'fadeInCitation 0.8s ease';
        citationAuthor.style.animation = 'fadeInCitation 0.8s ease';
    }, 10);
    citationText.innerHTML = `<i class="fas fa-quote-left" style="font-size: 0.8em; opacity: 0.5; margin-right: 8px;"></i> ${citation.texte} <i class="fas fa-quote-right" style="font-size: 0.8em; opacity: 0.5; margin-left: 8px;"></i>`;
    citationAuthor.textContent = citation.auteur;
    updateActiveDot();
}

function createDots() {
    const dotsContainer = document.getElementById('citation-dots');
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    citations.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === currentCitationIndex) dot.classList.add('active');
        dot.onclick = () => goToCitation(index);
        dotsContainer.appendChild(dot);
    });
}

function updateActiveDot() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        if (index === currentCitationIndex) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

function goToCitation(index) {
    if (index >= 0 && index < citations.length) {
        currentCitationIndex = index;
        displayCitation(currentCitationIndex);
        if (autoPlayActive) resetAutoPlay();
    }
}

function nextCitation() {
    if (citations.length === 0) return;
    currentCitationIndex = (currentCitationIndex + 1) % citations.length;
    displayCitation(currentCitationIndex);
    if (autoPlayActive) resetAutoPlay();
}

function previousCitation() {
    if (citations.length === 0) return;
    currentCitationIndex = (currentCitationIndex - 1 + citations.length) % citations.length;
    displayCitation(currentCitationIndex);
    if (autoPlayActive) resetAutoPlay();
}

function startAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
        if (autoPlayActive && citations.length > 0) nextCitation();
    }, CITATION_INTERVAL);
}

function resetAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    startAutoPlay();
}

function toggleAutoPlay() {
    autoPlayActive = !autoPlayActive;
    const btn = document.getElementById('autoPlayBtn');
    if (autoPlayActive) {
        btn.innerHTML = '<i class="fas fa-pause"></i> Pause';
        startAutoPlay();
    } else {
        btn.innerHTML = '<i class="fas fa-play"></i> Démarrer';
        if (autoPlayInterval) clearInterval(autoPlayInterval);
    }
}

// ============ CHARGEMENT DYNAMIQUE DES CONTENUS ============
async function loadContent(level, file) {
    const container = document.getElementById(`${level}-content`);
    if (!container) return;
    try {
        const response = await fetch(file);
        const html = await response.text();
        container.innerHTML = html;
        
        setTimeout(() => {
            document.querySelectorAll(`#${level} .accordion`).forEach(btn => {
                btn.addEventListener("click", function() {
                    this.classList.toggle("active");
                    let panel = this.nextElementSibling;
                    if (panel) panel.classList.toggle("show");
                });
            });
            
            if (level === 'mathfle') {
                initFLEAccordions();
                checkFLEStoredLogin();
            }
        }, 100);
    } catch (error) {
        console.error('Erreur lors du chargement:', error);
        container.innerHTML = `<div style="text-align: center; padding: 50px; color: #ff6b6b;"><i class="fas fa-exclamation-triangle" style="font-size: 3em;"></i><p>Erreur lors du chargement du contenu.</p><p>Vérifiez que le fichier ${file} existe.</p></div>`;
    }
}

// ============ FONCTIONS MATH-FLE ============
const FLE_USERNAME = "eleve";
const FLE_PASSWORD = "mathematiques2026";

function checkFLELogin() {
    const username = document.getElementById('fle-username');
    const password = document.getElementById('fle-password');
    const messageDiv = document.getElementById('fle-login-message');
    
    if (!username || !password) return;
    
    if(username.value === FLE_USERNAME && password.value === FLE_PASSWORD) {
        const loginContainer = document.getElementById('fle-login-container');
        const protectedContainer = document.getElementById('fle-protected-container');
        
        if (loginContainer) loginContainer.style.display = 'none';
        if (protectedContainer) protectedContainer.style.display = 'block';
        
        if (messageDiv) {
            messageDiv.innerHTML = '<div class="fle-success-message"><i class="fas fa-check-circle"></i> Connexion réussie !</div>';
            setTimeout(() => { messageDiv.innerHTML = ''; }, 2000);
        }
        localStorage.setItem('fleLoggedIn', 'true');
        
        setTimeout(() => { initFLEAccordions(); }, 100);
    } else {
        if (messageDiv) {
            messageDiv.innerHTML = '<div class="fle-error-message"><i class="fas fa-exclamation-triangle"></i> Identifiant ou mot de passe incorrect.</div>';
            setTimeout(() => { messageDiv.innerHTML = ''; }, 3000);
        }
    }
}

function logoutFLE() {
    const protectedContainer = document.getElementById('fle-protected-container');
    const loginContainer = document.getElementById('fle-login-container');
    const username = document.getElementById('fle-username');
    const password = document.getElementById('fle-password');
    const messageDiv = document.getElementById('fle-login-message');
    
    if (protectedContainer) protectedContainer.style.display = 'none';
    if (loginContainer) loginContainer.style.display = 'flex';
    if (username) username.value = '';
    if (password) password.value = '';
    if (messageDiv) messageDiv.innerHTML = '';
    localStorage.removeItem('fleLoggedIn');
}

function showFLELevel(level, buttonElement) {
    const debutant = document.getElementById('fle-debutant');
    const intermediaire = document.getElementById('fle-intermediaire');
    const avance = document.getElementById('fle-avance');
    
    if (debutant) debutant.style.display = 'none';
    if (intermediaire) intermediaire.style.display = 'none';
    if (avance) avance.style.display = 'none';
    
    const selectedLevel = document.getElementById(`fle-${level}`);
    if (selectedLevel) selectedLevel.style.display = 'block';
    
    const buttons = document.querySelectorAll('.fle-level-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (buttonElement) buttonElement.classList.add('active');
}

function checkFLEStoredLogin() {
    if (localStorage.getItem('fleLoggedIn') === 'true') {
        const loginContainer = document.getElementById('fle-login-container');
        const protectedContainer = document.getElementById('fle-protected-container');
        if (loginContainer && protectedContainer) {
            loginContainer.style.display = 'none';
            protectedContainer.style.display = 'block';
            setTimeout(() => { initFLEAccordions(); }, 100);
        }
    }
}

function initFLEAccordions() {
    const accordions = document.querySelectorAll("#fle-protected-container .accordion");
    accordions.forEach(btn => {
        btn.removeEventListener("click", btn._handler);
        btn._handler = function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel) panel.classList.toggle("show");
        };
        btn.addEventListener("click", btn._handler);
    });
}

// ============ NAVIGATION ============
function openSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-bar button').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`nav-${id}`);
    if (activeBtn) activeBtn.classList.add('active');
    
    const contentMap = {
        'Sixieme': { file: 'six.html', level: 'sixieme' },
        'Cinquieme': { file: 'cinq.html', level: 'cinquieme' },
        'Quatrieme': { file: 'quatre.html', level: 'quatrieme' },
        'Troisieme': { file: 'trois.html', level: 'troisieme' },
        'Seconde': { file: 'seconde.html', level: 'seconde' },
        'Premiere': { file: 'premiere.html', level: 'premiere' },
        'Terminale': { file: 'terminale.html', level: 'terminale' },
        'MathFLE': { file: 'math-fle.html', level: 'mathfle' }
    };
    
    if (contentMap[id]) {
        const container = document.getElementById(`${contentMap[id].level}-content`);
        if (container && container.innerHTML.includes('Chargement')) {
            loadContent(contentMap[id].level, contentMap[id].file);
        }
    }
}

// ============ POPUP ============
function showPopup(text) {
    const popupText = document.getElementById("popup-text");
    const popup = document.getElementById("popup");
    if (popupText && popup) {
        popupText.innerHTML = text;
        popup.style.display = "block";
    }
}

function closePopup() {
    const popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "none";
    }
}

// ============ INITIALISATION ============
document.addEventListener('DOMContentLoaded', async () => {
    openSection("Accueil");
    
    // Charger les événements d'abord
    await loadEvents();
    
    // Puis charger les citations
    loadCitations();
    
    document.getElementById('popup').addEventListener('click', (e) => {
        if(e.target === document.getElementById('popup')) closePopup();
    });
});

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') { closePopup(); closeEventDetails(); }
});
</script>

</body>
</html>