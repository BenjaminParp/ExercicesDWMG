function AfficherTitre() {
    let titre = document.getElementById("LeH1");
    console.log(titre.innerText)
}

function ModifierTitre() {
    let titre = document.getElementById("LeH1");
    console.log(titre.innerText = "Mon new titre")
}