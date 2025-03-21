document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevents the page from refreshing

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const secretCode = document.getElementById("secret-code").value;

        if (secretCode !== "gramscarbbleWSZYSCYAkońroszada") {
            alert("Invalid secret code!");
            return;
        }

        const userData = { username, password };

        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            if (response.ok) {
                alert("Registration successful!");
                window.location.href = "login.html"; // Redirect to login page
            } else {
                alert(data.message || "Registration failed.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Try again later.");
        }
    });
});
