const backBtn=document.querySelector('.back-btn');
const nextBtn=document.querySelector('.next-btn');
const addNewFormButton=document.querySelector('.adding-form-button');
const professionInputField=document.getElementById('profession');
const employerInputField=document.getElementById('employer');
const startDateInputField=document.getElementById('startdate');
const endDateInputField=document.getElementById('enddate');
const descriptionInputField=document.getElementById('description');

let count=1;

backBtn.addEventListener ('click', function(){
    location.href="generalinfo.html";
})
nextBtn.addEventListener ('click', function(){
    location.href="education.html";
})

professionInputField.addEventListener('keyup', function () {
    let professionIsValid=testingMin2Symbols(this.value);
    displayValidation(professionIsValid, this);
    gettingInput(this, professionResult);
})
employerInputField.addEventListener('keyup', function () {
    let employerIsValid=testingMin2Symbols(this.value);
    displayValidation(employerIsValid, this);
    gettingInput(this, employerResult);
})
startDateInputField.addEventListener('change', function () {
    gettingInput(this, startDateResult);
})
endDateInputField.addEventListener('change', function () {
    gettingInput(this, endDateResult);
})
descriptionInputField.addEventListener('keyup', function () {
    let descriptionIsValid=testingDescription(this.value);
    displayValidation(descriptionIsValid, this);
    gettingInput(this, descriptionForExperienceResult);
})

addNewFormButton.addEventListener('click', addingNewExperienceForm);

// function testingDate (inputField) {
//     if (!inputField.value) {
//         return false;
//     }
//     else {
//         return true;
//     }

// }
// startDateInputField.addEventListener ('click', function (){
//     testingDate(this);
//     let isDate=testingDate(this);
//     console.log(isDate);
//     displayValidation(isDate, this);
// })


function addingNewExperienceForm () {
    let newForm = document.createElement('form');
    let newStandartDiv=addingNewStandartDiv(profession, 'თანამდებობა', 'დეველოპერი, დიზაინერი, ა.შ.');
    let newStandartDiv1=addingNewStandartDiv(employer,"დამსაქმებელი", 'დამსაქმებელი');
    let newDateDiv=document.createElement('div');
    let newDescriptionDiv=addingNewDescriptionDiv(description,'აღწერა', 'როლი თანამდებობაზე და ზოგადი აღწერა');
   
    newDateDiv.classList.add('working-period-div');
    let newStartDateDiv=addingNewDateDiv(startdate, 'დაწყების რიცხვი');
    let newEndDateDiv=addingNewDateDiv(enddate, 'დამთავრების რიცხვი');
    newDateDiv.appendChild(newStartDateDiv);
    newDateDiv.appendChild(newEndDateDiv);

    let newLineDiv=document.createElement('div');
    newLineDiv.classList.add('line');

    newForm.appendChild(newStandartDiv);
    newForm.appendChild(newStandartDiv1);
    newForm.appendChild(newDateDiv);
    newForm.appendChild(newDescriptionDiv);
    newForm.appendChild(newLineDiv);
    addNewFormButton.parentNode.insertBefore(newForm, addNewFormButton);
    count++;
}

