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
    if(document.getElementById("form-experience").reportValidity()) {
        location.href="education.html";
    }
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
    addingNewExperienceDiv(count);
    addingNewExperienceDivResult(count);
    sessionStorage.setItem("numberOfExperienceResults", count);
    count++;
});

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

refreshGeneralInfoResults();
refreshExperienceResults();

