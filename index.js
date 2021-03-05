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
    $(".scoreFinal").text("Mais en fait vous avez eu 2/5. Raspoutine vous aurait mangé tout cru.")
  }
  else if (score == 1) {
    $(".scoreFinal").text("Mais en fait vous avez eu 1/5. On va conspirer pour que ça reste entre nous.")
  }
})

$(".restart").on("click", score = 0)


var thatone = Math.floor(Math.random() * 6)
var livres = ["https://mediatheques.sudestavenir.fr/recherche/viewnotice/clef/FROMHELL-UNEAUTOPSIEDEJACKLE-MOOREA--DELCOURT-2000-1/id/64658/tri/%2A/expressionRecherche/from+hell?id_profil=1", 
              "https://mediatheques.sudestavenir.fr/recherche/viewnotice/clef/OPERATIONLUNE--KARELW--POINTDUJOUR-2018-4/id/250816/tri/%2A/expressionRecherche/op%C3%A9ration+lune?id_profil=1", 
              "https://mediatheques.sudestavenir.fr/recherche/viewnotice/clef/NOUSSOMMESTOUSDESCANNIBALES--LEVISTRAUSSC--EDDUSEUIL-2013-1/id/212170/tri/%2A/expressionRecherche/cannibales+anthropologie?id_profil=1", 
              "https://mediatheques.sudestavenir.fr/recherche/viewnotice/clef/RASPOUTINE--TROYATH--FLAMMARION-1996-1/id/8700/tri/%2A/expressionRecherche/raspoutine+troyat?id_profil=1", 
              "https://mediatheques.sudestavenir.fr/recherche/viewnotice/clef/LESCHEVRESDUPENTAGONE--HESLOVG--WESGATEFILMSERVICES-2009-4/id/131137/tri/%2A/expressionRecherche/les+ch%C3%A8vres+du+pentagone?id_profil=1"]
$(".hasard").attr("href", livres[thatone])
