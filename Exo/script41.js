let divs= document.getElementsByTagName("div")

console.log("Il y'a" + " " +divs.length+ " " + "balises de type div, voici ce qu'elles continenent")

for (let i=0; i<divs.length; i++){
    let cellule = divs[i];
    console.log(cellule.innerText)
}


let Divs2= document.getElementsByClassName("b_yellow")

console.log("Il y'a" + " " +Divs2.length+ " " + "balises qui ont une class b_yellow, voice ce qu'elles contiennent")

for (let i=0; i<Divs2.length; i++){
    let cellule = divs[i];
    console.log(cellule.innerText)
}

let Divs3= document.querySelector("#container .b_yellow")


console.log("Voici le contenu de l'element identifié par le selecteur #container .b_yellow " + Divs3.innerText)

let section2= document.querySelectorAll("#container .b_yellow");
console.log("il y a " + section2.length + " balises qui ont une classe b_yellow :" );
for (let i=0; i<section2.length; i++){
    let cellule3 = section2[i];
    console.log(cellule3.innerText)
}