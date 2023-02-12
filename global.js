const arrowIcon=document.querySelector(".left-arrow-icon");

const firstNameResult=document.querySelector('.firstname-result');
const lastNameResult=document.querySelector('.lastname-result');
const emailResult=document.querySelector('.email-result');
const phoneNumberResult=document.querySelector('.phonenumber-result');
const aboutMeResult=document.querySelector('.aboutme-result');
const endDateResult=document.querySelector('.enddate-result');
const universityResult=document.querySelector('.university-result');
const degreeResult=document.querySelector('.degree-result');
const endDateForDegreeResult=document.querySelector('.enddate-fordegree-result');
const descriptionEducationResult=document.querySelector('.description-education-result');


arrowIcon.addEventListener ("click", function (){
    location.href="index.html";
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

function gettingInput (inputFieldWhereToGet, inputFieldWhereToDisplay) {
    sessionStorage.setItem(inputFieldWhereToGet, inputFieldWhereToGet.value);
    let inputValue= sessionStorage.getItem(inputFieldWhereToGet);
    inputFieldWhereToDisplay.innerHTML=inputValue;
}

function addingNewStandartDiv (nameForField, textForLabel,textForPlaceholder) {
    let newStandartDiv=document.createElement('div');
    let newLabel=document.createElement('label');
    let newDivForInput=document.createElement('div');
    let newInputField=document.createElement('input');
    let newP=document.createElement('p');
    newStandartDiv.classList.add('standart-form-div');
    newLabel.innerHTML=textForLabel;
    newLabel.htmlFor=nameForField+count;
    newInputField.id=nameForField+count;
    newInputField.name=nameForField+count;
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

function addingNewDateDiv (nameForField, textForLabel) {
    let newDateDiv=document.createElement('div');
    let newLabel=document.createElement('label');
    let newDivForInput=document.createElement('div');
    let newInputField=document.createElement('input');
    newDateDiv.classList.add('standart-form-div');
    newLabel.innerHTML=textForLabel;
    newLabel.htmlFor=nameForField+count;
    newInputField.id=nameForField+count;
    newInputField.name=nameForField+count;
    newInputField.type="date";
    newDivForInput.appendChild(newInputField);
    newDateDiv.appendChild(newLabel);
    newDateDiv.appendChild(newDivForInput);
    return newDateDiv;
}

function addingNewExperienceDivResult(number) {
    let newExperienceDivResult=document.createElement('div');
    newExperienceDivResult.classList.add('experience-div-result');
    newExperienceDivResult.id = "result"
    
    let newprofessionDivResult=document.createElement('div');
    newprofessionDivResult.classList.add('profession-university-div');
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

function addingNewDescriptionDiv (textForLabel,textForPlaceholder){
    let newDescriptionDiv=document.createElement('div');
    let newLabel=document.createElement('label');
    let newDivForInput=document.createElement('div');
    let newInputField=document.createElement('input');
    let nameForField= "description-";
    newDescriptionDiv.classList.add('standart-form-div');
    newDescriptionDiv.classList.add('description-div');
    newLabel.innerHTML=textForLabel;
    newLabel.htmlFor=nameForField+count;
    newInputField.id=nameForField+count;
    newInputField.name=nameForField+count;
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



