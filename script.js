
/* =================================
   MAMA PAPA ANNIVERSARY WEBSITE
================================= */
const heartContainer = document.getElementById("floating-hearts");

if (heartContainer) {
    setInterval(() => {
        const heart = document.createElement("span");

        heart.className = "floating-heart";
        heart.innerHTML = "♥";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);

    }, 500);
}

/* 1. BALLOONS */

const balloonContainer = document.getElementById("balloon-container");

const balloonColors = [
    "#ff8fab",
    "#ffc6d0",
    "#d8a7e8",
    "#f7b267",
    "#f6bdcf",
    "#cdb4db"
];

const balloonMessages = [
    "We love you Mama Papa! ❤️",
    "Allah bless you both! 🤲",
    "You are our biggest blessing! 💕",
    "Happy Anniversary! 🎉",
    "Lots of love for you both! ❤️",
    "May you always stay happy! 🌸",
    "28 beautiful years together! 🥹",
    "Our forever heroes! 💖",
    "Love you both so much! ❤️",
    "Stay blessed always! 🌹",
    "You make our family beautiful! 💕",
    "May Allah protect your love! 🤲",
    "A lifetime of happiness! ❤️",
    "Our favorite couple! 🥰",
    "Happy Anniversary Mama & Papa!"
];

for (let i = 0; i < 15; i++) {

    const balloon = document.createElement("div");

    balloon.classList.add("balloon");
// Balloon pop sound
const popSound = new Audio(
    "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"
);

popSound.volume = 0.7;
popSound.currentTime = 0;
popSound.play();
    balloon.style.backgroundColor =
        balloonColors[i % balloonColors.length];

    balloon.style.animationDelay =
        Math.random() * 2 + "s";

    balloon.addEventListener("click", function () {

        if (balloon.classList.contains("popped")) {
            return;
        }

        balloon.classList.add("popped");

        balloon.style.transform = "scale(0)";
        balloon.style.opacity = "0";

        const message = document.getElementById("message");

        message.innerHTML = balloonMessages[i];

        setTimeout(() => {
            balloon.remove();
        }, 300);

    });

    balloonContainer.appendChild(balloon);
}


/* 2. MAMA GIFT BOX */

function openGift() {

    const giftBox = document.getElementById("giftBox");
    const ringMessage = document.getElementById("ringMessage");

    if (giftBox.classList.contains("open")) {
        return;
    }

    giftBox.classList.add("open");

    setTimeout(() => {

        ringMessage.classList.add("show");

    }, 700);

    createGiftConfetti();

}


/* GIFT CONFETTI */

function createGiftConfetti() {

    const confetti = document.getElementById("confetti");

    for (let i = 0; i < 35; i++) {

        const piece = document.createElement("div");

        piece.style.position = "absolute";
        piece.style.width = "9px";
        piece.style.height = "12px";
        piece.style.backgroundColor = [
            "#e58cac",
            "#ffd700",
            "#ffffff",
            "#c44b79"
        ][Math.floor(Math.random() * 4)];

        piece.style.left = Math.random() * 100 + "%";
        piece.style.top = "0";
        piece.style.borderRadius = "3px";

        piece.animate(
            [
                { transform: "translateY(0) rotate(0deg)", opacity: 1 },
                { transform: "translateY(250px) rotate(500deg)", opacity: 0 }
            ],
            {
                duration: 2500 + Math.random() * 1500,
                easing: "ease-out"
            }
        );

        confetti.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 4000);

    }

}


/* 3. URDU SURPRISE MESSAGE */

function showSurprise() {

    const surpriseMessage =
        document.getElementById("surpriseMessage");

    surpriseMessage.classList.toggle("show");

}


/* 4. HEART SHAPED CAKE CUTTING */

function cutHeartCake() {

    const cake = document.getElementById("heartCake");

    const button = document.getElementById("heartcakeButton");

    const message = document.getElementById("heartcakeMessage");

    const instruction =
        document.getElementById("heartcakeInstruction");

    const confetti =
        document.getElementById("heartcakeConfetti");

    // Prevent repeated clicks

    if (cake.classList.contains("cutting")) {
        return;
    }

    // Start cutting animation

    cake.classList.add("cutting");

    button.disabled = true;

    button.innerHTML = "❤️ Cutting the Cake...";

    instruction.innerHTML =
        "A beautiful moment for Mama & Papa! 🥹";

    // Create celebration confetti

    for (let i = 0; i < 60; i++) {

        const piece = document.createElement("div");

        piece.className = "heartcake-confetti-piece";

        piece.style.left = Math.random() * 100 + "%";

        piece.style.backgroundColor = [
            "#d98da8",
            "#e7c17b",
            "#ffffff",
            "#c44b79",
            "#f3b5c9"
        ][Math.floor(Math.random() * 5)];

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        confetti.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 4500);

    }

    // Show final wishes

    setTimeout(() => {

        button.innerHTML = "🎉 Cake Cut Successfully!";

        instruction.innerHTML =
            "Sending lots of love to both of you! ❤️";

        message.classList.add("show");

    }, 1700);

}
