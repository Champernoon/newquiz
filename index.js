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
    $(".scoreFinal").text("En fait vous avez eu 3/6. Bel effort tout de même.")
  } else if (score == 2) {
    $(".scoreFinal").text("Mais en fait vous avez eu 2/5. Raspoutine vous aurait mangé tout cru")
  }
  else if (score == 1) {
    $(".scoreFinal").text("Mais en fait vous avez eu 1/5. On va conspirer pour que ça reste entre nous.")
  }
})

$(".restart").on("click", score = 0)


var thatone = Math.floor(Math.random() * 6)
var livres = ["https://catalogue-mediatheques.sudestavenir.fr/recherche/viewnotice/clef/FROMHELL--HUGHESALLEN--20THCENTURYFOX-2003-4/id/10275847/expressionRecherche/from+hell+alan+moore/tri/annee+desc?id_profil=1", "https://catalogue-mediatheques.sudestavenir.fr/recherche/viewnotice/clef/OPERATIONLUNE--KARELWILLIAM--POINTDUJOUR-2018-4/id/10167256/expressionRecherche/Op%C3%A9ration+Lune?id_profil=1", "https://catalogue-mediatheques.sudestavenir.fr/recherche/viewnotice/clef/CANNIBALES-HISTOIREETBIZARRERIE-MONESTIERMARTIN--LECHERCHEMIDIED-2000-1/id/9914230/expressionRecherche/cannibalisme?id_profil=1", "https://catalogue-mediatheques.sudestavenir.fr/recherche/viewnotice/clef/RASPOUTINE--TROYATHENRI--FLAMMARION-1996-1/id/10178065/expressionRecherche/raspoutine?id_profil=1", "https://catalogue-mediatheques.sudestavenir.fr/recherche/viewnotice/clef/LESCHEVRESDUPENTAGONE--HESLOVGRANT--WESGATEFILMSERVICES-2009-4/id/10039898/tri/annee+desc/expressionRecherche/Les+ch%C3%A8vres+du+Pentagone+de+Heslov%2C+Grant?id_profil=1","https://catalogue-mediatheques.sudestavenir.fr/recherche/viewnotice/clef/INCROYABLESMAISFAUX-HISTOIRESDECOMPLOTSD-QUIVYVINCENT--SEUIL-2020-1/id/11340171/expressionRecherche/histoire+complots/tri/annee+desc?id_profil=1"]
$(".hasard").attr("href", livres[thatone])
