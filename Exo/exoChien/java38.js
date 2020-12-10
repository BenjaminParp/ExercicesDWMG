function Suivant(){
    let LeChien1 = document.getElementById("chien1")
    let LeChien2 = document.getElementById("chien2")
    let LeChien3 = document.getElementById("chien3")
   
    if(LeChien1.style.display=='' || LeChien1.style.display=='inherit'){
         LeChien2.classList.add("afficher")
         LeChien2.classList.remove("masque")
         LeChien3.classList.add("masque")
         LeChien3.classList.remove("afficher")
         LeChien1.classList.add("masque")
         LeChien1.classList.remove("afficher")
        /*LeChien2.style.display="inherit"
        LeChien3.style.display="none"
        LeChien1.style.display="none"*/
   } else if(LeChien2.style.display=='inherit'|| LeChien2.style.display==''){
        LeChien2.classList.add("masque")
        LeChien2.classList.remove("afficher")
        LeChien3.classList.add("afficher")
        LeChien3.classList.remove("masque")
        LeChien1.classList.add("masque")
        LeChien1.classList.remove("afficher")
        alert("peu importe")
   } else{
        LeChien2.classList.add("masque")
        LeChien2.classList.remove("afficher")
        LeChien3.classList.add("masque")
        LeChien3.classList.remove("afficher")
        LeChien1.classList.add("afficher")
        LeChien1.classList.remove("masque")
   }
}