let color_case = "rose"

function jouer(id) {
    cell = document.getElementById(id)

    if(cell.classList.contains("rose") || cell.classList.contains("blue")){

    }
    else{
        if(color_case=="blue"){
            cell.classList.add("rose")
            cell.innerText="X"
            color_case="rose"
        }
        else{
            cell.classList.add("blue") 
            cell.innerText="O"
            color_case="blue"
        }
    } 
    }

    function Rejouer(){
        let cell = document.getElementById("case1")
        cell.classList.remove("blue")
        cell.classList.remove("rose")
        cell = document.getElementById("case2")
        cell.classList.remove("blue")
        cell.classList.remove("rose")
        cell = document.getElementById("case3")
        cell.classList.remove("blue")
        cell.classList.remove("rose")
        cell = document.getElementById("case4")
        cell.classList.remove("blue")
        cell.classList.remove("rose")
        cell = document.getElementById("case5")
        cell.classList.remove("blue")
        cell.classList.remove("rose")
        cell = document.getElementById("case6")
        cell.classList.remove("blue")
        cell.classList.remove("rose")
        cell = document.getElementById("case7")
        cell.classList.remove("blue")
        cell.classList.remove("rose")
        cell = document.getElementById("case8")
        cell.classList.remove("blue")
        cell.classList.remove("rose")
        cell = document.getElementById("case9")
        cell.classList.remove("blue")
        cell.classList.remove("rose")
        case1.innerText=" "
        case2.innerText=" "
        case3.innerText=" "
        case4.innerText=" "
        case5.innerText=" "
        case6.innerText=" "
        case7.innerText=" "
        case8.innerText=" "
        case9.innerText=" "-/*
    }

    