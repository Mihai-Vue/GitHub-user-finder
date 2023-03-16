document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const userName = document.querySelector("input").value
        const response = await fetch(`https://api.github.com/users/${userName}`)
        const data = response.json()
        console.log(data);
    })
})




// github api:  https://api.github.com/users/<username>
