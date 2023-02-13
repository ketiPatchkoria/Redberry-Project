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

function addingNewStandartDiv (nameForField, textForLabel,textForPlaceholder) {
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

function addingNewDateDiv (nameForField, textForLabel) {
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

function addingNewDescriptionDiv (textForLabel,textForPlaceholder){
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



