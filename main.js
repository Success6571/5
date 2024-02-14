document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.querySelector(".yes-btn");
    const gif = document.querySelector(".gif");
    const question = document.querySelector(".question");

    let clickedYes = false; // Flag to track if Yes button was clicked

    const noBtn = document.querySelector(".no-btn");

    // Event listener function for "No" button mouseover
    function handleNoButtonMouseover() {
        if (!clickedYes) {
            const noGifs = ["images/jumpcat.gif", "images/toby.gif", "images/gone.gif", "images/crydude.gif", "images/cryboy.gif", "images/cryguy.gif"];
            const randomIndex = Math.floor(Math.random() * noGifs.length);
            gif.src = noGifs[randomIndex];
        }
    }

    // Add event listener for "No" button mouseover
    noBtn.addEventListener("mouseover", handleNoButtonMouseover);

    yesBtn.addEventListener("click", function() {
        if (!clickedYes) {
            gif.src = "images/third.gif";
            question.textContent = "Yay, see you next Sunday!";
            clickedYes = true;
            // Remove event listener for "No" button mouseover after first "Yes" button click
            noBtn.removeEventListener("mouseover", handleNoButtonMouseover);
        } else {
            gif.src = "images/hg.gif";
            question.textContent = "Thank you <3";
        }
    });

    noBtn.addEventListener("mouseover", function() {
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });
});
