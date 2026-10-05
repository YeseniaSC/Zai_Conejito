const backBouquet =
    document.getElementById("flowersBack");

const frontBouquet =
    document.getElementById("flowersFront");

const replay =
    document.getElementById("replay");
  
const leftArm =
    document.getElementById("leftArm");

const rightArm =
    document.getElementById("rightArm");

const faceExpression =
    document.getElementById("faceExpression");

const sparkles =
    document.querySelectorAll("#sparkles path");


/* ================================= */
/* REINICIAR ANIMACIÓN */
/* ================================= */

function restartAnimation(element) {

    if (!element) return;

    element.style.animation = "none";

    void element.offsetWidth;

    element.style.animation = "";
}


/* ================================= */
/* BOTÓN REPLAY */
/* ================================= */

replay.addEventListener("click", () => {

    restartAnimation(backBouquet);
    restartAnimation(frontBouquet);

    restartAnimation(leftArm);
    restartAnimation(rightArm);

    restartAnimation(faceExpression);

    sparkles.forEach(restartAnimation);

});


/*
   Las animaciones tienen:

   animation-iteration-count: infinite;

   por lo tanto todo se reproduce
   automáticamente una y otra vez.
*/


/* ================================= */
/* RECUPERAR ANIMACIÓN AL VOLVER */
/* ================================= */

document.addEventListener("visibilitychange", () => {

    if (!document.hidden) {

        restartAnimation(backBouquet);
        restartAnimation(frontBouquet);

        restartAnimation(leftArm);
        restartAnimation(rightArm);

        restartAnimation(faceExpression);

        sparkles.forEach(restartAnimation);

    }

});
