

// Answeer question 2

const url ="https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultContainer = document.querySelector(".results");

async function gamesRating() {
  
  const response = await fetch (url);
  
  const results = await response.json();

  const rating = results.results;

  resultContainer.innerHTML="";

  for (let i = 0; i < rating.length; i++) {
    
    console.log(rating[i].name, rating[i].rating);

    if (i === 8) {
      break;
    }
 
    resultContainer.innerHTML += ` <div class="result">  ${rating[i].name}, ${rating[i].rating} </div>`
  }
}
gamesRating()
