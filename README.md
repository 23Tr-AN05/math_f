<html>
 <head><title>Mathématiques</title>
    <meta charset="utf-8"/>
    <link href="style.css" rel="stylesheet" type="text/css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
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
  <button class="w3-bar-item w3-button" onclick="openCity('Seconde ')">Seconde</button>
  <button class="w3-bar-item w3-button" onclick="openCity('Première')">Première G</button>
  <button class="w3-bar-item w3-button" onclick="openCity('Terminale')">Terminale G</button>
   <button class="w3-bar-item w3-button" onclick="openCity('fr')">Français Première-BAC</button>
</div>

<div id="Seconde" class="w3-container city">
    <h2>-</h2>
    <p>--</p> 
</div>

<div id="Premère" class="w3-container city" style="display:none">
  <h2>-</h2>
  <p>--</p> 
</div>

<div id="Terminale G" class="w3-container city" style="display:none">
 <h2>Equations différentielles</h2>
    <ol>
      <li><a href="mat/equadif.pdf" dowload=""><h2>Cours-Equations differentielles<h2></a></li>
      <li><a href="TD.pdf" dowload=""><h2>TD-Equations differentielles<h2></a></li>
      <li><a href="TD-correction.pdf" dowload=""><h2>Correction-Equations differentielles<h2></a></li>
   </ol>
  <p></p>


</div>

<div id="fr" class="w3-container city">
  <h1>Français- Première - BAC<h1>
    <h2>- Programme officiel- Français pour  2024-2025</h2>
    <br><a href="2024-2025.pdf" dowload=""><h2>Les œuvres au programme<h2></a>
    <br>
    <h2>Arthur RIMBAUD, <i>Cahier de Douai</i></h2>
    <br><a href="Rimbaud-Cahier_de_Douai.pdf" dowload=""><h2>Présentation de l'œuvre-1<h2></a>
    <p>--</p> 
    <h2>Sujets de dissertation</h2>
    <br><a href="Sujet_de_dissertation.pdf" dowload=""><h2>Présentation de l'œuvre-1<h2></a>

</div>



 
<script>
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}
</script>

</body>
</html>