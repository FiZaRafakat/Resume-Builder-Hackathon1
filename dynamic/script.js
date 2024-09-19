// Add skills field
function addSkills() {
  const container = document.getElementById('skills-container');
  
  const newSkill = `
    <div class="box skills">
      <div class="col3">
        <div class="form-elem">
          <label class="form-label">Skills</label>
          <input type="text" name="skills" class="input skills" placeholder="Frontend Developer" onkeyup="GenerateCV()">
        </div>
      </div>
      <button type="button" class="remove-btn" onclick="removeSkills(this)">-</button>
    </div>`;
    
  container.insertAdjacentHTML('beforeend', newSkill);
}

// Remove skills field
function removeSkills(button) {
  const skillBox = button.parentElement;
  skillBox.remove();
  GenerateCV(); // Re-generate the CV when a skill entry is removed
}

// Add education field
function addEducation() {
    const container = document.getElementById('education-container');
  
    const newEducation = `
      <div class="box education">
        <div class="col3">
          <div class="form-elem">
            <label class="form-label">Degree</label>
            <input type="text" name="edu-degree" class="input edu-degree" placeholder="CA" onkeyup="GenerateCV()">
          </div>
          <div class="form-elem">
            <label class="form-label">School</label>
            <input type="text" name="edu-school" class="input edu-school" placeholder="XYZ School" onkeyup="GenerateCV()">
          </div>
          <div class="form-elem">
            <label class="form-label">Date</label>
            <input type="text" name="edu-date" class="input edu-date" placeholder="2022-2020" onkeyup="GenerateCV()">
          </div>
        </div>
        <div class="col2">
          <div class="form-elem">
            <label class="form-label">Description</label>
            <input type="text" name="edu-description" class="input edu-description" onkeyup="GenerateCV()">
          </div>
        </div>
        <button type="button" class="remove-education remove-btn" onclick="removeEducation(this)">-</button>
      </div>`;
  
    container.insertAdjacentHTML('beforeend', newEducation);
  }
  
  // Remove education field
  function removeEducation(button) {
    const educationBox = button.parentElement;
    educationBox.remove();
    GenerateCV(); // Re-generate the CV when an education entry is removed
  }

  
  // Add experience field
function addExperience() {
    const container = document.getElementById('experience-container');
    
    const newExperience = `
      <div class="box experience">
        <div class="col3">
          <div class="form-elem">
            <label class="form-label">Role</label>
            <input type="text" name="exp-role" class="input exp-role" placeholder="CA" onkeyup="GenerateCV()">
          </div>
          <div class="form-elem">
            <label class="form-label">Organization</label>
            <input type="text" name="exp-organization" class="input exp-organization" placeholder="XYZ Company" onkeyup="GenerateCV()">
          </div>
          <div class="form-elem">
            <label class="form-label">Date</label>
            <input type="text" name="exp-date" class="input exp-date" placeholder="2022-2020" onkeyup="GenerateCV()">
          </div>
        </div>
        <div class="col2">
          <div class="form-elem">
            <label class="form-label">Description</label>
            <input type="text" name="exp-description" class="input exp-description" onkeyup="GenerateCV()">
          </div>
        </div>
        <button type="button" class="remove-experience remove-btn" onclick="removeExperience(this)">-</button>
      </div>`;
  
    container.insertAdjacentHTML('beforeend', newExperience);
  }
  
  // Remove experience field
  function removeExperience(button) {
    const experienceBox = button.parentElement;
    experienceBox.remove();
    GenerateCV(); // Re-generate the CV when an experience entry is removed
  }
  

const mainFrom = document.getElementById("cv-form")

///// Input Elements Access

let firstName = mainFrom.firstname ;
    lastName = mainFrom.lastname ;
    designation = mainFrom.designation ;
    about = mainFrom.about ;
    img = mainFrom.image ;
    phone = mainFrom.phoneno ;
    email = mainFrom.email ;
    linkeidn = mainFrom.linkeidn ;
    github = mainFrom.github ;
    console.log(firstName);
    

//// Display Elements 

