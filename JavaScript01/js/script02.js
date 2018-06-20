var zero = 'Bonjour !';

var un = 23;

var deux = 2.23;

var trois = true;

var quatre = [];

// console.log(typeof(zero));
// console.log(typeof(un));
// console.log(typeof(deux));
// console.log(typeof(trois));
// console.log(typeof(quatre));



const AKBAR = 20; //une constante ne peut possèder d'autre valeur que celle d'origine sauf dans les conditions en bloc local
// console.log(AKBAR); 

// let EXEMPLE = 'autre chose' // renvoie une erreur car la constante possède déjà une valeur et ne peut être modifié

//début condition
if(AKBAR === 20) { //debut bloc locale
    let AKBAR = 23;
    console.log(AKBAR);
}
console.log(AKBAR);

// = : affecter une valeur
// == : comparer que 2 valeurs sont identiques ex; 2 et "2"
// === : vérifier que deux valeurs sont identiques et du même type ex; (2 et 2 vrai | 2 et "2" faux)
// != : vérifier que deux valeurs sont inégale
// !== : vérifier que deux valeurs sont sctrictement inégale (ex; 2 et "2" faux ou 2 et 2 | 2 et 3 vrai ) 

const TEST = 'hola';
 if (TEST == 'Bonjour'){
     document.write('Français');
 }
 else if (TEST == 'hello') {
     console.log('Anglais');
 }
 else if (TEST == 'hola') {
    console.log('Espagnol');
} else {
     console.log('Unknown language or syntaxe error');
 }


 // parseInt permet de préciser qu'on attend un "integer" : un nombre
 const age = parseInt(prompt('Quel est votre âge ?')) ;
 alert(age);

 var majorite = 18; 

 if (age >= 18) {
     alert('Super !');
 } else {
     alert('hahah');
    //  document.location.href = 'https://google.fr';
 }