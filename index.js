'use strict';

// prevent default submit
  document.getElementById('formAgeCalc').addEventListener('submit', function(event){
    event.preventDefault();
  });

document.getElementById('btnCalcAge').addEventListener('click', function(){
  let age = calculateAge();
  updateAgeInsideDOM(age);
  updateGender(age);
});

// Images/default.png

function updateGender(age){
  let allGenders = document.getElementsByName('gender');
  let imgLifeStages = document.getElementById('lifeStages');
  let womensImgDir = "Images/women/";
  let mensImgDir = "Images/men/";
  let fileExtension = '.png'
  let genderImgDir = null;

  for(let gender of allGenders){
    if(gender.checked){
      if(gender.value.toLowerCase() === 'other'){
        imgLifeStages.src = "Images/default.png";
      }else if(gender.value.toLowerCase() === "female"){
        if(age >=0 && age <=2){
          imgLifeStages.src = womensImgDir + 'stage-1' +fileExtension;
        }else if(age >=2 && age <= 5){
          imgLifeStages.src = womensImgDir + 'stage-2' +fileExtension;
        }else if(age >=5 && age <= 10){
          imgLifeStages.src = womensImgDir + 'stage-3' +fileExtension;
        }else if(age >=10 && age <= 18){
          imgLifeStages.src = womensImgDir + 'stage-4' +fileExtension;
        }else if(age >=18 && age <= 25){
          imgLifeStages.src = womensImgDir + 'stage-5' +fileExtension;
        }else if(age >=25 && age <= 35){
          imgLifeStages.src = womensImgDir + 'stage-6' +fileExtension;
        }else if(age >=35 && age <= 45){
          imgLifeStages.src = womensImgDir + 'stage-7' +fileExtension;
        }else if(age >=45 && age <= 75){
          imgLifeStages.src = womensImgDir + 'stage-8' +fileExtension;
        }else if(age >=75){
          imgLifeStages.src = womensImgDir + 'stage-9' +fileExtension;
        }
      }else if(gender.value.toLowerCase() === "male"){
        if(age >=0 && age <=2){
          imgLifeStages.src = mensImgDir + 'stage-1' +fileExtension;
        }else if(age >=2 && age <= 5){
          imgLifeStages.src = mensImgDir + 'stage-2' +fileExtension;
        }else if(age >=5 && age <= 10){
          imgLifeStages.src = mensImgDir + 'stage-3' +fileExtension;
        }else if(age >=10 && age <= 18){
          imgLifeStages.src = mensImgDir + 'stage-4' +fileExtension;
        }else if(age >=18 && age <= 25){
          imgLifeStages.src = mensImgDir + 'stage-5' +fileExtension;
        }else if(age >=25 && age <= 45){
          imgLifeStages.src = mensImgDir + 'stage-6' +fileExtension;
        }else if(age >=45 && age <= 65){
          imgLifeStages.src = mensImgDir + 'stage-7' +fileExtension;
        }else if(age >=65){
          imgLifeStages.src = mensImgDir + 'stage-8' +fileExtension;
        }
      }
      return ;
    }
  }
}
function calculateAge(){  
  let elementDateOfBirth = document.getElementById('dateOfBirth');
  if(elementDateOfBirth.value.length <=0){
    alert('Kindly select yours age first from the calender!');
    return;
  }
  
  let dateOfBirth = new Date(elementDateOfBirth.value);
  // console.log(dateOfBirth.getFullYear());
  let today = new Date();  
  let age = today.getFullYear() - dateOfBirth.getFullYear();
  let monthDiff = today.getMonth() - dateOfBirth.getMonth();
  // console.log(today.getMonth() , dateOfBirth.getMonth(), monthDiff);
  // console.log(today.getDate() , dateOfBirth.getDate());
  // console.log(age);
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
    age--;
  }
  // Safeguard 
    if(age <0){
      return '#';
      alert('Invalid date, the date you selected is of future!')
      return;
    }
  // Return
    return age;
}

function updateAgeInsideDOM(age){
    // update age inside DOM
    document.getElementById('age').innerText = age;
}

