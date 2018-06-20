var age ="";
var name ="";
var country ="";

name = prompt('What is your name?');
if (name) {
    age = prompt('How old are you?');
} else {
    alert("you did't enter your name !!")
    name = prompt('What is your name??');
    age = prompt('How old are you?');
}
if((age) && (name)){
    country = prompt('What is your country?')
} else if (name){
    alert("you did't enter your age!!");
    age = prompt('How old are you?');
    country = prompt('What is your country?')
} else if (age){
    alert("you did't enter your name!!!!!!!");
    name = prompt('What is your name??');
    country = prompt('What is your country?')
}

document.write("My name is ",name + "<br>");  

document.write("I'm ",age + "<br>");

document.write("I live in ",country + "<br>");