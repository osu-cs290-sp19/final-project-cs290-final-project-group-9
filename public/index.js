console.log("JS LOADED");


// DONATE MODAL

var donateCat = document.getElementById('donate');

var donateModalBG = document.getElementById('modal-backdrop');

var donateModal = document.getElementById('add-cat-modal');

var cancelButton = document.getElementsByClassName('modal-cancel-button')[0];

var submitButton = document.getElementsByClassName('modal-submit-button')[0];

function clearCheckedValues(className){
  var list = document.getElementsByClassName(className);
  for (var i = 0; i < list.length; i++){
    list[i].checked = false;
  }
}

function clearDonateInputs(){
  // CLEARS ALL INPUT FIELDS OF CAT MODAL
  document.getElementById('cat-name-input').value = "";
  document.getElementById('cat-age-input').value = "";
  clearCheckedValues('cat-sex-input');
  document.getElementById('cat-chonk-input').checked = false;
  clearCheckedValues('cat-fur-input');
  document.getElementById('cat-play-input').value = "";
  document.getElementById('cat-cuddle-input').value = "";
  document.getElementById('cat-pet-input').checked = false;
  document.getElementById('cat-desc-input').value = "";
  document.getElementById('cat-img-input').value = "";
}

function closeDonateModal(event){
  donateModal.classList.toggle('hidden');
  donateModalBG.classList.toggle('hidden');
  clearDonateInputs();
}

function getCheckedValue(className){
  var list = document.getElementsByClassName(className);
  for (var i = 0; i < list.length; i++){
    if (list[i].checked) return list[i].value;
  }
  return null;
}

function validateCat(cat){

  if (!cat.name) return false;
  if(isNaN(cat.age) || cat.age <= 0) return false;
  if(cat.sex != 'male' && cat.sex != 'female') return false;
  if (!cat.coat) return false;
  if (isNaN(cat.play) || cat.play < 1 || cat.play > 5) return false;
  if (isNaN(cat.cuddle) || cat.cuddle < 1 || cat.cuddle > 5) return false;
  if (!cat.desc) return false;
  if (!cat.img) return false;

  return true;
}

donateCat.addEventListener('click', closeDonateModal);

cancelButton.addEventListener('click', closeDonateModal);

submitButton.addEventListener('click', function(event){

  // GET ALL THE SHIT
  // PUT IT ALL IN A OBJECT

  var cat = {
    name: document.getElementById('cat-name-input').value,
    age: parseInt(document.getElementById('cat-age-input').value, 10),
    sex: getCheckedValue('cat-sex-input'),
    chonk: document.getElementById('cat-chonk-input').checked,
    coat: getCheckedValue('cat-fur-input'),
    play: parseInt(document.getElementById('cat-play-input').value, 10),
    cuddle: parseInt(document.getElementById('cat-cuddle-input').value, 10),
    pets: document.getElementById('cat-pet-input').checked,
    desc: document.getElementById('cat-desc-input').value,
    img: document.getElementById('cat-img-input').value
  }

  // VALIDATE ALL THE FUCKING SHIT

  if (validateCat(cat)){

    // SEND THE POST REQUEST
    var request = new XMLHttpRequest();
    var url = '/addCat';
    request.open('POST', url);

    var requestBody = JSON.stringify(cat);
    console.log('==requestBody: ', requestBody);

    request.addEventListener('load', function(event){
      if (event.target.status === 200){

        console.log('==Successful Post');
        var kittenCardTemplate = Handlebars.templates.kittenCard;
        var newCatHTML = kittenCardTemplate(cat);
        console.log('==newCatHTML:', newCatHTML);
        var kittenContainer = document.getElementsByClassName('kitten-container')[0];
        kittenContainer.insertAdjacentHTML('beforeEnd', newCatHTML);
        var lastCat = document.getElementsByClassName('kitten-card');
        lastCat[lastCat.length - 1].addEventListener('click', kittenClicked);

      } else {
        var message = event.target.response;
        alert("Error submitting cat: " + message);
      }
    });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    closeDonateModal();

  } else {
    alert("fill in the form with valid information, you must.");
  }
});

// END OF DONATE MODAL

// START OF QUIZ MODAL

var quizButton = document.getElementById('Quiz');

var quizModalBG = document.getElementById('modal-backdrop-quiz');

var quizModal = document.getElementById('quiz-modal');

var cancelButtonQuiz = document.getElementsByClassName('modal-cancel-button-quiz')[0];

var submitButtonQuiz = document.getElementsByClassName('modal-submit-button-quiz')[0];

quizButton.addEventListener('click', function (event) {
  quizModal.classList.toggle('hidden');
  quizModalBG.classList.toggle('hidden');
});

// END OF QUIZ MODAL

// START OF KITTEN SIDEBAR

var selectedCat = null;

function kittenClicked(event){
  var selectedCat = event.currentTarget;

  var catId = {
    id: selectedCat.id
  }
  console.log('==ID:', catId);

  var request = new XMLHttpRequest();
  var url = '/getCat';
  request.open('POST', url);
  var requestBody = JSON.stringify(catId);
  console.log(requestBody);

  request.addEventListener('load', function(event){
    console.log(event.target.response);
    selectedCat = JSON.parse(event.target.response);

    var sidebar = {
      name: document.getElementById('sidebar-name'),
      sex: document.getElementById('sidebar-sex'),
      age: document.getElementById('sidebar-age'),
      desc: document.getElementById('sidebar-desc')
    }

    sidebar.name.textContent = "Name: " + selectedCat.name;
    sidebar.sex.textContent = "Sex: " + selectedCat.sex;
    sidebar.age.textContent = "Age: " + selectedCat.age;
    sidebar.desc.textContent = "Description: " + selectedCat.desc;
  });

  request.setRequestHeader('Content-Type', 'application/json')
  request.send(requestBody);
  console.log('==req sent');
}

var kittenCards = document.getElementsByClassName('kitten-card');
for (var i = 0; i < kittenCards.length; i++){
  kittenCards[i].addEventListener('click', kittenClicked);
}
 //END OF KITTEN SIDEBAR
