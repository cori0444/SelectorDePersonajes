function seleccionarPony(pony) {
    let imagen =document.getElementById("seleccionado");
    let texto =document.getElementById("descripcion");  

    if (pony == "pinkiepie") {

        imagen.src ="IMG/pinkiepie.png";
        texto.innerHTML ="Pinkie Pie es alegre, divertida y muy sociable.";
    }

    if (pony == "rarity") {

        imagen.src ="IMG/rarity.png";
        texto.innerHTML ="Rarity es elegante, creativa y apasionada por la moda.";
    }

    if (pony == "rainbowdash") {

        imagen.src ="IMG/rainbowdash.png";
        texto.innerHTML ="Rainbow Dash es valiente, competitiva y muy segura de si misma.";
    }

    if (pony == "fluttershy") {

        imagen.src ="IMG/fluttershy.png";
        texto.innerHTML ="Fluttershy es dulce, timida y tranquila.";
    }

    if (pony == "twilightsparkle"){

        imagen.src ="IMG/twilight.png";
        texto.innerHTML ="Twilight Sparkle es inteligente, estudiosa y responsable.";
}

}