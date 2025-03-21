document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    // Registration Logic
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const secretCode = document.getElementById("secretCode").value;

            if (secretCode !== "gramscarbbleWSZYSCYAkońroszada") {
                alert("Invalid secret code!");
                return;
            }

            if (localStorage.getItem(username)) {
                alert("Username already exists!");
                return;
            }

            localStorage.setItem(username, JSON.stringify({ password }));
            alert("Registration successful! You can now log in.");
            window.location.href = "index.html";
        });
    }

    // Login Logic
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;
            const storedUser = localStorage.getItem(username);

            if (!storedUser) {
                alert("User not found!");
                return;
            }

            const userData = JSON.parse(storedUser);
            if (userData.password !== password) {
                alert("Incorrect password!");
                return;
            }

            alert("Login successful!");
            window.location.href = "forum.html";
        });
    }
});
