<html>
 <head><title>Mathématiques</title>
    <meta charset="utf-8"/>
    <link href="style.css" rel="stylesheet" type="text/css"/>
     <link href="cit.css" rel="stylesheet" type="text/css"/>
     <script src="cit.js" data-import=""></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
#last 

<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">


 <style>
 .collapsible {
  background-color:#313131;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
 }
 .active, .collapsible:hover {
    background-color: #313131;
 }
 .content {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    background-color:#313131;
 }
 </style>
 </head>
 <body>
 <center><p id="para2">Mathémattiques</p></center>
 <p id="para3">Sur ce site, vous trouverez les cours de mathématiques, qui peuvent vous servir. En particulier pour ceux qui se préparent au Baccalauréat ou Brevet</p>
 <br>
<div class="w3-container">
  <h2>Mathématiques </h2>
  <p>Choisissez une classe</p>
</div>
 

<div class="w3-bar w3-black">
  <button class="w3-bar-item w3-button tablink w3-red" onclick="openCity(event,'Ac')">Acceuil</button>
  <!--<button class="w3-bar-item w3-button tablink" onclick="openCity(event,'Six')">Sixième</button>
 <button class="w3-bar-item w3-button tablink" onclick="openCity(event,'Cinq')">Cinquième</button>
  <button class="w3-bar-item w3-button tablink" onclick="openCity(event,'Quatre')">Quatrième</button>
 <button class="w3-bar-item w3-button tablink" onclick="openCity(event,'Trois')">Troisième</button>
  <button class="w3-bar-item w3-button tablink" onclick="openCity(event,'Seconde')">Seconde</button>-->
  <button class="w3-bar-item w3-button tablink" onclick="openCity(event,'Première')">Première G</button>
  <button class="w3-bar-item w3-button tablink" onclick="openCity(event,'Terminale')">Terminale G</button>
  <button class="w3-bar-item w3-button tablink" onclick="openCity(event,'Français')">Français Première-BAC</button>
  <!-- <button class="w3-bar-item w3-button tablink" onclick="openCity(event,'Info')">Informatique</button>-->
</div>
 <div id="Ac" class="w3-container city">
   <p id="para2">Bienvenue</p>
  <p id="para3">Sur ce site, vous trouverez les cours de mathématiques ainsi de français, qui peuvent vous servir.<br /> En particulier pour ceux qui se préparent au Baccalauréat.</p>
 <br />
  <div id="center">
  <p id="para33">Si vous avez des questions vous pouvez envoyer un mail en choissisant la matière concernée. Je vous réponderai plutôt possible par mail ou vous pouvez consulter l'onglet "forum", où je mettrais certaines questions avec leur réponse. 
  <br />&nbsp;&nbsp;&nbsp;⯑ &nbsp;<a title="Question" href="mailto:ozcelebialican2005@gmail.com?subject=J'ai une question%5BMat%5D&amp;body=Ma%20question%20se%20porte%20sur%20les%20mathématiques%20(ne%20changez%20pas%20l'objet%20du%20mail).">Mathémmatiques</a>
  <br />&nbsp;&nbsp;&nbsp;⯑&nbsp;<a title="Question" href="mailto:ozcelebialican2005@gmail.com?subject=J'ai une question%5BFR%5D&amp;body=Ma%20question%20se%20porte%20sur%20le%20français%20 (ne%20changez%20pas%20l'objet%20du%20mail).">Français</a>
  <br /> &nbsp;&nbsp;&nbsp; ‼‽ &nbsp;<a title="Signaler une erreur" href="mailto:ozcelebialican2005@gmail.com?subject=%5BErreur%5D&amp;body=Ma%20question%20se%20porte%20sur%20le%20français%20 (ne%20changez%20pas%20l'objet%20du%20mail).%0ADans%20l'onglet:%0ANom%20du%20fichier:%0AErreur:">Je signale une erreur!</a>
  </p></div>
  <p><font style="color:red"><b>L'onglet Forum</b> est actuellement <b>vide</b>, donc l'onglet est désactivé temporairement (je l'activerai dès lors que j'aurais une question posée)</font></p>
  <p>--</p> 
  <hr />
 </div>

<div class="w3-container">
  <h2>Displaying Quotes</h2>
  <p>The w3-panel class can be used to display quotes:</p>

  <div class="w3-panel w3-leftbar w3-light-grey">
