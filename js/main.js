'use strict';

const form = document.querySelector('.js-new-form');

const list = document.querySelector('.js-list');

const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio';
const kittenOneDesc = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';


const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenTwoName = 'Fiona';
const kittenTwoDesc = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenTwoRace = 'Sphynx';


const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenThreeName = 'Cielo';
const kittenThreeDesc = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThreeRace = 'Maine Coon';



// list.innerHTML = `${kittenOne} ${kittenTwo} ${kittenThree}`;

const input_search_desc = document.querySelector('.js_in_search_desc');

const formMenu = document.querySelector('.js-menu');
const addButton = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputRace = document.querySelector('.js-input-race');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const cancel = document.querySelector('.js-cancel');

formMenu.addEventListener('click', handleClick);
function handleClick(ev) {
  if (form.classList.contains('collapsed')) {
    showNewCatForm()
    //form.classList.remove("collapsed"); 
  } else {
    hideNewCatForm()
    //form.classList.add('collapsed');
  }
}
function showNewCatForm() {
  form.classList.remove('collapsed');
}
function hideNewCatForm() {
  form.classList.add('collapsed');
}

addButton.addEventListener('click', addNewKitten);
function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo'
  } else {
    renderKitten(valuePhoto, valueDesc, valueName, valueRace)
    labelMessageError.innerHTML = '¡Ok!'
  }
}
/*
cancel.addEventListener('click', () => {
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
  form.classList.add('collapsed');
})
*/

// function renderKitten(url, desc, name, race) {
//   const kitten = `<li class="card">
//   <article>
//   <img class="card_img" src= ${url} alt="sphynx-cat"/>
//   <h3 class="card_title">${name} </h3>
//   <h4 class="card_race">${renderRace(race)} </h4>
//   <p class="card_description">${desc}</p>
//   </article>
//   </li>`;
//   list.innerHTML += `${kitten}`;
// }

// renderKitten(kittenOneImage, kittenOneDesc, kittenOneName, kittenOneRace);

// renderKitten(kittenTwoImage, kittenTwoDesc, kittenTwoName, kittenTwoRace);

// renderKitten(kittenThreeImage, kittenThreeDesc, kittenThreeName, kittenThreeRace);


const cancelNewKitten = (event) => {
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
  form.classList.add('collapsed');
};

const buttonCancelForm = document.querySelector('.js-cancel');
buttonCancelForm.addEventListener('click', cancelNewKitten);

const buttonSearch = document.querySelector('.js-button-search');
const input_search_race = document.querySelector('.js_in_search_race');

const filterKitten = (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;

  if (kittenOneDesc.includes(descrSearchText)) {
    renderKitten(kittenOneImage, kittenOneDesc, kittenOneName, kittenOneRace);
  }
  if (kittenTwoDesc.includes(descrSearchText)) {
    renderKitten(kittenTwoImage, kittenTwoDesc, kittenTwoName, kittenTwoRace);
  }
  if (kittenThreeDesc.includes(descrSearchText)) {
    renderKitten(kittenThreeImage, kittenThreeDesc, kittenThreeName, kittenThreeRace);
  }
  else {
  }
};

buttonSearch.addEventListener('click', filterKitten);

const raceSearchText = input_search_race.value;

function renderRace(race) {
  let searchRace = '';
  if (race === '') {
    searchRace = `<p class="card_race">No se ha especificado la raza</p>`;
  } else {
    searchRace = `<h3 class="card_race">${race}</h3>`;
  }
  return searchRace;
}
console.log(renderRace(kittenOneRace));


const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};
const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};
const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};

function renderKitten(kittenData) {

  const kitten = `<li class="card">
  <article>
  <img class="card_img" src= ${kittenData_1.image} alt="sphynx-cat"/>
  <h3 class="card_title">${kittenData_1.name} </h3>
  <h4 class="card_race">${kittenData_1.race} </h4>
  <p class="card_description">${kittenData_1.desc}</p>
  </article>
  </li>`;
  list.innerHTML += `${kitten}`;
}