const btnEL = document.getElementById("btn");

const autherEL = document.getElementById("author");
const paragraphEL = document.getElementById("paragraph");


btnEL.addEventListener("click", async function () {
    try {
        btnEL.innerText = "Loading...";
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        // console.log(data.author);
        autherEL.innerText = "~" + data.author;
        paragraphEL.innerText = data.content;
        btnEL.innerText = "GET A QUOTE";

    } catch (error) {
        // console.log(error)
        paragraphEL.innerText = "An error happend , try again later";

    }


})  