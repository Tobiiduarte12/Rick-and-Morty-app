const cardContainer = document.querySelector("main");

const BASE_URL = "https://rickandmortyapi.com/api/character/";

const getRandomNumber = () => {
  return Math.floor(Math.random() * 825) + 1;
};

const getPJ = async () => {
  try {
    const newPJ = await fetch(`${BASE_URL}${getRandomNumber()}`).then((res) =>
      res.json()
    );
    // console.log(newPJ);
    return newPJ;
  } catch (error) {
    console.error(error);
    cardContainer.innerHTML = `<h1>Se rompió todo, perdón</h1>`;
  }
};

const renderNewPJ = (character) => {
  const { id, image, name, species, origin, gender } = character;
  cardContainer.innerHTML = `
        <h1>Pe jota aleatorio 🤪</h1>
        <div class="cardWrapper" id=${id}>
			<div class="imgContainer">
				<img src=${image} alt="" />
			</div>
			<div class="infoContainer">
				<h1>${name}</h1>
				<div class="info">
					<h2>ESPECIE:</h2>
					<span>${species}</span>
				</div>
				<div class="info">
					<h2>ORIGEN:</h2>
					<span>${origin.name}</span>
				</div>
				<div class="info">
					<h2>GENERO:</h2>
					<span>${gender}</span>
				</div>
			</div>
		</div>
    `;
};

const getAndRenderPJ = async () => {
  cardContainer.innerHTML = `
        <h1>CARGANDO...</h1>
    `;
  const pj = await getPJ();
  renderNewPJ(pj);
};

const init = () => {
  window.addEventListener("DOMContentLoaded", getAndRenderPJ);
};

init();
