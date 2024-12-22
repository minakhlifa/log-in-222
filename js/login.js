const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const loginBtn = document.querySelector("#loginBtn");
const successMsg = document.querySelector("#successMsg");
const errorMsg = document.querySelector("#errorMsg");
const form = document.querySelector("form");
let usersArray = [];
if (localStorage.getItem("Users") !== null) {
    usersArray = JSON.parse(localStorage.getItem("Users"));
    console.log(usersArray);
}
const loginUser = () => {
    errorMsg.classList.replace("d-block", "d-none");
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].email === userEmail.value && usersArray[i].password === userPassword.value) {
            successMsg.classList.replace("d-none", "d-block");
            localStorage.setItem("Username", usersArray[i].name);
            setTimeout(() => {
                window.location.href = "home.html"
            }, 2000);
            return;
        }
    }
    errorMsg.classList.replace("d-none", "d-block");
}
loginBtn.addEventListener("click", loginUser);
form.addEventListener("submit", (eventInfo) => {
    eventInfo.preventDefault();
    console.log(eventInfo);
})