<div onclick='expand_to_fullscreen(this)' class="container-sm expandable" style="max-width:800px">
<div id="quote-zone" class="mt-5 mb-3 rainbow-text"> 
    <div>
        <span id="quote-author"></span>   
        <span id="quote-navigation">
            <i class="bi bi-sm bi-caret-left" onclick="event.stopPropagation(); previous_quote()" tippy="précédente"></i>
            <span id="numero-citation"></span> 
            <i class="bi bi-sm bi-copy" onclick="event.stopPropagation(); copy_quote_to_clipboard()" tippy="copier"></i>
            <i class="bi bi-sm bi-caret-right" onclick="event.stopPropagation(); next_quote()" tippy="suivante"></i>
        </span>
    </div>    
    <div><q id="quote-text"></q></div>
</div>
</div>
  </div>
</div>
<script>
// Data
var quotes_list_old = [
    ["Si la vue d'un bureau encombré évoque un esprit encombré, alors que penser d'un bureau vide.","Albert Einstein"],
    ["Seules deux choses sont infinies : l'univers et la stupidité de l'homme. Et encore, je ne suis pas certain de l'infinité de l'univers.","Albert Einstein"],
    ["Il ne faut pas compter sur ceux qui ont créé les problèmes pour les résoudre.","Albert Einstein"],  
    ["Je ne sais pas quelles seront les armes de la Troisième Guerre mondiale, mais celles de la Quatrième seront des pierres et des bâtons.","Albert Einstein"],
    ["La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.","Albert Einstein"],
    ["La laïcité signifie que dans la société nous sommes définis par notre citoyenneté, et en aucun cas par notre religion.","Abd al Malik"],
    ["Un des secrets du bonheur est de demander beaucoup à soi-même et peu aux autres.","Gertrud von Le Fort"],
    ["Deciding what not to do is as important as deciding what to do.","Steve Jobs"],
    ["Avant internet, on pensait que toute cette stupidité collective était due à un manque d'accès à l'information ? Bon ben apparemment c'était pas ça le problème !", "?"],
    ["J'ai grandi avec les auteurs comme avec des grands frères, ils sont devenus mes tuteurs.","Abd al Malik"],
    ["Le monde est dangereux à vivre ! Non pas tant à cause de ceux qui font le mal, mais à cause de ceux qui regardent et laissent faire.","Albert Einstein"],
    ["On a traité de rêveurs et d'utopistes tous ceux qui, dans l'histoire, ont fait bouger les choses.","Abd al Malik"]
]

