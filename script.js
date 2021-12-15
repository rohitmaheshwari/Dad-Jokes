const jokes = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// const nextJoke = () => {
//     const setHeaders = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch("https://icanhazdadjoke.com/", setHeaders)
//     .then((res) => res.json())
//     .then((data) => jokes.innerHTML = data.joke)
//     .catch((err) => console.log(err))
// }

// jokeBtn.addEventListener("click", nextJoke);
// nextJoke();


const nextJoke = async () => {
    const setHeaders = {
        headers: {
            Accept: "application/json"
        }
    }

    try{
        const res = await fetch("https://icanhazdadjoke.com/", setHeaders);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }catch(err){
        console.log(err);
    }
}

jokeBtn.addEventListener("click", nextJoke);
nextJoke();