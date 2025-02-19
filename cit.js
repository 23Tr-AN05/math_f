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