
var Tableau = [
    "Pomme", "Banane", "Cerise", "Mangue", "Pêche"
];


for (var t = 0; t < Tableau.length; t++){
    alert("Mon fruit préféré est la " + Tableau[t]);
    document.write(Tableau [t] + " " + "<br>");
}

// push ajoute un élément au tableau en dernier rang
Tableau.push("");
// Unshift ajoute au premier rang
Tableau.unshift("");
// pop retire le dernier éléùment
Tableau.pop();
// shift retire le premier element
Tableau.shift();
