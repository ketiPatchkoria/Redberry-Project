const backBtn=document.querySelector('.back-btn');
const nextBtn=document.querySelector('.next-btn');
const addNewFormButton=document.querySelector('.adding-form-button');
const professionInputField=document.getElementById('profession');
const employerInputField=document.getElementById('employer');
const startDateInputField=document.getElementById('startdate');
const endDateInputField=document.getElementById('enddate');
const descriptionInputField=document.getElementById('description');
let newFormAdded=false;
let number=1;

backBtn.addEventListener ('click', function(){
    location.href="generalinfo.html";
})
nextBtn.addEventListener ('click', function(){
    location.href="education.html";
})

professionInputField.addEventListener('keyup', function () {
    let inputIsValid=testingMin2Symbols(this.value);
    displayValidation(inputIsValid, this);
    updateResultField("profession", this.value, 0);
})
employerInputField.addEventListener('keyup', function () {
    let inputIsValid=testingMin2Symbols(this.value);
    displayValidation(inputIsValid, this);
    updateResultField('employer', this.value, 0);
})
startDateInputField.addEventListener('change', function () {
    updateResultField("startdate", this.value, 0);
})
endDateInputField.addEventListener('change', function () {
    updateResultField("enddate", this.value, 0);
})
descriptionInputField.addEventListener('keyup', function () {
    let inputIsValid=testingDescription(this.value);
    displayValidation(inputIsValid, this);
    updateResultField('description-experience', this.value, 0);
})

addNewFormButton.addEventListener('click', function () {
    addingNewExperienceDiv(number);
    addingNewExperienceDivResult(number);
    sessionStorage.setItem("numberOfExperienceResults", number);
    number++;
});

function refreshExperienceResults() {
    let numberOfExperienceResults = sessionStorage.getItem("numberOfExperienceResults");
    if(numberOfExperienceResults == null) {
        numberOfExperienceResults = 0;
    }

    if(numberOfExperienceResults >= 0) {
        for(i = 0; i <= numberOfExperienceResults; i++) {
            let number = i;
            refreshResultField("profession", number);
            refreshResultField("employer", number);
            refreshResultField("startdate", number);
            refreshResultField("enddate", number);
            refreshResultField("description-experience", number);
        }
    }
}

function refreshResultField (fieldId, number) {
    let targetParagraphId = fieldId+'-result-'+number;
    let valueFromSessionStorage = sessionStorage.getItem(targetParagraphId);
    if (valueFromSessionStorage != null && valueFromSessionStorage != undefined) {
        let targetResultParentDiv = document.getElementById("experience-div-result-"+number);
        if (targetResultParentDiv == null) {
            addingNewExperienceDivResult(number);
        }
        let targetParagraph = document.getElementById(targetParagraphId);
        targetParagraph.innerHTML=valueFromSessionStorage;
    }
}

function addingNewExperienceDiv (number) {
    let newExperienceDiv = document.createElement('div');
    newExperienceDiv.classList.add('for-new-div');
    let newProfessionDivAndInput=addingNewStandartDiv("profession-", 'თანამდებობა', 'დეველოპერი, დიზაინერი, ა.შ.');
    let newEmployerDivAndInput=addingNewStandartDiv("employer-","დამსაქმებელი", 'დამსაქმებელი');
    
    let startAndEndDateParentDiv=document.createElement('div');
    startAndEndDateParentDiv.classList.add('working-period-div');
    let newStartDateDiv=addingNewDateDiv("startdate-", 'დაწყების რიცხვი');
    let newEndDateDiv=addingNewDateDiv("enddate-", 'დამთავრების რიცხვი');
    startAndEndDateParentDiv.appendChild(newStartDateDiv);
    startAndEndDateParentDiv.appendChild(newEndDateDiv);

    let newDescriptionDivAndInput=addingNewDescriptionDiv('აღწერა', 'როლი თანამდებობაზე და ზოგადი აღწერა');

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
        updateResultField("profession", this.value, number);
    })

    newEmployerDivAndInput.inputElement.addEventListener('keyup', function () {
        let inputIsValid=testingMin2Symbols(this.value);
        displayValidation(inputIsValid, this);
        updateResultField("employer", this.value, number);
    })

    document.getElementById('startdate-'+number).addEventListener('change', function () {
        updateResultField("startdate", this.value, number);
    })

    document.getElementById('enddate-'+number).addEventListener('change', function () {
        updateResultField("enddate", this.value, number);
    })

    newDescriptionDivAndInput.inputElement.addEventListener('keyup', function () {
        let inputIsValid=testingDescription(this.value);
        displayValidation(inputIsValid, this);
        updateResultField("description-experience", this.value, number);
    })
}

function addingNewExperienceDivResult(number) {
    let newExperienceDivResult=document.createElement('div');
    newExperienceDivResult.classList.add('experience-div-result');
    newExperienceDivResult.id = "experience-div-result-"+number;
    
    let newprofessionDivResult=document.createElement('div');
    newprofessionDivResult.classList.add('profession-university-div-result');
    let professionResult=document.createElement('p');
    professionResult.classList.add('profession-result');
    professionResult.id = "profession-result-"+number;

    let employerResult=document.createElement('p');
    employerResult.classList.add('employer-result');
    employerResult.id = "employer-result-"+number;
    newprofessionDivResult.appendChild(professionResult);
    newprofessionDivResult.appendChild(employerResult);

    let newDateDivResult=document.createElement('div');
    newDateDivResult.classList.add('date-div-result');
    let startDateResult=document.createElement('p');
    startDateResult.classList.add('startdate-result');
    startDateResult.id = "startdate-result-"+number;

    let endDateResult=document.createElement('p');
    endDateResult.classList.add('enddate-result');
    endDateResult.id = "enddate-result-"+number;

    newDateDivResult.appendChild(startDateResult);
    newDateDivResult.appendChild(endDateResult);

    let newDescriptionDivResult=document.createElement('div');
    newDescriptionDivResult.classList.add('description-div-result');
    let descriptionExperienceResult=document.createElement('p');
    descriptionExperienceResult.classList.add('description-experience-result');
    descriptionExperienceResult.id = "description-experience-result-"+number;
    newDescriptionDivResult.appendChild(descriptionExperienceResult);

    let newLine=document.createElement('div');
    newLine.classList.add('line-result');

    newExperienceDivResult.appendChild(newprofessionDivResult);
    newExperienceDivResult.appendChild(newDateDivResult);
    newExperienceDivResult.appendChild(newDescriptionDivResult);
    newExperienceDivResult.appendChild(newLine);
    document.querySelector('.experience-part-result').appendChild(newExperienceDivResult);
    return newExperienceDivResult;
}

refreshExperienceResults();
