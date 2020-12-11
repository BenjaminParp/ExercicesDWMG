let DivP = document.getElementById("LaDiv")
let H1e = document.createElement("h1")
let Pe = document.createElement("p")

let Titre2 = document.createElement("h2")

Titre2.innerText="Titre 2 omg";
H1e.innerText ="Le titre est incroyable c'est fou ca";
Pe.innerText ="Le texte est incroyable c'est fou ca";


DivP.appendChild(H1e);
DivP.appendChild(Pe);

function Changer(){
    DivP.removeChild(H1e);
    DivP.appendChild(Titre2)
    DivP.replaceChild(Titre2, DivP.firstChild)
}


function Suppr(id){
    let Degage= document.getElementById(id)
    DivP.removeChild(Degage);    
}