let nameDsp = document.getElementById("fullname_dsp") ;
    designationDsp = document.getElementById("designation_dsp")
    aboutDsp = document.getElementById("about_dsp");
    imgDsp = document.getElementById("image_dsp");
    phoneDsp = document.getElementById("phoneno_dsp");
    emailDsp = document.getElementById("email_dsp");
    linkeidnDsp = document.getElementById("linkedin_dsp");
    githubDsp = document.getElementById("github_dsp");
    skillsDsp = document.getElementById("skills_dsp");
    educationDsp = document.getElementById("edu_dsp");
    expereinceDsp = document.getElementById("exp_dsp");



    const fetchValues =(attrs , ...nodeLists)=>{

        let elemsAttrsCount = nodeLists.length;
        let elemsDataCount = nodeLists[0].length ;
        let temDataArr = []
    
        for(let i = 0 ; i <elemsDataCount ; i++){
            let dataObj = {};
            for(let j=0 ; j<elemsAttrsCount; j++){
    
                dataObj[`${attrs[j]}`] = nodeLists[j][i].value
            }
            temDataArr.push(dataObj)
        }
        return temDataArr
    }

    const getUsersInputs = ()=>{

        let eduDegree = document.querySelectorAll(".edu-degree") ;
        let eduSchool = document.querySelectorAll(".edu-school") ;
        let eduDate = document.querySelectorAll(".edu-date") ;
        let eduDescription = document.querySelectorAll(".edu-description");

        let expRole = document.querySelectorAll(".exp-role");
        let expOrganization = document.querySelectorAll(".exp-organization")
        let expDate = document.querySelectorAll(".exp-date");
        let expDescription = document.querySelectorAll(".exp-description");

        let skills = document.querySelectorAll(".skills")

        return{
            firstName : firstName.value ,
            lastName : lastName.value ,
            designation : designation.value ,
            about : about.value ,
            phone : phone.value ,
            email : email.value ,
            linkeidn : linkeidn.value ,
            github : github.value ,
            education : fetchValues(['edu-degree','edu-school','edu-date','edu-description'] ,eduDegree ,eduSchool, eduDate,eduDescription),
            experience :fetchValues(['exp-role','exp-organization','exp-date','exp-description'],expRole,expOrganization,expDate,expDescription),
            skills : fetchValues(['skills'],skills)
        }

        }

        const showListData =(listData , listContainer)=>{
            listContainer.innerHTML = "" ;
            listData.forEach(listItem => {
                let itemElem = document.createElement('div');
                itemElem.classList.add('item-value');
        
                for(const key in listItem){
                    if (listItem[key]) { // Check if value is not undefined or empty
                        let subItemElem = document.createElement('span');
                        subItemElem.classList.add('item-value');
                        subItemElem.innerHTML = `${listItem[key]}`;
                        itemElem.appendChild(subItemElem);
                      }
                }
                listContainer.appendChild(itemElem)
            })
        }

        const displayCV = (userData)=>{
            nameDsp.innerHTML = userData.firstName + " " + userData.lastName;
            designationDsp.innerHTML = userData.designation ;
            aboutDsp.innerHTML = userData.about ;
            phoneDsp.innerHTML = userData.phone ;
            emailDsp.innerHTML = userData.email ;
            linkeidnDsp.innerHTML = userData.linkeidn ;
            githubDsp.innerHTML = userData.github ;

            showListData(userData.education,educationDsp);
            showListData(userData.experience,expereinceDsp);
            showListData(userData.skills,skillsDsp)
        }

        const GenerateCV = ()=>{
            let userData =  getUsersInputs() ;
            console.log("Generating CV with: ", userData); 
            displayCV(userData)
            console.log(userData);
            
        }

        function previewImage(){
            let oFReader = new FileReader();
            oFReader.readAsDataURL(img.files[0]);
            oFReader.onload = function(ofEvent){
                imgDsp.src = ofEvent.target.result;
            }
        }

// Color Picker Function

const colorPicker = document.getElementById('colorPicker')
const bottomLeftSec = document.querySelector(".bottom-left-sec")
const btn = document.querySelector(".switch-btn")
const topColorPicker = document.getElementById('topColorPicker')
const topSection = document.querySelector(".top")
const color = document.querySelector(".color-switcher")

btn.onclick = ()=>{
  color.classList.toggle('active');
  if(color.classList.contains('active')){
     color.style.backgroundColor = "#151b30e1"
  }else{
    color.style.backgroundColor = "white"
  }
}

colorPicker.addEventListener('input',function(){
 bottomLeftSec.style.backgroundColor = colorPicker.value
})

topColorPicker.addEventListener('input',function(){
 topSection.style.backgroundColor = topColorPicker.value
})





// Shareable link 

// Elements 

const username = document.getElementById("username")
const generateResume = document.getElementById("generateResume");
const link = document.getElementById("resumeLink");
const buttonBox = document.getElementById("button-box")
const copyLink = document.getElementById("copyLink")

generateResume.addEventListener("click", function() {
   const newUsername = username.value.trim();

  if (newUsername) {
      const resumeLink = `${window.location.origin}/resume/${newUsername}`;
      link.textContent = resumeLink;
      buttonBox.classList.remove("hidden");
  } else {
      showToast(nameError)
  }
});

// Copy link Button

copyLink.addEventListener("click", function() {
  link.textContent;
  navigator.clipboard.writeText(link).then(function() {
      showToast(clipboard)
  }, function(err) {
      console.error('Could not copy text: ', err);
  });
});


// Download Button

const downloadBtn = document.getElementById("download")
const resume = document.querySelector(".preview-sec")

downloadBtn.addEventListener("click",()=>{
  const opt = {
    filename : 'ResumeByFiza.pdf',
    image : { type : 'jpeg' , quality : 0.98 },
    html2canvas: { 
      scale: 2, // increase scale for better resolution
      scrollY: 0, // prevents scrolling issues
      y: 20 // adds padding from the top
    },
    jsPDF : {unit: 'in' , format : 'letter',orientation : 'portrait'}
  }
   html2pdf().from(resume).set(opt).save()
})

// ToastBox 

let toastBox = document.getElementById("toastBox");
let nameError = "Please enter a username."
let clipboard = "Resume link copied to clipboard!"

function showToast(msg){
  let toast = document.createElement('div')
  toast.classList.add('toast');
  toast.innerHTML = msg ;
  toastBox.appendChild(toast)

  setTimeout(()=>{
    toast.remove()
  },2500)
  
}