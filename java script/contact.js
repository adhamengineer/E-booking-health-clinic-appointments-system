const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit');
const nameSpan = document.getElementById('nameSpan');
const emailSpan = document.getElementById('emailSpan');
const phoneSpan = document.getElementById('phoneSpan');
const subjectSpan = document.getElementById('subjectSpan');
const messageSpan = document.getElementById('messageSpan');

messageSpan
submitButton.onclick = function(e){
  e.preventDefault();
  if(nameInput.value  == "" )
    nameSpan.innerHTML = "Name is required!";
    
    if(emailInput.value == "")
    emailSpan.innerHTML = "Email is required!";

    if(phoneInput.value == "")
    phoneSpan.innerHTML = "Phone number is required!";

    if(subjectInput.value == "")
    subjectSpan.innerHTML = "Subject is required!";

    if(messageInput.value == "")
    messageSpan.innerHTML = "Message is required!";

    clearData();
    nameInput.classList.remove("is-valid");
    emailInput.classList.remove("is-valid");
    phoneInput.classList.remove("is-valid");
    subjectInput.classList.remove("is-valid");
    messageInput.classList.remove("is-valid");
}

//clear data
function clearData(){
  nameInput.value="";
  emailInput.value="";
  phoneInput.value="";
  subjectInput.value="";
  messageInput.value="";
}

// name input 
nameInput.onkeyup = function(){
    var pattern = /^[A-Z][a-z\s]{2,20}$/;
    if(pattern.test(nameInput.value.trim())){
      if(nameInput.classList.contains('is-invalid')){
        nameInput.classList.replace('is-invalid' , 'is-valid')
        nameSpan.innerHTML = "";
      }
      else{
        nameInput.classList.add('is-valid');
      }
  
    }
    else{
      if(nameInput.classList.contains('is-valid')){
        nameInput.classList.replace('is-valid' , 'is-invalid')
      }
      else{
        nameInput.classList.add('is-invalid');
      }
    }
  }

// email input 
emailInput.onkeyup = function(){
  var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(pattern.test(emailInput.value.trim())){
    if(emailInput.classList.contains('is-invalid')){
      emailInput.classList.replace('is-invalid' , 'is-valid')
      emailSpan.innerHTML = "";
    }else{
      emailInput.classList.add('is-valid');
    }

  }
  else{
    if(emailInput.classList.contains('is-valid')){
      emailInput.classList.replace('is-valid' , 'is-invalid')
    }
    else{
      emailInput.classList.add('is-invalid');
    }
  }
}

//   phone number 
phoneInput.onkeyup = function(){
    var pattern = /^[0-9]{10}$/;
    if(pattern.test(phoneInput.value.trim())){
      if(phoneInput.classList.contains('is-invalid')){
        phoneInput.classList.replace('is-invalid' , 'is-valid')
        phoneSpan.innerHTML = "";
      }else{
        phoneInput.classList.add('is-valid');
      }
  
    }
    else{
      if(phoneInput.classList.contains('is-valid')){
        phoneInput.classList.replace('is-valid' , 'is-invalid')
      }
      else{
        phoneInput.classList.add('is-invalid');
      }
    }
  }

  
// subject input 
subjectInput.onkeyup = function(){
    var pattern = /^[A-Z a-z]{3,20}$/;
    if(pattern.test(subjectInput.value.trim())){
      if(subjectInput.classList.contains('is-invalid')){
        subjectInput.classList.replace('is-invalid' , 'is-valid')
        subjectSpan.innerHTML = "";
      }
      else{
        subjectInput.classList.add('is-valid');
      }
  
    }
    else{
      if(subjectInput.classList.contains('is-valid')){
        subjectInput.classList.replace('is-valid' , 'is-invalid')
      }
      else{
        subjectInput.classList.add('is-invalid');
      }
    }
  }
  
// message input 
messageInput.onkeyup = function(){
    var pattern = /^[A-Z a-z]{3,100}$/;
    if(pattern.test(messageInput.value.trim())){
      if(messageInput.classList.contains('is-invalid')){
        messageInput.classList.replace('is-invalid' , 'is-valid')
        messageSpan.innerHTML = "";
      }
      else{
        messageInput.classList.add('is-valid');
      }
  
    }
    else{
      if(messageInput.classList.contains('is-valid')){
        messageInput.classList.replace('is-valid' , 'is-invalid')
      }
      else{
        messageInput.classList.add('is-invalid');
      }
    }
  }