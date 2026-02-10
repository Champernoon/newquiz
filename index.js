$('.carousel').carousel({
  touch: false
});

$(".rate").on("click", function() {
  $("h3").text("Perdu !")
})
$(".rate").on("click", function() {
  new Audio("sons/wrong.mp3").play();
})


$(".gagne").on("click", function() {
  $("h3").text("Bien joué !")
})

$(".gagne").on("click", function() {
  new Audio("sons/right.mp3").play();
})


var score = 0
$(".scoreFinal").text("Mais en fait vous avez zéro pointé. Votre abonnement à la médiathèque est résilié (pour de faux).")

$(".gagne").on("click", function() {
  score++
  if (score == 6) {
    $(".scoreFinal").text("Et parce qu'en plus vous avez eu tout bon ! Bravo, Raspoutine ne vous aurait pas facilement mystifié.")
  } else if (score == 5) {
    $(".scoreFinal").text("En fait vous avez eu 5/6 mais il y avait une question en plus ce mois-ci.")
  } else if (score == 4) {
    $(".scoreFinal").text("Mais en fait vous avez eu 4/6. C'est quand même au-dessus de la moyenne, bien joué.")
  } else if (score == 3) {
    $(".scoreFinal").text("Mais en fait vous avez eu 3/6. Vous êtes sur la bonne voie.")
  } else if (score == 2) {
    $(".scoreFinal").text("Mais en fait vous avez eu 2/5. Raspoutine vous aurait mangé tout cru.")
  }
  else if (score == 1) {
    $(".scoreFinal").text("Mais en fait vous avez eu 1/5. On va conspirer pour que ça reste entre nous.")
  }
})

$(".restart").on("click", score = 0)


var thatone = Math.floor(Math.random() * 7)
var livres = ["https://mediatheques.sudestavenir.fr/recherche/viewnotice/id_sigb/361795/id_int_bib/10/id_site/35/record_type/1",
              "https://mediatheques.sudestavenir.fr/recherche/viewnotice/id_sigb/288254/id_int_bib/11/id_site/36/record_type/1",
              "https://mediatheques.sudestavenir.fr/recherche/viewnotice/id_sigb/496589/id_int_bib/50/id_site/53/record_type/1", 
              "https://mediatheques.sudestavenir.fr/recherche/viewnotice/id_sigb/383078/id_int_bib/10/id_site/35/record_type/1", 
              "https://mediatheques.sudestavenir.fr/recherche/viewnotice/id_sigb/172107/id_int_bib/10/id_site/35/record_type/1", 
              "https://mediatheques.sudestavenir.fr/recherche/viewnotice/id_sigb/2364092/id_int_bib/10/id_site/35/record_type/1"]
$(".hasard").attr("href", livres[thatone])


