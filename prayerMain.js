let homeUserName = document.getElementById("homeUserName");
let logoutButton = document.getElementById("logoutButton");
let pray = document.getElementById("pray-contanier");
let dayhere = document.getElementById("dayhere");


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

// let date = new Date();
// console.log(date.getFullYear());

let currentMonth = 9;
let currentYear = 2024;
fetch('http://api.aladhan.com/v1/gToHCalendar/9/2024')
    .then((response) => response.json())
    .then((data) => {
        let data1 = data.data;
        let hDate;
        let gDate;
        let hDay;
        let gDay;

        data1.map(obj => {
            if (obj.gregorian.date == '18-09-2024') {
                hDate = obj.hijri.date;
                gDate = obj.gregorian.date;
                hDay = obj.hijri.weekday.ar;
                gDay = obj.gregorian.weekday.en;
                console.log(hDate, gDate, hDay, gDay);
                
                let hBtn = document.createElement('button');
                let gBtn = document.createElement('button');
                let div = document.createElement('div');
                let div2 = document.createElement('div2');
                let date = document.createElement('p');
                let day = document.createElement('p');

                div.classList.add("div");
                div2.classList.add("div");

                pray.appendChild(div);
                pray.appendChild(div2);

                hBtn.classList.add("pray-button");
                hBtn.textContent = "Date in Hijri"

                gBtn.classList.add("pray-button");
                gBtn.textContent = "Date in Gregorian"

                dayhere.textContent = gDay;
                div.appendChild(hBtn);
                div2.appendChild(gBtn);

                hBtn.addEventListener("click", () => {
                    date.textContent = hDate;
                    // day.textContent = hDay;
                    
                    div.appendChild(date);
                    div.appendChild(day);

                })

                gBtn.addEventListener("click", () => {
                    date.textContent = gDate;
                    // day.textContent = gDay;
                    
                    div2.appendChild(date);
                    div2.appendChild(day);

                })
            }
        }

        )

    })