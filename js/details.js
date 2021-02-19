// CA

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const apiPoke = "https://api.pokemontcg.io/v2/cards/" + id;

async function getPoke() {
  try {
    const response = await fetch(apiPoke);
    const details = await response.json();
    const pokemon = details.data;
    document.title = `${pokemon.name}`;
    document.querySelector("h2").innerHTML = `${pokemon.name}`;
    document.querySelector(
      ".pokepic"
    ).innerHTML = `<img src="${pokemon.images.small}" />`;
    document.querySelector(".pokeinfo").innerHTML = `
        <div class= "pokediv">
        <p>HP:${pokemon.hp}</p>
        <p>LEVEL:${pokemon.level}</p>
        <p>ID NAME:${pokemon.id}</p>
        </div>
        `;
  } catch (error) {
    document.querySelector(".alert").innerHTML = showAlertTouser(
      "danger",
      error
    );
  } finally {
    setTimeout(function () {
      document.querySelector(".alert").innerHTML = "";
    }, 3000);
  }
}
getPoke();
