const arrowIcon=document.querySelector(".left-arrow-icon");

arrowIcon.addEventListener ("click", function (){
    location.href="index.html";
})

function createAndSendResume() {
    let resumeBody = createResumeFromSessionStorage();
    sendResume(resumeBody);
  }

  function getValueForFieldFromSessionStorage (fieldId, number) {
    let targetParagraphId = fieldId+'-result-'+number;
    let valueFromSessionStorage = sessionStorage.getItem(targetParagraphId);
    return valueFromSessionStorage;
  }
  
  function createResumeFromSessionStorage() {
  
    let name =sessionStorage.getItem('firstname-result-0');
    let surname =sessionStorage.getItem('lastname-result-0');
    let email =sessionStorage.getItem('email-result-0');
    let about_me =sessionStorage.getItem('aboutme-result-0');
    let phone_number=sessionStorage.getItem('phonenumber-result-0');
  
    let experiencesArray = new Array;
  
    let numberOfExperienceResults = sessionStorage.getItem("numberOfExperienceResults");
    if(numberOfExperienceResults == null) {
        numberOfExperienceResults = 0;
    }
  
    if(numberOfExperienceResults >= 0) {
        for(i = 0; i <= numberOfExperienceResults; i++) {
            let number = i;
            let experience = {};
            experience.position = getValueForFieldFromSessionStorage("profession", number);
            experience.employer = getValueForFieldFromSessionStorage("employer", number);
            experience.start_date = getValueForFieldFromSessionStorage("startdate", number);
            experience.due_date = getValueForFieldFromSessionStorage("enddate", number);
            experience.description = getValueForFieldFromSessionStorage("description-experience", number);
            experiencesArray.push(experience);
        }
    }
  
    let educationsArray = new Array;
  
    let numberOfEducationResults = sessionStorage.getItem("numberOfEducationResults");
    if(numberOfEducationResults == null) {
        numberOfEducationResults = 0;
    }
  
    if(numberOfEducationResults >= 0) {
        for(i = 0; i <= numberOfEducationResults; i++) {
            let number = i;
            let education = {};
             education.institute = getValueForFieldFromSessionStorage("university", number);
             education.degree = getValueForFieldFromSessionStorage("degree", number);
             education.degree_id = getValueForFieldFromSessionStorage("degree_id", number);
             education.due_date = getValueForFieldFromSessionStorage("enddate-fordegree", number);
             education.description = getValueForFieldFromSessionStorage("description-education", number);
             educationsArray.push(education);
        } 
    }

    let image = sessionStorage.getItem('photo');
  
    let resumeBody = {
      name: name,
      surname: surname,
      email: email,
      phone_number: phone_number,
      experiences: experiencesArray,
      educations: educationsArray,
      image: image,
      about_me: about_me
    }
  
    return resumeBody;
  }
  
  function sendResume(body) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://resume.redberryinternship.ge/api/cvs");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr);
      } else {
        console.log(`Error: ${xhr.status}`);
      }
    };

    let bodyString = JSON.stringify(body);
    console.log(bodyString);

    xhr.send(bodyString);
  }

  createAndSendResume();
