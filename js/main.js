'use strict';

//const formHidden = document.querySelector('.js-new-form');
//formHidden.classList.remove("collapsed");


const formList = document.querySelector('.js-list');

const kittenOneImg = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio';
const kittenOneDesc = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';

// const kittenOne = `<li class="card"><article class="js-cat1"><img class="card_img"src="${kittenOneImg}" alt="siames-cat"/><h3 class="card_title">${kittenOneName.toUpperCase()}</h3><h4 class="card_race">${kittenOneRace}</h4><p class="card_description">${kittenOneDesc}</p></article></li>`;

const kittenTwoImg = "https://dev.adalab.es/sphynx-gato.webp";
const kittenTwoName = "Fiona";
const kittenTwoRace = "Sphynx";
const kittenTwoDesc = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza  gatuna que se caracteriza por la «ausencia» de pelo.";

// const kittenTwo = `<li class="card js-cat2"><article><img    class="card_img"src="${kittenTwoImg}" alt="siames-cat"/><h3 class="card_title">${kittenTwoName.toUpperCase()}</h3><h4 class="card_race">${kittenTwoRace}</h4><p class="card_description">${kittenTwoDesc}</p></article></li>`;

const kittenThreeImg = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenThreeName = "Cielo";
const kittenThreeRace = "Maine Coon";
const kittenThreeDesc = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";

// const kittenThree = `<li class="card js-cat3"><article "><img class="card_img"src="${kittenThreeImg}" alt="siames-cat"/><h3 class="card_title">${kittenThreeName.toUpperCase()}</h3><h4 class="card_race">${kittenThreeRace}</h4><p class="card_description">${kittenThreeDesc}</p></article></li>`;

// formList.innerHTML = kittenOne + kittenTwo + kittenThree;

function renderKitten(url, name, race, desc) {
  const kittenImg = url;
  const kittenRace = race;
  const kittenName = name;
  const kittenDesc = desc;

  formList.innerHTML += `<li class="card"><article class="js-article-3"><img    class="card_img"src="${kittenImg}" alt="siames-cat"/><h3 class="card_title">${kittenName.toUpperCase()}</h3><h4 class="card_race">${kittenRace}</h4><p class="card_description">${kittenDesc}</p></article></li>`;
};

renderKitten(kittenOneImg, kittenOneName, kittenOneRace, kittenOneDesc);
renderKitten(kittenTwoImg, kittenTwoName, kittenTwoRace, kittenTwoDesc);
renderKitten(kittenThreeImg, kittenThreeName, kittenThreeRace, kittenThreeDesc);


const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;
const cat1 = document.querySelector('.js-cat1');
const cat2 = document.querySelector('.js-cat2');
const cat3 = document.querySelector('.js-cat3');


// if (kittenOneDesc.includes(descrSearchText)) {
//   cat2.classList.add('collapsed');
//   cat3.classList.add('collapsed');
// }
// if (kittenTwoDesc.includes(descrSearchText)) {
//   cat1.classList.add('collapsed');
//   cat3.classList.add('collapsed');
// }
// if (kittenThreeDesc.includes(descrSearchText)) {
//   cat1.classList.add('collapsed');
//   cat2.classList.add('collapsed');
// }


const buttonPlus = document.querySelector('.item');
const form = document.querySelector('.js-new-form')

buttonPlus.addEventListener('click', (event) => {
  event.preventDefault();
  form.classList.toggle('collapsed')
})

const buttonAdd = document.querySelector('.js-btn-add');

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');

buttonAdd.addEventListener('click', addNewKitten);

function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
  } else {
    labelMessageError.innerHTML = "Todo ok";
  }
}

// buttonAdd.addEventListener('click', (event) => {
//   event.preventDefault();
//   const valueDesc = inputDesc.value;
//   const valuePhoto = inputPhoto.value;
//   const valueName = inputName.value;
//   const valueRace = inputRace.value;

//   if (valueDesc === '' || valuePhoto === '' || valueName === '') {
//     labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo"
//   } else {
//     labelMessageError.innerHTML = "Bien!"
//   }
// })

const buttonCancel = document.querySelector('.js-btn-cancel');

buttonCancel.addEventListener('click', (event) => {
  event.preventDefault();
  inputPhoto.value = '';
  inputName.value = '';
  inputRace.value = '';
  inputDesc.value = '';
  form.classList.add('collapsed');
})




