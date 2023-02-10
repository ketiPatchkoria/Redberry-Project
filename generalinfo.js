const arrowIcon=document.querySelector(".left-arrow-icon");
const nextBtn=document.querySelector('.next-btn');
const emailInputField=document.getElementById('email');
const firstNameInputField=document.getElementById('firstname');
const lastNameInputField=document.getElementById('lastname');
const phoneNumberInputField=document.getElementById('phonenumber');
const errorIcon=document.querySelector('.error-icon');

arrowIcon.addEventListener ("click", function (){
    location.href="index.html";
})


nextBtn.addEventListener ('click', function(){
    location.href="experience.html";
})
firstNameInputField.addEventListener('keyup', function () {
    let nameIsValid = testingName(this.value);
    displayValidation(nameIsValid, this);
})
lastNameInputField.addEventListener('keyup', function () {
    let nameIsValid = testingName(this.value);
    displayValidation(nameIsValid, this);
})
emailInputField.addEventListener('keyup', function () {
    let emailIsValid= testingEmail(this.value);
    displayValidation(emailIsValid, this);
    console.log('keyup');
})
// emailInputField.addEventListener('mousedown', function () {
//     let emailIsValid= testingEmail(this.value);
//     coloringBorder(emailIsValid, this);
//     console.log('mousedown');
// })
phoneNumberInputField.addEventListener('keyup', function () {
    UpdatePhoneNumberField(this);
})

// phoneNumberInputField.addEventListener('blur', function () {
//     console.log("blur");
//     UpdatePhoneNumberField(this);
// })


function UpdatePhoneNumberField(phoneNumberInput) {
    let phoneNumberIsValid=testingPhoneNumber(phoneNumberInput.value);
    displayValidation(phoneNumberIsValid, phoneNumberInput);
    if(phoneNumberIsValid) {
        addSpacesToPhoneNumber(phoneNumberInput);
    }
}

function addSpacesToPhoneNumber(input) {
    let inputValue = input.value;
    let inpuValueWithoutSpaces = inputValue.replaceAll(' ','');
    let formattedPhoneNumber = inpuValueWithoutSpaces
    .replace(/(\+\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
    console.log(formattedPhoneNumber);
    input.value = formattedPhoneNumber;
}

function testingName (name) {
    let pattern=/^[ა-ჰ]{2,}$/;
    let result = pattern.test(name);
    console.log(result);
    return result;
}

function testingEmail (email) {
    let pattern = /^[\w.+\-]+@redberry\.ge$/;
    let result =pattern.test(email);
    console.log(result);
    return result;
}

function testingPhoneNumber(phoneNumber) {
    let pattern = /^\+9955[0-9]{8}$/;
    let phoneNumberWithoutSpaces = phoneNumber.replaceAll(' ','');
    let result = pattern.test(phoneNumberWithoutSpaces);
    console.log(result);
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

