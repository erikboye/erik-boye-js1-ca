// CA

async function getPoke() {
  try {
    const response = await fetch("https://api.pokemontcg.io/v2/cards/");
    const details = await response.json();
    const pokeResults = details.data;
    console.log(pokeResults);

    for (let i = 0; i < pokeResults.length; i++) {
      if (i === 30) {
        break;
      }

      document.querySelector("main").innerHTML += `
            <div class="pokeCard">
            <h2>${pokeResults[i].name}</h2>
            <p>${pokeResults[i].number}</p>
            <img src="${pokeResults[i].images.small}"/>
            	<a href="details.html?id=${pokeResults[i].id}">Click for more</a>
            </div>
            `;
    }
  } catch (error) {
    document.querySelector(".alert").innerHTML = showAlertTouser(
      "danger",
      "Error"
    );
  } finally {
    setTimeout(function () {
      document.querySelector(".alert").innerHTML = "";
    }, 5000);
  }
}
getPoke();
