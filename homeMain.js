let homeUserName = document.getElementById("homeUserName");
let logoutButton = document.getElementById("logoutButton");
let prayer = document.getElementById("prayer");
let weather = document.getElementById("weather");

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

prayer.addEventListener("click", () => {
    window.location.href = "prayer.html"
})

weather.addEventListener("click", () => {
    window.location.href = "weather.html"
})