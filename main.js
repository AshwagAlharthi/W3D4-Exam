let nameIn = document.getElementById("namein");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let result = document.getElementById("result");
let btn = document.getElementById("btn");


btn.addEventListener("click", () => {

    let usernameValue = username.value;
    let passwordValue = password.value;

    result.style.color = 'red';

    if (btn.textContent == 'Sign Up') {
        let nameValue = nameIn.value;
        let emailValue = email.value;
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (nameValue == '' || usernameValue == '' || emailValue == '' || passwordValue == '') {
            result.textContent = '*Please fill the fields';
            return;
        } else {
            if (nameValue.length <= 3) {
                result.textContent = '*The name should be more than 3 charcters!';
                return;
            }

            if (usernameValue == usernameValue.toLowerCase()) {
                console.log(usernameValue + '==' + usernameValue.toLowerCase());

                result.textContent = '*Username should have at least 1 capital letter!';
                return;
            }

            if (!emailRegex.test(emailValue)) {
                result.textContent = '*Invalid Email!';
                return;
            }

            if (passwordValue.length <= 4) {
                result.textContent = '*The password should be more than 4 charcters!';
                return;
            }

            result.textContent = '';

            fetch('https://66e7e6c1b17821a9d9da70a4.mockapi.io/login', {
                method: 'POST',
                body: JSON.stringify({
                    name: nameValue,
                    username: usernameValue,
                    email: emailValue,
                    password: passwordValue,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem('homeUserId', data.id);
                    // window.location.href = "login.html";
                });
        }

    }
    else if (btn.textContent == 'Log In') {
        if (usernameValue == '' || passwordValue == '') {
            result.textContent = '*Please fill the fields';
            return;
        } else {
            if (usernameValue == usernameValue.toLowerCase()) {
                console.log(usernameValue + '==' + usernameValue.toLowerCase());

                result.textContent = '*Please valid your username!';
                return;
            }

            if (passwordValue.length <= 4) {
                result.textContent = '*Please valid your password!';
                return;
            }

            result.textContent = '';

            fetch('https://66e7e6c1b17821a9d9da70a4.mockapi.io/login')
                .then((response) => response.json())
                .then((data) => {
                    data.map(user => {
                        if (user.username == usernameValue && user.password == passwordValue) {                           
                            localStorage.setItem('homeUserId', user.id);
                            window.location.href = "home.html";
                            // result.textContent ="logged";
                        }
                        else{
                            result.textContent = "Invalid Log In";
                            return;
                        }
                    })
                });
        }
    }
});