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
    let newDescriptionDiv=addingNewDescriptionDiv(description,'აღწერა', 'როლი თანამდებობაზე და ზოგადი აღწერა');
    let newLineDiv=document.createElement('div');
    newLineDiv.classList.add('line');

    newForm.appendChild(newStandartDiv);
    newForm.appendChild(newDegreeDateDiv);
    newForm.appendChild(newDescriptionDiv);
    newForm.appendChild(newLineDiv);
    addNewFormButton.parentNode.insertBefore(newForm, addNewFormButton);
    count++;
}


