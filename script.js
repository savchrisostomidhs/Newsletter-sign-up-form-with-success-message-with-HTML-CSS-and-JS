const button = document.querySelector(".js-button");
const dismissButton = document.querySelector(".js-dismiss");

const form = document.querySelector(".js-form");
const message = document.querySelector(".js-message");

button.addEventListener("click", displayMessage);
dismissButton.addEventListener("click", () => {
    message.style.display = "none";
    form.style.display = "flex";
})

function displayMessage() {
    const email = document.querySelector(".js-email");
    const error = document.querySelector(".js-error");

    if (!(/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email.value))) {
        error.style.display = "block";
        email.style.borderColor = "hsl(4, 100%, 67%)";
        email.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
        email.style.color = "hsl(4, 100%, 67%)";
    } else {
        form.style.display = "none";
        const userEmail = email.value;
        email.value = "";
        error.style.display = "none";
        email.style.borderColor = "hsl(231, 7%, 60%)";
        email.style.backgroundColor = "white";
        email.style.color = "black";
        document.querySelector(".js-user-email").innerHTML = userEmail;
        message.style.display = "flex";
    }
}