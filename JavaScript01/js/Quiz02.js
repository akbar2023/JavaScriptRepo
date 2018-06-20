
var nom = prompt('quel est ton nom ?');
if (nom){
    var prenom = prompt("Ton prénom ?");
} else {
    alert("t'as oublié de remplir la case !")
    document.location.reload(); //si on répond mal ceci va reposer la question infiniment
}


if (prenom){
    var age = parseInt(prompt('Tu as quel âge ?'));
}
    else {
        alert("t'as oublié de remplir la case !");
        
    }

if (age >= 18){

}

