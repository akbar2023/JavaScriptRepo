// manipulation DOM

var div = document.getElementById('maDiv');
// alert(div);

// var classe = document.getElementsByClassName('maClasse');
// alert(classe);

// var name = document.getElementsByName('akbar');
// alert(name);

// var imgs = document.getElementsByClassName('img');
// for (var i = 0; i < imgs.length; i++) {
//     alert ("Element n°");
// }


var lien = document.getElementById('lien');
var href = lien.getAttribute('href');
alert(href);

lien.setAttribute('href', 'https://google.com'); // .setAttribute pour remplacer la valeur initiale d'un attribut par un autre
alert(lien);

// Ajoute une classe à la div maDiv
div.className = 'blue';

// Crée une var qui contient toutes les nouvelles classes
var classes = document.getElementById('test').className;
alert(classes);

// crée un tableau vide qui contiendra mes nouvelles classes
var nouvellesClasses = [];

// la méthode split() pertmet de supprimer les petits morceaux, ici des espaces vides
classes = classes.split(' ');

// On parcours le tableau des classes

for (var i = 0; i < classes.length; i++){
    if (classes[i]) {
        nouvellesClasses.push(classes[i]);
    }
}
alert(nouvellesClasses);
