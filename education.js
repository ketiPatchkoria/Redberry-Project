const backBtn=document.querySelector('.back-btn');
const nextBtn=document.querySelector('.next-btn');
const addNewFormButton=document.querySelector('.adding-form-button');
const universityInputField=document.getElementById('university');
const degreeInputField=document.getElementById('degree');
const endDateForDegreeInputField=document.getElementById('enddate-fordegree');
const descriptionInputField=document.getElementById('description');
let count=1;

backBtn.addEventListener ('click', function(){
    location.href="experience.html";
})
nextBtn.addEventListener ('click', function(){
    location.href="result.html";
})

universityInputField.addEventListener('keyup', function () {
    let universityIsValid=testingMin2Symbols(this.value);
    displayValidation(universityIsValid, this);
    gettingInput(this, universityResult);
})
descriptionInputField.addEventListener('keyup', function () {
    let descriptionIsValid=testingDescription(this.value);
    displayValidation(descriptionIsValid, this);
    gettingInput(this, descriptionEducationResult);
})
endDateForDegreeInputField.addEventListener('change', function () {
    gettingInput(this, endDateForDegreeResult);
})

addNewFormButton.addEventListener('click', addingNewEducationForm);

function addingNewEducationForm () {
    let newForm = document.createElement('form');
    let newStandartDiv=addingNewStandartDiv(university, 'სასწავლებელი', 'სასწავლებელი');
    let newDegreeDateDiv=document.createElement('div');
    newDegreeDateDiv.classList.add('degree-enddate-div');
    let newDateDiv=addingNewDateDiv(enddate, 'დამთავრების რიცხვი');
    //newDegreeDateDiv.appendChild();
    newDegreeDateDiv.appendChild(newDateDiv);
    let newDescriptionDiv=addingNewDescriptionDiv('აღწერა', 'როლი თანამდებობაზე და ზოგადი აღწერა').parentDiv;
    let newLineDiv=document.createElement('div');
    newLineDiv.classList.add('line');

    newForm.appendChild(newStandartDiv);
    newForm.appendChild(newDegreeDateDiv);
    newForm.appendChild(newDescriptionDiv);
    newForm.appendChild(newLineDiv);
    addNewFormButton.parentNode.insertBefore(newForm, addNewFormButton);
    count++;
}

function loadDropdownOptions() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://resume.redberryinternship.ge/api/degrees");
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const degrees = xhr.response;
      console.log(degrees);
      for (let degree of degrees) {
        creatingSelectOptions(degree);
      }
    } 
    else {
      console.log(`Error: ${xhr.status}`);
    }
  };
}

function creatingSelectOptions (degree) {
    const opt=document.createElement('option');
    opt.innerHTML = degree.title;
    degreeInputField.appendChild(opt);
}

loadDropdownOptions();

degreeInputField.addEventListener('change', function () {
    let selectedOption=this.value;
    console.log(selectedOption);
})
