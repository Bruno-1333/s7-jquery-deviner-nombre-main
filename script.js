
let aleatoire = Math.ceil(Math.random()*100); //le nombre à

$(function (){
    soumettre();
    essai();
    nouvellePartie();
})
function soumettre (){
    let nombre = $(".nombre").val();
    if (nombre > aleatoire){
        $("#reponse").text("C'est moins");
    }
    else if (nombre < aleatoire){
        $("#reponse").text("C'est plus");
    }
    else{
        $("#reponse").text("Bravo");
    }

}
function essai (){
    let nombre = $(".nombre").val();
    $("#essai").append(nombre + " ");

}
function nouvellePartie (){
    aleatoire = Math.ceil(Math.random()*100);
    $(".nombre").val("");
    $("#reponse").text("");
    $("#essai").text("");
}


















