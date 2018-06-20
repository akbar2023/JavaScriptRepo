var hello = "Salut"; /* string */
var nbr = 20; /* number */
var dnbr = .20 /* float | number */
var verify = 'vrai'; /* Boolean */
var verify02 = false; /* Boolean */
var tab = ["salut", 20, true];

// if (verify == true) {
//     alert('danger !!');
//     var nom = prompt("Comment tu t'appelles ?");
// } else {
//     alert('Hi!');
// }

// if (verify02 = false) {
//     alert("Ahhh haaah aahhh!!!");
//     var country = prompt("De quel pays viens-tu ?");
// }

var tableau = [1,2,3,4,5]

for (var i = 0; i < tableau.length; i++ ){
    document.write(tableau[i]);
}

var football = 
    {
        pays : "France",
        sport : "Foot",
        name : "Les bleus",
    }

    // {
    //     pays : "Espagne",
    //     sport : "Futbal",
    //     name : "La Roja",
    // }

document.write(football);

document.getElementById("demo").innerHTML = football.pays + " footbal team name is " + football.name + " and they are the best!!";



// boucle

var maVariabe = 0;
var result = "";
do {
    maVariabe = maVariabe + 1;
    resultat = result + maVariabe;
    alert("execution avant la boucle !")
} while (maVariabe < 5);

document.write(result);
console.log(result);document.write(result);
console.log(result);

