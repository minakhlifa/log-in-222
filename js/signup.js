const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const regsiterBtn = document.querySelector("#regsiterBtn");
const successMsg = document.querySelector("#successMsg");
const errorMsg = document.querySelector("#errorMsg");
const form = document.querySelector("form");
let usersArray = [];
if (localStorage.getItem("Users") !== null) {
    usersArray = JSON.parse(localStorage.getItem("Users"));
    console.log(usersArray);
}
const validateInputs = (input) => {
    const regex = {
        userName: /^[A-Z][a-z]{2,9}$/,
        userEmail: /^[A-Za-z0 -9-_]{3,}@(gmail|outlook|yahoo|msn|hotmail)\.(com|org)$/,
        userPassword: /^[A-Z][a-z0-9]{2,}[!@#$]$/,
    }
    if (regex[input.id].test(input.value)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}
const registerUser = () => {
    if (validateInputs(userName) && validateInputs(userEmail) && validateInputs(userPassword)) {
        errorMsg.classList.replace("d-block", "d-none");
  
        const matchedEmail = usersArray.find((user) => user.email === userEmail.value);
        if (matchedEmail) {
            errorMsg.classList.replace("d-none", "d-block");
            return;
        }
        const user = {
            name: userName.value,
            email: userEmail.value,
            password: userPassword.value,
        }
        usersArray.push(user);
        console.log(usersArray);
        localStorage.setItem("Users", JSON.stringify(usersArray));
        successMsg.classList.replace("d-none", "d-block");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    }
}
regsiterBtn.addEventListener("click", registerUser);
form.addEventListener("submit", (eventInfo) => {
    eventInfo.preventDefault();
})
userName.addEventListener("input", () => {
    validateInputs(userName);
})
userEmail.addEventListener("input", () => {
    validateInputs(userEmail);
})
userPassword.addEventListener("input", () => {
    validateInputs(userPassword);
})