var quotes_list = [
    ["La vie est telle une pièce de théâtre, mais sans répétitions. Alors chantez, pleurez, dansez, riez et vivez avant que le rideau ne se ferme et que la pièce ne se termine sans applaudissements.", "Charlie Chaplin"],
    ["Sans culture historique, sans culture politique, on ne peut que s'égarer.", "Edgar Morin"],
    ["Tout le monde savait que c'était impossible, jusqu'à ce qu'un imbécile qui l'ignore se présente et le fasse.", "Albert Einstein"],
    ["Le professeur ouvre la porte, mais tu dois entrer seul.","Proverbe Chinois"],  
    ["Tout le monde est un génie. Mais si vous jugez un poisson sur ses capacités à grimper à un arbre, il passera sa vie à croire qu'il est stupide.","Albert Einstein"],
    ["Triste époque que celle où il est plus difficile de briser un préjugé qu'un atome.","Albert Einstein"],
    ["Celui qui croit en une croissance infinie dans un monde fini, est soit un fou soit un économiste.","Albert Einstein"],
    ["On ne peut pas remplir une coupe déjà pleine.", "Avatar"],
    ["Il paraît que la crise rend les riches plus riches et les pauvres plus pauvres. Je ne vois pas en quoi c'est une crise. Depuis que je suis petit, c'est comme ça.","Coluche"],
    ["L'ignorance mène à la peur, la peur mène à la haine et la haine conduit à la violence. Voilà l'équation.","Averroès"],
    ["Pour critiquer les gens, il faut les connaître et pour les connaître, il faut les aimer.","Coluche"],  
    ["De tous ceux qui n'ont rien à dire, les plus agréables sont ceux qui se taisent.","Coluche"],  
    ["Dans la vie, y'a pas de grands, y'a pas de petits. La bonne longueur pour les jambes, c'est quand les pieds touchent par terre.","Coluche"], 
    ["La responsabilité de chacun implique deux actes : vouloir savoir et oser dire.","Abbé Pierre"],
    ["Mes amis, retenez ceci, il n'y a ni mauvaises herbes ni mauvais hommes. Il n'y a que de mauvais cultivateurs.","Victor Hugo"],
    ["La liberté commence où l'ignorance finit.","Victor Hugo"],
    ["Mal nommer les choses, c'est ajouter au malheur du monde.","Albert Camus"],
    ["Un bon croquis vaut mieux qu'un long discours.","Napoléon 1er"],
    ["Notre époque se caractérise par la profusion des moyens et la confusion des intentions.","Albert Einstein"],
    ["When you say 'I don't care about the right to privacy because I have nothing to hide', that is no difference than saying 'I don't care about freedom of speech because I have nothing to say'.","Edward Snowden"],
    ["Nous sommes comme des nains assis sur des épaules de géants.","Bernard de Chartres"],
    ["L'amitié naît d'une mutuelle estime et s'entretient moins par les bienfaits que par l'honnêteté.","Etienne de La Boétie"],
    ["N'ouvre la bouche que si tu es sûr que ce que tu vas dire est plus beau que le silence.","Proverbe Arabe"],
    ["La liberté des uns s'arrête où commence celle des autres.","Proverbe Français"],
    ["La simplicité est la sophistication suprême.","Leonardo da Vinci"],
    ["Les hommes naissent et demeurent libres et égaux en droits. Les distinctions sociales ne peuvent être fondées que sur l'utilité commune.","Article 1er de La Déclaration des Droits de l'Homme et du Citoyen"],
    ["Le secret du bonheur ne réside pas dans la recherche de plus, mais dans le développement de la capacité à profiter de moins.", "Socrate"],
    ["On n'enseigne pas ce que l'on sait ou ce que l'on croit savoir : on n'enseigne et on ne peut enseigner que ce que l'on est !","Jean Jaurès"],
    ["Il ne faut avoir aucun regret pour le passé, aucun remords pour le présent, et une confiance inébranlable pour l'avenir.", "Jean Jaurès"],
    ["La France ne peut accueillir toute la misère du monde, mais elle doit savoir en prendre fidèlement sa part.", "Michel Rocard"],
    ["À l'école, ils m'ont demandé ce que je voulais être quand je serai grand. J'ai répondu heureux. Ils m'ont dit que je n'avais pas compris la question. J'ai répondu qu'ils n'avaient pas compris la vie.", "John Lennon"],
    ["Le futur appartient à ceux qui croient en la beauté de leur rêves.", "Eleanor Roosevelt"],
    ["Rien ne s'est fait de grand qui ne soit une espérance exagérée.", "Jules Verne"],
    ["I never lose. I either win or learn.", "Nelson Mandela"],
    ["May yours choices reflect your hopes, not your fears.", "Nelson Mandela"],
    ["It always seems impossible until it's done.", "Nelson Mandela"],
    ["Quand le dernier arbre aura été abattu - Quand la dernière rivière aura été empoisonnée - Alors on saura que l'argent ne se mange pas.", "Geronimo"],
    ["Le courage, c'est d'agir et de se donner aux grandes causes sans savoir quelle récompense réserve à notre effort l'univers profond.", "Jean Jaurès"],
    ["Le plus grand bonheur est celui que l'on trouve en servant les autres.", "Martin Luther King Jr."],
    ["On n'apporte rien au monde en se dévalorisant. C'est en laissant briller notre propre lumière que nous donnons inconsciemment aux autres le pouvoir d'en faire autant.", "Marianne Williamson"]
];

// Functiosns
function mix_quotes(tab) {
    var i_citation, j_citation, tmp;
    for (i_citation = tab.length - 1; i_citation > 0; i_citation--) {
        j_citation = Math.floor(Math.random() * (i_citation + 1));
        tmp = tab[i_citation];
        tab[i_citation] = tab[j_citation];
        tab[j_citation] = tmp;}
    return tab;}

function load_quote() {
    document.getElementById("quote-text").innerHTML = quotes_list[i_citation][0];
    document.getElementById("quote-author").innerHTML = quotes_list[i_citation][1];
    document.getElementById("numero-citation").innerHTML = (i_citation+1)+"/"+quotes_list.length;
}

function next_quote() {
    i_citation = (i_citation + 1) % quotes_list.length;
    document.getElementById("quote-text").innerHTML = quotes_list[i_citation][0];
    document.getElementById("quote-author").innerHTML = quotes_list[i_citation][1];
    document.getElementById("numero-citation").innerHTML = (i_citation+1)+"/"+quotes_list.length;
}

function automatic_next_quote() {
    next_quote();
    setTimeout(automatic_next_quote,20000);
}

function previous_quote() {
    
    i_citation = (i_citation - 1) % quotes_list.length;
    if (i_citation == -1) { i_citation =quotes_list.length-1}
    document.getElementById("quote-text").innerHTML = quotes_list[i_citation][0];
    document.getElementById("quote-author").innerHTML = quotes_list[i_citation][1];
    document.getElementById("numero-citation").innerHTML = (i_citation+1)+"/"+quotes_list.length;}

