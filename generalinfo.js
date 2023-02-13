const nextBtn=document.querySelector('.next-btn');
const firstNameInputField=document.getElementById('firstname');
const lastNameInputField=document.getElementById('lastname');
const emailInputField=document.getElementById('email');
const phoneNumberInputField=document.getElementById('phonenumber');
const aboutMeInputField=document.getElementById('aboutme');

nextBtn.addEventListener ('click', function(){
    location.href="experience.html";
})
firstNameInputField.addEventListener('keyup', function () {
    let inputIsValid = testingName(this.value);
    displayValidation(inputIsValid, this);
    updateResultField("firstname", this.value, 0);
})

lastNameInputField.addEventListener('keyup', function () {
    let inputIsValid = testingName(this.value);
    displayValidation(inputIsValid, this);
    updateResultField("lastname", this.value, 0);
})
aboutMeInputField.addEventListener('keyup', function () {
    updateResultField("aboutme", this.value, 0);
})
emailInputField.addEventListener('keyup', function () {
    let inputIsValid= testingEmail(this.value);
    displayValidation(inputIsValid, this);
    updateResultField("email", this.value, 0);
})

phoneNumberInputField.addEventListener('keyup', function () {
    UpdatePhoneNumberField(this);
    updateResultField("phonenumber", this.value, 0);
})

function UpdatePhoneNumberField(phoneNumberInput) {
    let inputIsValid=testingPhoneNumber(phoneNumberInput.value);
    displayValidation(inputIsValid, phoneNumberInput);
    if(inputIsValid) {
        addSpacesToPhoneNumber(phoneNumberInput);
    }
}

function addSpacesToPhoneNumber(input) {
    let inputValue = input.value;
    let inpuValueWithoutSpaces = inputValue.replaceAll(' ','');
    let formattedPhoneNumber = inpuValueWithoutSpaces
    .replace(/(\+\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
    input.value = formattedPhoneNumber;
}

function testingName (name) {
    let pattern=/^[ა-ჰ]{2,}$/;
    let result = pattern.test(name);
    return result;
}

function testingEmail (email) {
    let pattern = /^[\w.+\-]+@redberry\.ge$/;
    let result =pattern.test(email);
    return result;
}

function testingPhoneNumber(phoneNumber) {
    let pattern = /^\+9955[0-9]{8}$/;
    let phoneNumberWithoutSpaces = phoneNumber.replaceAll(' ','');
    let result = pattern.test(phoneNumberWithoutSpaces);
    console.log(result);
    return result;
}





