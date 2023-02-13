const arrowIcon=document.querySelector(".left-arrow-icon");

const firstNameResult=document.querySelector('.firstname-result');
const lastNameResult=document.querySelector('.lastname-result');
const emailResult=document.querySelector('.email-result');
const phoneNumberResult=document.querySelector('.phonenumber-result');
const aboutMeResult=document.querySelector('.aboutme-result');
const universityResult=document.querySelector('.university-result');
const degreeResult=document.querySelector('.degree-result');
const endDateForDegreeResult=document.querySelector('.enddate-fordegree-result');
const descriptionEducationResult=document.querySelector('.description-education-result');

arrowIcon.addEventListener ("click", function (){
    location.href="index.html";
    sessionStorage.clear();
})

function testingDescription (inputField) {
    let pattern = /^.{1,}$/;
    let result = pattern.test(inputField);
    return result;
}

function testingMin2Symbols (inputField) {
    let pattern = /^.{2,}$/;
    let result = pattern.test(inputField);
    return result;
}

function displayValidation (result, inputField) {
    if (result) {
        inputField.style.borderColor="#98E37E";
        inputField.labels[0].style.color="#000000";
        inputField.classList.add("icon");
        if (inputField.parentNode.childElementCount==2){
            inputField.parentNode.lastElementChild.remove();
        }  
    }
    else {
        inputField.style.borderColor="#EF5050";
        inputField.labels[0].style.color="#E52F2F";
        inputField.classList.remove("icon");
        if (inputField.parentNode.childElementCount==1){
            addingErrorIcon(inputField);
        }
    }
}

function addingErrorIcon (inputField) {
    const errorIcon=document.createElement('img');
    errorIcon.src='images/error.png';
    errorIcon.classList.add('error-icon');
    inputField.parentNode.insertBefore(errorIcon, inputField.nextSibling);
}


function updateResultField (fieldId, inputValue, number) {
    let targetParagraphId = fieldId+'-result-'+number;
    let targetParagraph = document.getElementById(targetParagraphId);
    sessionStorage.setItem(targetParagraphId, inputValue);
    targetParagraph.innerHTML=inputValue;
}

function addingNewStandartDiv (nameForField, textForLabel,textForPlaceholder, number) {
    let newStandartDiv=document.createElement('div');
    let newLabel=document.createElement('label');
    let newDivForInput=document.createElement('div');
    let newInputField=document.createElement('input');
    let newP=document.createElement('p');
    newStandartDiv.classList.add('standart-form-div');
    newLabel.innerHTML=textForLabel;
    newLabel.htmlFor=nameForField+number;
    newInputField.id=nameForField+number;
    newInputField.name=nameForField+number;
    newInputField.type="text";
    newInputField.placeholder=textForPlaceholder;
    newP.innerText="მინიმუმ 2 სიმბოლო";
    newDivForInput.appendChild(newInputField);
    newStandartDiv.appendChild(newLabel);
    newStandartDiv.appendChild(newDivForInput);
    newStandartDiv.appendChild(newP);
    return {
        parentDiv: newStandartDiv,
        inputElement: newInputField
    }
}

function addingNewDateDiv (nameForField, textForLabel, number) {
    let newDateDiv=document.createElement('div');
    let newLabel=document.createElement('label');
    let newDivForInput=document.createElement('div');
    let newInputField=document.createElement('input');
    newDateDiv.classList.add('standart-form-div');
    newLabel.innerHTML=textForLabel;
    newLabel.htmlFor=nameForField+number;
    newInputField.id=nameForField+number;
    newInputField.name=nameForField+number;
    newInputField.type="date";
    newDivForInput.appendChild(newInputField);
    newDateDiv.appendChild(newLabel);
    newDateDiv.appendChild(newDivForInput);
    return newDateDiv;
}

function addingNewDescriptionDiv (textForLabel,textForPlaceholder, number){
    let newDescriptionDiv=document.createElement('div');
    let newLabel=document.createElement('label');
    let newDivForInput=document.createElement('div');
    let newInputField=document.createElement('input');
    let nameForField= "description-";
    newDescriptionDiv.classList.add('standart-form-div');
    newDescriptionDiv.classList.add('description-div');
    newLabel.innerHTML=textForLabel;
    newLabel.htmlFor=nameForField+number;
    newInputField.id=nameForField+number;
    newInputField.name=nameForField+number;
    newInputField.type="text";
    newInputField.placeholder=textForPlaceholder;
    
    newDivForInput.appendChild(newInputField);
    newDescriptionDiv.appendChild(newLabel);
    newDescriptionDiv.appendChild(newDivForInput);

    return {
        parentDiv: newDescriptionDiv,
        inputElement: newInputField
    }
}

