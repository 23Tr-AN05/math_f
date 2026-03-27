<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mat_f - Mathématiques</title>

<!-- Police manuscrite -->
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
<!-- Font Awesome pour les icônes -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: #333;
}

/* HEADER */
header {
  background: linear-gradient(135deg, #1e90ff 0%, #0066cc 100%);
  color: white;
  text-align: center;
  padding: 30px 20px;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  position: relative;
  overflow: hidden;
}

header::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 1%, transparent 1%);
  background-size: 50px 50px;
  animation: shimmer 20s linear infinite;
}

@keyframes shimmer {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

header h1 {
  font-size: 2.5em;
  margin-bottom: 5px;
  position: relative;
  z-index: 1;
  font-family: 'Pacifico', cursive;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

header p {
  font-size: 1em;
  position: relative;
  z-index: 1;
  opacity: 0.9;
}

/* CONTAINER */
.container {
  max-width: 1200px;
  margin: -20px auto 0;
  padding: 20px;
  position: relative;
  z-index: 2;
}

/* NAVBAR */
.nav-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  background: rgba(255,255,255,0.95);
  border-radius: 50px;
  padding: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
}

.nav-bar button, .nav-bar a {
  padding: 10px 24px;
  border: none;
  background: transparent;
  color: #333;
  cursor: pointer;
  font-size: 0.95em;
  font-weight: 600;
  border-radius: 40px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.nav-bar button i, .nav-bar a i {
  font-size: 1em;
}

.nav-bar button:hover, .nav-bar a:hover {
  background: linear-gradient(135deg, #1e90ff, #0066cc);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(30,144,255,0.3);
}

.nav-bar button.active {
  background: linear-gradient(135deg, #1e90ff, #0066cc);
  color: white;
}

/* SECTIONS */
.section {
  display: none;
  background: rgba(255,255,255,0.98);
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section.active {
  display: block;
}

/* TITRES */
h2 {
  color: #1e90ff;
  margin-bottom: 20px;
  font-size: 1.6em;
  border-left: 5px solid #1e90ff;
  padding-left: 15px;
}

.hand-title {
  text-align: center;
  font-family: 'Pacifico', cursive;
  border-left: none;
  font-size: 1.8em;
}

h3 {
  color: #555;
  margin: 15px 0 12px 0;
  font-size: 1.2em;
}

/* LAYOUT CALENDRIER - 2 COLONNES */
.calendar-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .calendar-layout {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

/* CALENDRIER COMPACT */
.calendar-compact {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.calendar-header {
  background: linear-gradient(135deg, #1e90ff, #0066cc);
  color: white;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.calendar-header h4 {
  font-size: 1em;
  margin: 0;
}

.calendar-nav {
  display: flex;
  gap: 10px;
}

.calendar-nav button {
  background: rgba(255,255,255,0.2);
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.8em;
  transition: all 0.2s;
}

.calendar-nav button:hover {
  background: rgba(255,255,255,0.4);
  transform: scale(1.05);
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: #e0e0e0;
}

.day-name {
  background: #f5f5f5;
  padding: 8px 4px;
  text-align: center;
  font-weight: 600;
  font-size: 0.75em;
  color: #666;
}

.date-cell {
  background: white;
  padding: 8px 4px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  min-height: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.85em;
}

.date-cell:hover {
  background: #e8f0ff;
  transform: scale(1.02);
}

.date-cell.other-month {
  color: #ccc;
  background: #fafafa;
}

.date-number {
  font-weight: 600;
}

.event-indicator {
  width: 6px;
  height: 6px;
  background: #ff6b6b;
  border-radius: 50%;
  margin-top: 3px;
}

/* ÉVÉNEMENTS À VENIR - STYLE COMPACT */
.events-sidebar {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.events-sidebar h3 {
  margin: 0 0 12px 0;
  font-size: 1em;
  color: #1e90ff;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 2px solid #1e90ff;
  padding-bottom: 8px;
}

.event-item {
  background: white;
  padding: 10px;
  margin: 8px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-left: 3px solid #1e90ff;
  display: flex;
  align-items: center;
  gap: 10px;
}

.event-item:hover {
  transform: translateX(3px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.event-item i {
  font-size: 1.1em;
  color: #1e90ff;
}

.event-item-info {
  flex: 1;
}

.event-item-info strong {
  font-size: 0.85em;
  display: block;
}

.event-item-info small {
  font-size: 0.7em;
  color: #888;
}

/* DÉTAILS ÉVÉNEMENT EN DESSOUS */
.event-details-section {
  margin-top: 20px;
  padding: 15px;
  background: #f0f7ff;
  border-radius: 12px;
  border-left: 4px solid #1e90ff;
  display: none;
}

.event-details-section.show {
  display: block;
  animation: fadeIn 0.3s ease;
}

.event-details-section h4 {
  color: #1e90ff;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* LISTES */
ul {
  list-style: none;
  padding: 0;
}

ul li {
  background: #f8fbff;
  margin: 8px 0;
  padding: 10px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  border-left: 3px solid #1e90ff;
}

ul li:hover {
  transform: translateX(5px);
  background: #e8f0ff;
}

ul li a {
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9em;
}

ul li a:hover {
  color: #1e90ff;
}

/* ACCORDION */
.accordion {
  background: #eef3f8;
  padding: 12px 15px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 12px;
  font-weight: 600;
  font-size: 0.95em;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  width: 100%;
  text-align: left;
}

.accordion:hover {
  background: #1e90ff;
  color: white;
}

.accordion::after {
  content: '\f107';
  font-family: 'Font Awesome 6 Free';
  font-weight: 900;
  transition: transform 0.3s;
}

.accordion.active::after {
  transform: rotate(180deg);
}

.panel {
  display: none;
  padding: 12px 15px;
  background: #f9f9f9;
  border-radius: 0 0 10px 10px;
  margin-top: -5px;
}

.panel.show {
  display: block;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* LOGIN BOX */
.login-box {
  max-width: 400px;
  margin: 20px auto;
  padding: 25px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
}

.login-box h2 {
  text-align: center;
  border-left: none;
  margin-bottom: 20px;
  font-size: 1.4em;
}

.login-box input {
  width: 100%;
  padding: 10px 12px;
  margin: 8px 0;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.9em;
  transition: all 0.3s ease;
}

.login-box input:focus {
  outline: none;
  border-color: #1e90ff;
}

.login-box button {
  width: 100%;
  padding: 10px;
  background: linear-gradient(135deg, #1e90ff, #0066cc);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.login-box button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(30,144,255,0.3);
}

/* CONTENU PROTÉGÉ */
.protected-content {
  animation: fadeIn 0.5s ease;
}

.protected-content h2 {
  border-left-color: #ff6b6b;
}

.logout-btn {
  background: linear-gradient(135deg, #ff6b6b, #ee5a5a) !important;
  margin-top: 20px;
  width: auto;
  display: inline-block;
  padding: 10px 20px;
}

.logout-btn:hover {
  background: linear-gradient(135deg, #ee5a5a, #dd4a4a) !important;
}

.error-message {
  color: #ff6b6b;
  margin-top: 10px;
  font-size: 0.85em;
}

.success-message {
  color: #51cf66;
  margin-top: 10px;
  font-size: 0.85em;
}

/* SECTION CITATIONS */
.citations-section {
  margin-top: 30px;
  padding: 25px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.citations-section::before {
  content: '"';
  font-family: 'Pacifico', cursive;
  font-size: 120px;
  position: absolute;
  left: 15px;
  top: -20px;
  opacity: 0.1;
  color: #1e90ff;
}

.citations-section h3 {
  color: #1e90ff;
  margin-bottom: 20px;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.citation-container {
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.citation-text {
  font-style: italic;
  font-size: 1.2em;
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 80%;
  animation: fadeInCitation 0.8s ease;
}

.citation-author {
  font-style: normal;
  font-size: 0.95em;
  color: #1e90ff;
  text-align: right;
  width: 100%;
  margin-top: 10px;
  font-weight: 500;
  animation: fadeInCitation 0.8s ease;
  position: relative;
  padding-right: 20px;
}

.citation-author::before {
  content: "— ";
  font-weight: bold;
}

.citation-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
  padding: 10px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #1e90ff;
  width: 20px;
  border-radius: 10px;
}

.dot:hover {
  background: #1e90ff;
  transform: scale(1.2);
}

.citation-timer {
  font-size: 0.7em;
  color: #888;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.citation-controls {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}

.citation-controls button {
  background: rgba(30,144,255,0.1);
  border: none;
  padding: 8px 12px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #1e90ff;
  font-size: 0.85em;
}

.citation-controls button:hover {
  background: #1e90ff;
  color: white;
  transform: scale(1.05);
}

@keyframes fadeInCitation {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* POPUP */
.popup {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(5px);
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.popup-content {
  background: white;
  padding: 25px;
  width: 90%;
  max-width: 350px;
  margin: 100px auto;
  border-radius: 16px;
  text-align: center;
  position: relative;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.close {
  position: absolute;
  right: 12px;
  top: 8px;
  cursor: pointer;
  font-size: 20px;
  color: #999;
  transition: color 0.3s;
}

.close:hover {
  color: #333;
}

.btn {
  background: linear-gradient(135deg, #1e90ff, #0066cc);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.85em;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.btn-small {
  padding: 5px 12px;
  font-size: 0.75em;
}

.btn:hover {
  transform: translateY(-2px);
}

/* INFOS */
.info-list {
  margin-top: 20px;
}

.info-list li {
  background: #fff;
  border-left-color: #ffa500;
}

hr {
  margin: 15px 0;
  border: none;
  border-top: 1px solid #e0e0e0;
}
</style>
</head>

<body>

<header>
  <h1>Mat_f</h1>
  <p>Bienvenue sur le site de mathématiques</p>
</header>

<div class="container">

  <!-- NAVIGATION -->
  <div class="nav-bar">
    <button onclick="openSection('Accueil')" id="nav-Accueil">
      <i class="fas fa-home"></i> Accueil
    </button>
    <button onclick="openSection('Premiere')" id="nav-Premiere">
      <i class="fas fa-graduation-cap"></i> Première
    </button>
    <button onclick="openSection('Terminale')" id="nav-Terminale">
      <i class="fas fa-chalkboard-user"></i> Terminale
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
    <p>Site de cours et ressources pour le Baccalauréat.</p>

    <hr>

    <!-- LAYOUT: CALENDRIER + ÉVÉNEMENTS À VENIR -->
    <div class="calendar-layout">
      <!-- Calendrier automatique -->
      <div class="calendar-compact">
        <div class="calendar-header">
          <h4 id="current-month-year">Mars 2026</h4>
          <div class="calendar-nav">
            <button onclick="changeMonth(-1)"><i class="fas fa-chevron-left"></i></button>
            <button onclick="changeMonth(1)"><i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
        <div class="calendar-grid" id="calendar-grid">
          <!-- Généré automatiquement par JS -->
        </div>
      </div>

      <!-- Événements à venir (sidebar) -->
      <div class="events-sidebar">
        <h3><i class="fas fa-bell"></i> Événements à venir</h3>
        <div id="upcoming-events-list">
          <!-- Liste générée automatiquement -->
        </div>
      </div>
    </div>

    <!-- Détails de l'événement (en dessous) -->
    <div id="event-details" class="event-details-section">
      <h4><i class="fas fa-info-circle"></i> Détails de l'événement</h4>
      <p id="event-text"></p>
      <button class="btn btn-small" onclick="closeEventDetails()">Fermer</button>
    </div>

    <!-- Informations importantes -->
    <div class="info-list">
      <h3><i class="fas fa-bullhorn"></i> Informations importantes</h3>
      <ul>
        <li><i class="fas fa-calendar-alt"></i> DS prévu la semaine prochaine</li>
        <li><i class="fas fa-book-open"></i> Pensez à réviser les probabilités</li>
        <li><i class="fas fa-clock"></i> Les cours reprennent le lundi</li>
      </ul>
    </div>

    <!-- SECTION CITATIONS -->
    <div class="citations-section">
      <h3><i class="fas fa-quote-left"></i> Citation du moment <i class="fas fa-quote-right"></i></h3>
      <div class="citation-container">
        <div class="citation-text" id="citation-text">
          Chargement des citations...
        </div>
        <div class="citation-author" id="citation-author">
          &nbsp;
        </div>
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

  <!-- SECTION PREMIERE -->
  <div id="Premiere" class="section">
    <h2 class="hand-title"><i class="fas fa-star"></i> Première Spécialité</h2>

    <ul>
      <li><a href="#"><i class="fas fa-clock"></i> 📄 Emploi du temps</a></li>
      <li><a href="#"><i class="fas fa-book"></i> 📘 Programme de l'année</a></li>
    </ul>

    <button class="accordion">Chapitre 1 : Polynôme du second degré</button>
    <div class="panel">
      <ul>
        <li><a href="#"><i class="fas fa-file-alt"></i> Cours</a></li>
        <li><a href="#"><i class="fas fa-chalkboard"></i> TD</a></li>
        <li><a href="#"><i class="fas fa-check-circle"></i> Correction</a></li>
        <li><a href="#"><i class="fas fa-dumbbell"></i> Exercices</a></li>
      </ul>
    </div>

    <button class="accordion">Chapitre 2 : Probabilités</button>
    <div class="panel">
      <ul>
        <li><a href="#"><i class="fas fa-file-alt"></i> Cours</a></li>
        <li><a href="#"><i class="fas fa-chalkboard"></i> TD</a></li>
      </ul>
    </div>

    <button class="accordion">Chapitre 3 : Fonctions</button>
    <div class="panel">
      <ul>
        <li><a href="#"><i class="fas fa-file-alt"></i> Cours</a></li>
        <li><a href="#"><i class="fas fa-chalkboard"></i> TD</a></li>
      </ul>
    </div>
  </div>

  <!-- SECTION TERMINALE -->
  <div id="Terminale" class="section">
    <h2><i class="fas fa-graduation-cap"></i> Terminale</h2>
    <ul>
      <li><a href="#"><i class="fas fa-file-alt"></i> Cours</a></li>
      <li><a href="#"><i class="fas fa-chalkboard"></i> TD</a></li>
      <li><a href="#"><i class="fas fa-history"></i> Annales Bac</a></li>
      <li><a href="#"><i class="fas fa-video"></i> Vidéos explicatives</a></li>
    </ul>
  </div>

  <!-- SECTION MATH-FLE AVEC SYSTÈME DE CONNEXION -->
  <div id="MathFLE" class="section">
    <!-- Formulaire de connexion -->
    <div id="login-box" class="login-box">
      <h2><i class="fas fa-language"></i> Math-FLE</h2>
      <p>Espace réservé aux étudiants</p>
      
      <input type="text" id="username" placeholder="Identifiant">
      <input type="password" id="password" placeholder="Mot de passe">
      <button onclick="checkLogin()">Se connecter</button>
      <div id="login-message"></div>
      <p style="margin-top: 15px; font-size: 0.8em; color: #888;">
        <i class="fas fa-info-circle"></i> Identifiant: admin | Mot de passe: 1234
      </p>
    </div>

    <!-- Contenu protégé (caché par défaut) -->
    <div id="protected-content" class="protected-content" style="display: none;">
      <h2><i class="fas fa-lock-open"></i> Espace Math-FLE</h2>
      <p>Bienvenue dans l'espace dédié aux étudiants ! Voici vos ressources en français langue étrangère.</p>
      
      <h3><i class="fas fa-graduation-cap"></i> Vocabulaire mathématique</h3>
      <ul>
        <li><a href="#"><i class="fas fa-download"></i> Fiche 1 : Les nombres et opérations</a></li>
        <li><a href="#"><i class="fas fa-download"></i> Fiche 2 : Les fonctions</a></li>
        <li><a href="#"><i class="fas fa-download"></i> Fiche 3 : La géométrie</a></li>
        <li><a href="#"><i class="fas fa-download"></i> Fiche 4 : Les probabilités</a></li>
      </ul>

      <h3><i class="fas fa-headphones"></i> Exercices audio</h3>
      <ul>
        <li><a href="#"><i class="fas fa-play-circle"></i> Compréhension orale - Les équations</a></li>
        <li><a href="#"><i class="fas fa-play-circle"></i> Dictée de nombres</a></li>
        <li><a href="#"><i class="fas fa-play-circle"></i> Problème à l'oral</a></li>
      </ul>

      <h3><i class="fas fa-video"></i> Vidéos explicatives</h3>
      <ul>
        <li><a href="#"><i class="fas fa-video"></i> Le vocabulaire des fractions</a></li>
        <li><a href="#"><i class="fas fa-video"></i> Comment résoudre une équation</a></li>
        <li><a href="#"><i class="fas fa-video"></i> Les symboles mathématiques</a></li>
      </ul>

      <h3><i class="fas fa-comments"></i> Glossaire multilingue</h3>
      <ul>
        <li><a href="#"><i class="fas fa-book"></i> Français - Anglais</a></li>
        <li><a href="#"><i class="fas fa-book"></i> Français - Arabe</a></li>
        <li><a href="#"><i class="fas fa-book"></i> Français - Espagnol</a></li>
      </ul>

      <button onclick="logout()" class="btn logout-btn">
        <i class="fas fa-sign-out-alt"></i> Se déconnecter
      </button>
    </div>
  </div>

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

// ============ GESTION DU CALENDRIER AUTOMATIQUE ============
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

// Base de données des événements
const eventsDatabase = {
    "2026-03-01": { title: "DS Chapitre 4 et 5", description: "Réviser bien l'exercice 5 du TD.<br>📅 Date: 1er mars 2026<br>⏰ Durée: 2h<br>📍 Salle: 204" },
    "2026-03-04": { title: "DM à rendre", description: "Exercices 1 à 10.<br>📅 Date limite: 4 mars 2026<br>📝 À rendre en début d'heure" },
    "2026-03-10": { title: "Contrôle continu", description: "Chapitres 1 à 3.<br>📅 Date: 10 mars 2026<br>⏰ Durée: 1h30" },
    "2026-04-15": { title: "DS sur les fonctions", description: "Fonctions exponentielles et logarithme<br>📅 Date: 15 avril 2026<br>⏰ Durée: 2h" },
    "2026-04-20": { title: "DM à rendre", description: "Exercices sur les probabilités<br>📅 Date limite: 20 avril 2026" },
    "2026-05-05": { title: "Bac Blanc", description: "Épreuve de mathématiques<br>📅 Date: 5 mai 2026<br>⏰ Durée: 4h" }
};

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
            dateDiv.onclick = () => showPopup(monthEvents[day].title);
        } else {
            const dateStr = `${day} ${getMonthName(currentMonth)} ${currentYear}`;
            dateDiv.onclick = () => showPopup(`Pas d'événement prévu le ${dateStr}`);
        }
        calendarGrid.appendChild(dateDiv);
    }
    
    document.getElementById('current-month-year').textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    updateUpcomingEvents();
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
}

function getMonthName(month) {
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    return months[month];
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
    if (title.includes('DS') || title.includes('Contrôle')) return 'fa-pen-fancy';
    if (title.includes('DM')) return 'fa-tasks';
    if (title.includes('Bac')) return 'fa-graduation-cap';
    return 'fa-calendar-alt';
}

function showEventDetailsFromDate(dateStr) {
    const event = eventsDatabase[dateStr];
    if (event) {
        const textElement = document.getElementById("event-text");
        const detailsBox = document.getElementById("event-details");
        textElement.innerHTML = `<strong>${event.title}</strong><br>${event.description}`;
        detailsBox.classList.add('show');
    }
}

function closeEventDetails() {
    document.getElementById("event-details").classList.remove('show');
}

// ============ FONCTIONS DE CONNEXION ============
function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('login-message');
    
    if(username === "admin" && password === "1234") {
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('protected-content').style.display = 'block';
        messageDiv.innerHTML = '<p class="success-message"><i class="fas fa-check-circle"></i> Connexion réussie !</p>';
    } else {
        messageDiv.innerHTML = '<p class="error-message"><i class="fas fa-exclamation-triangle"></i> Identifiant ou mot de passe incorrect</p>';
    }
}

function logout() {
    document.getElementById('protected-content').style.display = 'none';
    document.getElementById('login-box').style.display = 'block';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('login-message').innerHTML = '';
}

// ============ GESTION DES CITATIONS ============
let citations = [];
let currentCitationIndex = 0;
let autoPlayInterval = null;
let autoPlayActive = true;
const CITATION_INTERVAL = 20000; // 20 secondes

// Charger les citations depuis le fichier JSON
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
        } else {
            document.getElementById('citation-text').textContent = 'Aucune citation disponible pour le moment.';
            document.getElementById('citation-author').textContent = '';
        }
    } catch (error) {
        console.error('Erreur lors du chargement des citations:', error);
        document.getElementById('citation-text').textContent = 'Impossible de charger les citations. Veuillez vérifier le fichier citations.json';
        document.getElementById('citation-author').textContent = '';
        
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
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentCitationIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function goToCitation(index) {
    if (index >= 0 && index < citations.length) {
        currentCitationIndex = index;
        displayCitation(currentCitationIndex);
        if (autoPlayActive) {
            resetAutoPlay();
        }
    }
}

function nextCitation() {
    if (citations.length === 0) return;
    currentCitationIndex = (currentCitationIndex + 1) % citations.length;
    displayCitation(currentCitationIndex);
    if (autoPlayActive) {
        resetAutoPlay();
    }
}

function previousCitation() {
    if (citations.length === 0) return;
    currentCitationIndex = (currentCitationIndex - 1 + citations.length) % citations.length;
    displayCitation(currentCitationIndex);
    if (autoPlayActive) {
        resetAutoPlay();
    }
}

function startAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
    autoPlayInterval = setInterval(() => {
        if (autoPlayActive && citations.length > 0) {
            nextCitation();
        }
    }, CITATION_INTERVAL);
}

function resetAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
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
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }
}

// ============ NAVIGATION ============
function openSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-bar button').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.getElementById(`nav-${id}`);
    if (activeBtn) activeBtn.classList.add('active');
}

// ============ ACCORDION ============
document.querySelectorAll(".accordion").forEach(btn => {
    btn.addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        panel.classList.toggle("show");
    });
});

// ============ POPUP ============
function showPopup(text) {
    document.getElementById("popup-text").innerHTML = text;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// ============ INITIALISATION ============
document.addEventListener('DOMContentLoaded', () => {
    openSection("Accueil");
    generateCalendar();
    loadCitations();
    
    document.getElementById('popup').addEventListener('click', (e) => {
        if(e.target === document.getElementById('popup')) {
            closePopup();
        }
    });
});

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        closePopup();
        closeEventDetails();
    }
});

</script>

</body>
</html>