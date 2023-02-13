const backBtn=document.querySelector('.back-btn');
const nextBtn=document.querySelector('.next-btn');
const addNewFormButton=document.querySelector('.adding-form-button');
const universityInputField=document.getElementById('university');
const degreeInputField=document.getElementById('degree');
const endDateForDegreeInputField=document.getElementById('enddate-fordegree');
const descriptionInputField=document.getElementById('description');
let number=1;

backBtn.addEventListener ('click', function(){
  location.href="experience.html";
})
nextBtn.addEventListener ('click', function(){
  location.href="result.html";
})

universityInputField.addEventListener('keyup', function () {
  let universityIsValid=testingMin2Symbols(this.value);
  displayValidation(universityIsValid, this);
  updateResultField("university", this.value, 0);
})
descriptionInputField.addEventListener('keyup', function () {
  let descriptionIsValid=testingDescription(this.value);
  displayValidation(descriptionIsValid, this);
  updateResultField('description-education', this.value, 0);
})
endDateForDegreeInputField.addEventListener('change', function () {
  updateResultField("enddate-fordegree", this.value, 0);
})
degreeInputField.addEventListener('change', function () {
  // let selectedOption=this.value;
  // console.log(selectedOption);
  updateResultField("degree", this.value, 0);
})

addNewFormButton.addEventListener('click', function () {
  addingNewEducationDiv(number);
  addingNewEducationDivResult(number);
  number++;
});

function addingNewEducationDiv (number) {
    const newEducationDiv = document.createElement('div');
    newEducationDiv.classList.add('for-new-div');
    
    const newDivForUniversity=addingNewStandartDiv("university-", 'სასწავლებელი', 'სასწავლებელი');
    
    const newDegreeDateDiv=document.createElement('div');
    newDegreeDateDiv.classList.add('degree-enddate-div');
    
    const newDivForDegree = document.createElement('div');
    newDivForDegree.classList.add("standart-form-div");
    const newLabel=document.createElement('label');
    const newDivForSelectField=document.createElement('div');
    const newSelectField=document.createElement('select');
    newLabel.innerHTML="ხარისხი";
    newLabel.htmlFor="degree"+number;
    newSelectField.id="degree-"+number;
    newSelectField.name="degree-"+number;
    newSelectField.type="select";
    newDivForSelectField.appendChild(newSelectField);
    newDivForDegree.appendChild(newLabel);
    newDivForDegree.appendChild(newDivForSelectField);

    for (let option of degreeInputField.options) {
      let optionField=document.createElement('option');
      optionField.value=option.value;
      optionField.innerHTML=option.innerHTML;
      newSelectField.appendChild(optionField);
    }

    const newDateDiv=addingNewDateDiv("enddate-fordegree-", 'დამთავრების რიცხვი');
    newDegreeDateDiv.appendChild(newDivForDegree);
    newDegreeDateDiv.appendChild(newDateDiv);
    
    const newDescriptionDiv=addingNewDescriptionDiv('აღწერა', 'როლი თანამდებობაზე და ზოგადი აღწერა');
    const newLineDiv=document.createElement('div');
    newLineDiv.classList.add('line');

    newEducationDiv.appendChild(newDivForUniversity.parentDiv);
    newEducationDiv.appendChild(newDegreeDateDiv);
    newEducationDiv.appendChild(newDescriptionDiv.parentDiv);
    newEducationDiv.appendChild(newLineDiv);
    addNewFormButton.parentNode.insertBefore(newEducationDiv, addNewFormButton);

  newDivForUniversity.inputElement.addEventListener('keyup', function () {
      let inputIsValid=testingMin2Symbols(this.value);
      displayValidation(inputIsValid, this);
      updateResultField("university", this.value, number);
  })
  newDescriptionDiv.inputElement.addEventListener('keyup', function () {
        let inputIsValid=testingDescription(this.value);
        displayValidation(inputIsValid, this);
        updateResultField("description-education", this.value, number);
  })
  document.getElementById('enddate-fordegree-'+number).addEventListener('change', function () {
      updateResultField("enddate-fordegree", this.value, number);
  })
    document.getElementById('degree-'+number).addEventListener('change', function () {
      updateResultField("degree", this.value, number);
    })

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

function loadDropdownOptions() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://resume.redberryinternship.ge/api/degrees");
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const degrees = xhr.response;
      //console.log(degrees);
      for (let degree of degrees) {
        creatingSelectOptions(degree);
      }
    } 
    else {
      console.log(`Error: ${xhr.status}`);
    }
  };
}

function creatingSelectOptions (degree) {
    const opt=document.createElement('option');
    opt.innerHTML = degree.title;
    degreeInputField.appendChild(opt);
}

loadDropdownOptions();

function refreshEducationResults() {
  let numberOfEducationResults = sessionStorage.getItem("numberOfEducationResults");
  if(numberOfEducationResults == null) {
      numberOfEducationResults = 0;
  }

  if(numberOfEducationResults >= 0) {
      for(i = 0; i <= numberOfEducationResults; i++) {
          let number = i;
          refreshResultField("university", number);
          refreshResultField("degree", number);
          refreshResultField("enddate-fordegree", number);
          refreshResultField("description-education", number);
      }
  }
}

function refreshResultField (fieldId, number) {
  let targetParagraphId = fieldId+'-result-'+number;
  let valueFromSessionStorage = sessionStorage.getItem(targetParagraphId);
  if (valueFromSessionStorage != null && valueFromSessionStorage != undefined) {
      let targetResultParentDiv = document.getElementById("education-div-result-"+number);
      if (targetResultParentDiv == null) {
          addingNewEducationDivResult(number);
      }
      let targetParagraph = document.getElementById(targetParagraphId);
      targetParagraph.innerHTML=valueFromSessionStorage;
  }
}

refreshEducationResults();
