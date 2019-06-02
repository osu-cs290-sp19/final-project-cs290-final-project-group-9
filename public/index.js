console.log("JS LOADED");


// DONATE MODAL

var donateCat = document.getElementById('donate');

var donateModalBG = document.getElementById('modal-backdrop');

var donateModal = document.getElementById('add-cat-modal');

var cancelButton = document.getElementsByClassName('modal-cancel-button')[0];

var submitButton = document.getElementsByClassName('modal-submit-button')[0];

function closeModal(event){
  donateModal.classList.toggle('hidden');
  donateModalBG.classList.toggle('hidden');
}

function getCheckedValue(className){
  var list = document.getElementsByClassName(className);
  for (var i = 0; i < list.length; i++){
    if (list[i].checked) return list[i].value;
  }
}

function validateCat(cat){

  return true;
}

donateCat.addEventListener('click', closeModal);

cancelButton.addEventListener('click', closeModal);

submitButton.addEventListener('click', function(event){

  // GET ALL THE FUCKING SHIT
  // PUT IT ALL IN A OBJECT

  var cat = {
    name: document.getElementById('cat-name-input').value,
    age: document.getElementById('cat-age-input').value,
    sex: getCheckedValue('cat-sex-input'),
    chonk: document.getElementById('cat-chonk-input').checked,
    coat: getCheckedValue('cat-fur-input'),
    play: document.getElementById('cat-play-input').value,
    cuddle: document.getElementById('cat-cuddle-input').value,
    pets: document.getElementById('cat-pet-input').checked,
    desc: document.getElementById('cat-desc-input').value,
    img: document.getElementById('cat-img-input').value
  }

  // VALIDATE ALL THE FUCKING SHIT

  if (validateCat(cat)){

    // SEND THE POST REQUEST

  }
});

// END OF DONATE MODAL
