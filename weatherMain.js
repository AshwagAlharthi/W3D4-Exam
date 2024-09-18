let homeUserName = document.getElementById("homeUserName");
let logoutButton = document.getElementById("logoutButton");

let lsUserId = localStorage.getItem('homeUserId');

fetch('https://66e7e6c1b17821a9d9da70a4.mockapi.io/login')
    .then((response) => response.json())
    .then((data) => {
        let homeUser = data.find(user => user.id == lsUserId);
        homeUserName.textContent = homeUser.name;
    });

logoutButton.addEventListener("click", () => {
    localStorage.removeItem('homeUserId');
    window.location.href = "login.html"
})
