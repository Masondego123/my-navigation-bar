
<input type="text" id="username" placeholder="Username">
<input type="password" id="password" placeholder="Password">
<button id="btnLogIn">Login</button>
<p id="errorMessage"></p>
function compareLogin(event) {
    event.preventDefault();

    const USERNAME = "Mason";
    const PASSWORD = "1234";

function compareLogin(event) {
    // Prevents the form from submitting and refreshing the page automatically
    event.preventDefault(); 

    // Extract user inputs at the exact moment they click submit
    const userNameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Check credentials matching
    if (userNameInput === USERNAME && passwordInput === PASSWORD) {
        errorMessage.textContent = "";
        alert("tama");
        window.location.href = "message.html";
    } else {
        alert("mali");
        errorMessage.textContent = "Invalid Username or Password!";
    }
}

// Attach event listener properly to the button
const myLoginButton = document.getElementById("btnLogIn");
myLoginButton.addEventListener("click", compareLogin);