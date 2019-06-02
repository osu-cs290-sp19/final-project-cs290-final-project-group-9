console.log("JS LOADED");


// DONATE MODAL

var donateCat = document.getElementById('donate');

var donateModalBG = document.getElementById('modal-backdrop');

var donateModal = document.getElementById('add-cat-modal');

var cancelButton = document.getElementsByClassName('modal-cancel-button')[0];

function closeModal(event){
  donateModal.classList.toggle('hidden');
  donateModalBG.classList.toggle('hidden');
}

donateCat.addEventListener('click', closeModal);

cancelButton.addEventListener('click', closeModal);

// END OF DONATE MODAL
