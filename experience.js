const backBtn=document.querySelector('.back-btn');
const nextBtn=document.querySelector('.next-btn');
const addNewFormButton=document.querySelector('.adding-form-button');
const professionInputField=document.getElementById('profession');
const employerInputField=document.getElementById('employer');
const startDateInputField=document.getElementById('startdate');
const endDateInputField=document.getElementById('enddate');
const descriptionInputField=document.getElementById('description');
let newFormAdded=false;
let count=1;

backBtn.addEventListener ('click', function(){
    location.href="generalinfo.html";
})
nextBtn.addEventListener ('click', function(){
    location.href="education.html";
})

professionInputField.addEventListener('keyup', function () {
    let inputIsValid=testingMin2Symbols(this.value);
    displayValidation(inputIsValid, this);
    let professionResult = document.querySelector('.profession-result');
    gettingInput(this, professionResult);
})
employerInputField.addEventListener('keyup', function () {
    let inputIsValid=testingMin2Symbols(this.value);
    displayValidation(inputIsValid, this);
    let employerResult = document.querySelector('.employer-result');
    gettingInput(this, employerResult);
})
startDateInputField.addEventListener('change', function () {
    let startDateResult = document.querySelector('.startdate-result');
    gettingInput(this, startDateResult);
})
endDateInputField.addEventListener('change', function () {
    gettingInput(this, endDateResult);
})
descriptionInputField.addEventListener('keyup', function () {
    let inputIsValid=testingDescription(this.value);
    displayValidation(inputIsValid, this);
    let descriptionExperienceResult=document.querySelector('.description-experience-result');
    gettingInput(this, descriptionExperienceResult);
})

addNewFormButton.addEventListener('click', function () {
    addingNewExperienceDiv(count);
    addingNewExperienceDivResult(count);
    count++;
});

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


function addingNewExperienceDiv (number) {
    let newExperienceDiv = document.createElement('div');
    let newProfessionDivAndInput=addingNewStandartDiv("profession-", 'თანამდებობა', 'დეველოპერი, დიზაინერი, ა.შ.');
    let newEmployerDivAndInput=addingNewStandartDiv("employer-","დამსაქმებელი", 'დამსაქმებელი');
    
    let startAndEndDateParentDiv=document.createElement('div');
    let newDescriptionDivAndInput=addingNewDescriptionDiv('აღწერა', 'როლი თანამდებობაზე და ზოგადი აღწერა');

    startAndEndDateParentDiv.classList.add('working-period-div');
    let newStartDateDiv=addingNewDateDiv("startdate-", 'დაწყების რიცხვი');
    let newEndDateDiv=addingNewDateDiv("enddate-", 'დამთავრების რიცხვი');
    startAndEndDateParentDiv.appendChild(newStartDateDiv);
    startAndEndDateParentDiv.appendChild(newEndDateDiv);

    let newLineDiv=document.createElement('div');
    newLineDiv.classList.add('line');

    newExperienceDiv.appendChild(newProfessionDivAndInput.parentDiv);
    newExperienceDiv.appendChild(newEmployerDivAndInput.parentDiv);
    newExperienceDiv.appendChild(startAndEndDateParentDiv);
    newExperienceDiv.appendChild(newDescriptionDivAndInput.parentDiv);
    newExperienceDiv.appendChild(newLineDiv);
    addNewFormButton.parentNode.insertBefore(newExperienceDiv, addNewFormButton);

    
    newDescriptionDivAndInput.inputElement.addEventListener('keyup', function () {
        let inputIsValid=testingDescription(this.value);
        displayValidation(inputIsValid, this);
        gettingInput(this, document.getElementById("description-experience-result-"+number));
    })

    newProfessionDivAndInput.inputElement.addEventListener('keyup', function () {
        let inputIsValid=testingMin2Symbols(this.value);
        displayValidation(inputIsValid, this);
        
        gettingInput(this, document.getElementById("profession-result-"+number));
    })

    newEmployerDivAndInput.inputElement.addEventListener('keyup', function () {
        let inputIsValid=testingMin2Symbols(this.value);
        displayValidation(inputIsValid, this);
        gettingInput(this, document.getElementById("employer-result-"+number));
    })

    document.getElementById('startdate-'+number).addEventListener('change', function () {
        gettingInput(this, document.getElementById("startdate-result-"+number));
    })

    document.getElementById('enddate-'+number).addEventListener('change', function () {
        gettingInput(this, document.getElementById("enddate-result-"+number));
    })
}

