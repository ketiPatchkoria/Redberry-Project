const arrowIcon=document.querySelector(".left-arrow-icon");

const firstNameResult=document.querySelector('.firstname-result');
const lastNameResult=document.querySelector('.lastname-result');
const emailResult=document.querySelector('.email-result');
const phoneNumberResult=document.querySelector('.phonenumber-result');
const aboutMeResult=document.querySelector('.aboutme-result');
const professionResult=document.querySelector('.profession-result');
const employerResult=document.querySelector('.employer-result');
const startDateResult=document.querySelector('.startdate-result');
const endDateResult=document.querySelector('.enddate-result');
const descriptionExperienceResult=document.querySelector('.description-experience-result');
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
    //inputFieldWhereToDisplay.value=inputValue;
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
    return newStandartDiv;
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

function addingNewDescriptionDiv (nameForField, textForLabel,textForPlaceholder){
    let newDescriptionDiv=document.createElement('div');
    let newLabel=document.createElement('label');
    let newDivForInput=document.createElement('div');
    let newInputField=document.createElement('input');
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
    return newDescriptionDiv;
}