function refreshGeneralInfoResults () {
    firstNameResult.innerHTML=sessionStorage.getItem('firstname-result-0');
    lastNameResult.innerHTML=sessionStorage.getItem('lastname-result-0');
    aboutMeResult.innerHTML=sessionStorage.getItem('aboutme-result-0');
    emailResult.innerHTML=sessionStorage.getItem('email-result-0');
    phoneNumberResult.innerHTML=sessionStorage.getItem('phonenumber-result-0');
}

function refreshExperienceResults() {
    let numberOfExperienceResults = sessionStorage.getItem("numberOfExperienceResults");
    if(numberOfExperienceResults == null) {
        numberOfExperienceResults = 0;
    }

    if(numberOfExperienceResults >= 0) {
        for(i = 0; i <= numberOfExperienceResults; i++) {
            let number = i;
            refreshExperienceResultField("profession", number);
            refreshExperienceResultField("employer", number);
            refreshExperienceResultField("startdate", number);
            refreshExperienceResultField("enddate", number);
            refreshExperienceResultField("description-experience", number);
        }
    }
}

function refreshEducationResults() {
    let numberOfEducationResults = sessionStorage.getItem("numberOfEducationResults");
    if(numberOfEducationResults == null) {
        numberOfEducationResults = 0;
    }
  
    if(numberOfEducationResults >= 0) {
        for(i = 0; i <= numberOfEducationResults; i++) {
            let number = i;
            refreshEducationResultField("university", number);
            refreshEducationResultField("degree", number);
            refreshEducationResultField("enddate-fordegree", number);
            refreshEducationResultField("description-education", number);
        }
    }
  }

  function refreshExperienceResultField (fieldId, number) {
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

  function refreshEducationResultField (fieldId, number) {
    let targetParagraphId = fieldId+'-result-'+number;
    let valueFromSessionStorage = sessionStorage.getItem(targetParagraphId);
    if (valueFromSessionStorage != null) {
        let targetResultParentDiv = document.getElementById("education-div-result-"+number);
        if (targetResultParentDiv == null) {
            addingNewEducationDivResult(number);
        }
        let targetParagraph = document.getElementById(targetParagraphId);
        targetParagraph.innerHTML=valueFromSessionStorage;
    }
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

function addingNewEducationDivResult(number) {
    let newEducationDivResult=document.createElement('div');
    newEducationDivResult.classList.add('education-div-result');
    newEducationDivResult.id = "education-div-result-"+number;
    
    let newUniversityAndDegreeDivResult=document.createElement('div');
    newUniversityAndDegreeDivResult.classList.add('profession-university-div-result');
    let universityResult=document.createElement('p');
    universityResult.classList.add('university-result');
    universityResult.id = "university-result-"+number;

    let degreeResult=document.createElement('p');
    degreeResult.classList.add('degree-result');
    degreeResult.id = "degree-result-"+number;
    newUniversityAndDegreeDivResult.appendChild(universityResult);
    newUniversityAndDegreeDivResult.appendChild(degreeResult);

    let newDateDivResult=document.createElement('div');
    let endDateForDegreeResult=document.createElement('p');
    endDateForDegreeResult.classList.add('enddate-fordegree-result');
    endDateForDegreeResult.id = "enddate-fordegree-result-"+number;
    newDateDivResult.appendChild(endDateForDegreeResult);

    let newDescriptionDivResult=document.createElement('div');
    newDescriptionDivResult.classList.add('description-div-result');
    let descriptionEducationResult=document.createElement('p');
    descriptionEducationResult.classList.add('description-education-result');
    descriptionEducationResult.id = "description-education-result-"+number;
    newDescriptionDivResult.appendChild(descriptionEducationResult);

    let newLine=document.createElement('div');
    newLine.classList.add('line-result');

    newEducationDivResult.appendChild(newUniversityAndDegreeDivResult);
    newEducationDivResult.appendChild(newDateDivResult);
    newEducationDivResult.appendChild(newDescriptionDivResult);
    newEducationDivResult.appendChild(newLine);
    document.querySelector('.education-part-result').appendChild(newEducationDivResult);
    return newEducationDivResult;
}


