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
    gettingInput("profession", this.value, 0);
})
employerInputField.addEventListener('keyup', function () {
    let inputIsValid=testingMin2Symbols(this.value);
    displayValidation(inputIsValid, this);
    gettingInput('employer', this.value, 0);
})
startDateInputField.addEventListener('change', function () {
    gettingInput("startdate", this.value, 0);
})
endDateInputField.addEventListener('change', function () {
    gettingInput("enddate", this.value, 0);
})
descriptionInputField.addEventListener('keyup', function () {
    let inputIsValid=testingDescription(this.value);
    displayValidation(inputIsValid, this);
    gettingInput('description-experience', this.value, 0);
})

addNewFormButton.addEventListener('click', function () {
    addingNewExperienceDiv(count);
    addingNewExperienceDivResult(count);
    sessionStorage.setItem("numberOfExperienceResults", count);
    count++;
});

function refreshExperienceResults() {
    let numberOfExperienceResults = sessionStorage.getItem("numberOfExperienceResults");
    if(numberOfExperienceResults >0)
    {
        for(i = 0; i< numberOfExperienceResults+1; i++) {
            let number = i;
            refreshResultField("profession", number);
            refreshResultField("employer", number);
            refreshResultField("startdate", number);
            refreshResultField("enddate", number);
            refreshResultField("description-experience", number);
        }
    }
}

function refreshResultField (fieldId, number)
{
    let targetDivId = fieldId+'-result-'+number;
    let valueFromSessionStorage = sessionStorage.getItem(targetDivId);
    if (valueFromSessionStorage != null && valueFromSessionStorage != undefined) {
        let targetResultParentDiv = document.getElementById("experience-div-result-"+number);
        if (targetResultParentDiv == null) {
            addingNewExperienceDivResult(number);
        }
        let targetResultDiv = document.getElementById(targetDivId);
        targetResultDiv.innerHTML=valueFromSessionStorage;
    }
}

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

    newProfessionDivAndInput.inputElement.addEventListener('keyup', function () {
        let inputIsValid=testingMin2Symbols(this.value);
        displayValidation(inputIsValid, this);
        gettingInput("profession", this.value, number);
    })

    newEmployerDivAndInput.inputElement.addEventListener('keyup', function () {
        let inputIsValid=testingMin2Symbols(this.value);
        displayValidation(inputIsValid, this);
        gettingInput("employer", this.value, number);
    })

    document.getElementById('startdate-'+number).addEventListener('change', function () {
        gettingInput("startdate", this.value, number);
    })

    document.getElementById('enddate-'+number).addEventListener('change', function () {
        gettingInput("enddate", this.value, number);
    })

    newDescriptionDivAndInput.inputElement.addEventListener('keyup', function () {
        let inputIsValid=testingDescription(this.value);
        displayValidation(inputIsValid, this);
        gettingInput("description-experience", this.value, number);
    })
}


refreshExperienceResults();
