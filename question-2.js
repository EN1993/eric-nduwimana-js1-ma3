
const url ="https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultContainer = document.querySelector(".results");

async function gamesRatting() {
  
    const response = await fetch (url);

    console.log(response);
}