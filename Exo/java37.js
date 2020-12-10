function Suivant(){
    let DivGreen = document.getElementById("green")
    let DivYellow = document.getElementById("yellow")
    let DivBlue = document.getElementById("blue")
   
    if(DivYellow.style.display=='' || DivYellow.style.display =="inherit"){
        DivBlue.style.display="inherit"
        DivGreen.style.display="none"
        DivYellow.style.display="none"
   } else if(DivBlue.style.display=='inherit'){
        DivBlue.style.display ="none"
        DivGreen.style.display ="inherit"
        DivYellow.style.display ="none"
   } else{
        DivBlue.style.display ="none"
        DivGreen.style.display="none"
        DivYellow.style.display="inherit"
   }
}