function copy_quote_to_clipboard() {
    let text = document.getElementById("quote-text").innerHTML + " - " + document.getElementById("quote-author").innerHTML;
    navigator.clipboard.writeText(text);
    notifier("success", `Citation copiée<br/>dans le presse papier.`, 5);
}

// Main program
quotes_list = mix_quotes(quotes_list);
var i_citation = 0;
load_quote();
setTimeout(automatic_next_quote,20000);

</script> 
<style>
/* ---------------------------------------------------------------- */
/* Citations */
@keyframes rainbowText {
    0% { color: hsl(240, 100%, 50%); } /* Bleu */
    10% { color: hsl(280, 100%, 50%); } /* Violet */
    20% { color: hsl(305, 100%, 40%); } /* Magenta */
    30% { color: hsl(0, 100%, 50%); } /* Rouge */
    40% { color: hsl(34, 100%, 50%); } /* Orange */
    50% { color: hsl(60, 100%, 40%); } /* Jaune */
    60% { color: hsl(109, 100%, 40%); } /* Vert */
    70% { color: hsl(180, 100%, 40%); } /* Cyan */
    80% { color: hsl(240, 100%, 50%); } /* Bleu */
    100% { color: hsl(240, 100%, 50%); } /* Bleu */
}

.rainbow-text {
    transition-duration: 1s;
    animation: rainbowText 100s linear infinite;
}

#quote-text {
    min-height: 2em;
    font-style: italic;
}

#quote-author {
    font-weight: bold;
}

#quote-navigation {
    float: right;
    text-align: right;
    cursor:pointer;   
}

#quote-zone {
    transition: color 1s;
    width: 100%;
    min-height: 90px;
    border-radius: 10px;
    padding: 20px;
}


  <p id="para2">-</p>
  <p>--</p> 
  <hr>
</div>
<!--
<div id="Six" class="w3-container city">
    <p id="para2">-</p>
    <p>--</p> 
 <hr> 
</div>
<div id="Cinq" class="w3-container city">
    <p id="para2">-</p>
    <p>--</p> 
  <hr>
</div>
<div id="Quatre" class="w3-container city">
    <p id="para2">-</p>
    <p>--</p> 
  <hr>
</div>
<div id="Tois" class="w3-container city" tyle="display:none">
    <p id="para2">-</p>
    <p>--</p> 
  <hr>
</div>
<div id="Seconde" class="w3-container city" tyle="display:none">
    <p id="para2">-</p>
    <p>--</p> 
  <hr>
</div>
<div id="Première" class="w3-container city" style="display:none">
  <p id="para2">-</p>
  <p>--</p> 
  <hr>
</div>-->




<div id="Terminale" class="w3-container city" style="display:none">
 <p id="para1">Terminale Générale</p>
 <div class="w3-container">

 <button onclick="myFunction('Demo1')" class="w3-button w3-block w3-white w3-left-align"><p id="para6">📁  Equations différentielles</p></button>
  <div id="Demo1" class="w3-hide w3-container w3-light-grey">
    <ul>
      <li><a href="mat/Tle/ED/Cours-equations_differentielles.pdf" dowload=""><p id="para4">📄   Cours-Equations differentielles</p></a></li>
      <li><a href="mat/Tle/ED/TD-equations_differentielles.pdf" dowload=""><p id="para4">📄   TD-Equations differentielles</p></a></li>
      <li><a href="mat/Tle/ED/TD-equations_differentielles-correction.pdf" dowload=""><p id="para4">📄   Correction-Equations differentielles</p></a></li>
   </ul>
   </div>

   <button onclick="myFunction('Demo2')" class="w3-button w3-block w3-white w3-left-align">Open Section 2</button>
  <div id="Demo2" class="w3-hide w3-container w3-light-grey">
    <p>
     <ul>
      <li><a href="mat/Tle/ED/Cours-equations_differentielles.pdf" dowload=""><p id="para4">Cours-Equations differentielles</p></a></li>
      <li><a href="mat/Tle/ED/TD-equations_differentielles.pdf" dowload=""><p id="para4">TD-Equations differentielles</p></a></li>
      <li><a href="mat/Tle/ED/TD-equations_differentielles-correction.pdf" dowload=""><p id="para4">Correction-Equations differentielles</p></a></li>
   </ul></p>
</div>

   
   
   </div>
  <p></p>
  <hr>
</div>

