
let aleatoire = Math.ceil(Math.random()*100); //le nombre à
$(function (){
    nombreChoisi();
    $("#soumettre").click(nombreChoisi)
})
function nombreChoisi () {

    var contenu = $(".nombre").val()
            if (aleatoire > this) {
                console.log("Le valeur est plus haut")
                $(".nombre").attr("disable", true);
            else
                if (aleatoire < this) {
                    console.log("Le valeur est plus bas")
                    $(".nombre").attr("disable", true)
                    esle
                    {
                        console.log("le nombre est: " + aleatoire);
                    }
                }

            }
    };





