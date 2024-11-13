// References to DOM elements
const muahcat = document.querySelector("#muahcat");
const btn = document.querySelector("#btn");

// The two images of the POP CAT
const openMouthImg = "https://media.discordapp.net/attachments/1278766107557367979/1306082890316251258/IMG_9678.png?ex=67355ffa&is=67340e7a&hm=9703206930118c084f1d9aac8bc1ce4ddef231eb7d2b937f4ae9c53830f2d541&=&format=webp&quality=lossless&width=670&height=670";
const closeMouthImg = "https://media.discordapp.net/attachments/1278766107557367979/1306082889527459871/IMG_9679.png?ex=67355ffa&is=67340e7a&hm=7b6c385425deb76758fcbef12f778ad511b2231188e589de425705e90b02b0f0&=&format=webp&quality=lossless&width=670&height=670";

// Event Handlers (Desktops)
btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);

// Event Handlers (Touch Screens)
btn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
});

btn.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
});

function openMouth() {
    console.log("Mouth Opened");
    muahcat.src = openMouthImg;
}

function closeMouth() {
    console.log("Mouth Closed");
    muahcat.src = closeMouthImg;
}
