const btn1 = document.getElementById("btn");
const jokeele = document.getElementById("joke");
const apikey = "XnnKgycmyE86B4Q6x/2rJQ==bLQtOO11kHOGxRDQ";
const options = {
    method: "GET",
    headers: { 'X-Api-Key': apikey },
};
const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    try {
        jokeele.innerText = "Updating..."
        btn1.disable = true;
        btn1.innerText = "Loading.."
        const response = await fetch(apiurl, options)
        const data = await response.json()
        console.log(data[0].joke);
        jokeele.innerText = data[0].joke;
        btn1.disable = false;
        btn1.innerText = "Next Joke Please!"
    } catch (error) {
        jokeele.innerText = "An Error Happens,Try Again Later Or check Your Network";
        console.log("Error");
    }

}
btn1.addEventListener("click", getJoke)