<div id="Français" class="w3-container city" style="display:none">
  <center><p id="para1">Français- Première - BAC</p></center>
  <div id="center">
  <p id="para3" style="border: 1px solid black; padding: 10px;"> ⨝Je vous conseille vivement utiliser <a href="https://cnrtl.fr/definition/"><font sytle="color:#0000FF;"><u>CNRTL</u></font></a>, un dictionnaire en ligne (une référence de pluparts des proffesseur) ou si vous ne vous maîtrisez pas la langue française :<a href="https://www.wordreference.com/fr/"><font sytle="color:#0000FF;"><u>WordReference</u></font></a>
  <br> ⨝ Vous avez, dans les fichier ci-dessus, certaines questions (signalées par "¿" en début des questions).<br> Je vous invite à réfléchir à ses questions qui peuvent être très utiles pour la compréhension de certains passages ou pour une dissertation.
  <br>⨝ ⨝ S pour "Séance"</p></div>
  <p id="para2">- Programme officiel- Français pour  2024-2025</p>
    <ul>
        <li><a href="fr/2024-2025-G.pdf" dowload=""><p id="para4">Les œuvres au programme de Première Générale</p></a></li>
        <li><p id="para4"><a href="fr/2024-2025-T.pdf" dowload="">Les œuvres au programme de Première Technologique</a></p></li> 
    </ul>
    <p id="para2">-Arthur RIMBAUD, <i>Cahier de Douai</i></p>
        <ul>
            <li><a href="fr/Douai/Rimbaud-Cahier_de_Douai.pdf" dowload=""><p id="para4">Présentation de l'œuvre-S1</p></a></li>
            <!--<li><a href="fr/" dowland=""><p id="para4">Biographie de l'auteur-2</p></a></li>-->
        </ul>    
    <p id="para2">-Abbé Prévost, <i>Manon Lescaut</i></p>
        <ul>
            <li><a href="fr/Lescaut/Abbé_Prevost-Manon_Lescaut.pdf" dowload=""><p id="para4">Présentation de Parcours-S1</p></a></li>
            <li><a href="fr/Lescaut/ .pdf" dowload=""><p id="para4">Présentation de l'œuvre-S2</p></a></li>
            <li><a href="fr/Lescaut/Structure-Manon_Lescaut.pdf" dowload=""><p id="para4">Structure de l'œuvre-S3 </p></a></li>
            <li><a href="fr/Lescaut/Cit-Manon_Lescaut.pdf" dowload=""><p id="para4">Quelques citations -S4</p></a></li>
        </ul> 
        <!--<p id="para2">-Honoré de Balzac, <i>La Peau de chagrin</i></p>
        <ul>
            <li><a href="fr/Abbé_Prevost-Manon_Lescaut.pdf" dowload=""><p id="para4">Présentation de Parcours-1</p></a></li>
            <li><a href="fr/ .pdf" dowload=""><p id="para4">Présentation de l'œuvre-2</p></a></li>
         </ul>  
         <p id="para2">-Olympe de Gouges, <i>La Déclaration des droits de la femme et de la citoyenne</i></p>
        <ul>
            <li><a href="fr/DDFC/Olympe_de_Gouges-DDFC.pdf" dowload=""><p id="para4">Présentation de Parcours-1</p></a></li>
            <li><a href="fr/ .pdf" dowload=""><p id="para4">Présentation de l'œuvre-2</p></a></li>
         </ul>     -->
    <p id="para2">-Sujets de dissertation</p>
        <ul>
            <li><a href="fr/Douai/Dis-Cahier_de_Douai.pdf" dowland=""><p id="para4">Arthur RIMBAUD, <i> Cahier de Douai</i></p></a></li>
            <li><a href="fr/Chagrin/Dis-Peau_de_chagrin.pdf" dowland=""><p id="para4">Honoré de Balzac, <i>La Peau de chagrin</i></p></a> </li>
            <li><a href="fr/DDFC/Dis-DDFC.pdf" dowland=""><p id="para4">Olympe de Gouges, <i>Déclaration des droits de la femme et de la citoyenne </i></p></a> </li>
            <li><a href="fr/Lescaut/Dis-Manon_Lescaut.pdf" dowland=""><p id="para4">Abbé Prévost, <i>Manon Lescaut </i></p></a> </li>
            <li><a href="fr/sujet-de-BAC-2024.pdf" dowland=""><p id="para4">Sujets de Bac  de l'épreuve de 2024 </p></a> </li>
         </ul>
    <hr>
 </div>

 
<script>
function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}
</script>

<script>
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
</script>
  

#last 
  <script>
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace("w3-white", "w3-yellow");
  } else { 
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace("w3-yellow", "w3-white");
  }
 }
</script>
 
  
  </script>
</script>
</body>
</html>