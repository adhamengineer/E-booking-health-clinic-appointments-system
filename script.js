var department = document.querySelector(".department");
var doctor = document.querySelector(".doctor");
var date = document.querySelector(".date");
var fullName = document.querySelector(".fullName");
var email = document.querySelector(".email");
var phone = document.querySelector(".phone");
var message = document.querySelector(".message");
var makeAppoint = document.querySelector(".makeAppoint");
var app;
console.log(department,doctor,date,fullName,email,phone,message,makeAppoint)

if(localStorage.getItem("appointment")){
    app=JSON.parse(localStorage.getItem("appointment"));  
}
else{
    app=[];
}

makeAppoint.onclick = function(event){
    event.preventDefault();
    create();
    clear();
    printData();
}


function create(){
var appointment = {
    department : department.value,
    doctor : doctor.value,
    date : date.value,
    fullName : fullName.value,
    email : email.value,
    phone : phone.value,
    message : message.value
};

app.push(appointment);
localStorage.setItem('appointment',JSON.stringify(app));
}

function printData(){
    console.log(app);
}

function clear(){
 department.value = "";
 doctor.value = "";
 fullName.value = "";
 date.value = "";
 email.value = "";
 phone.value = "";
 message.value = "";
}

// full name 
fullName.onkeyup = function(){
    var pattern = /^[A-Z][a-z\s]{2,10}$/;
    if(pattern.test(fullName.value.trim())){
      if(fullName.classList.contains('is-invalid')){
        fullName.classList.replace('is-invalid' , 'is-valid')
      }else{
        makeAppoint.removeAttribute('disabled');
        fullName.classList.add('is-valid');
      }
  
    }
    else{
      if(fullName.classList.contains('is-valid')){
        fullName.classList.replace('is-valid' , 'is-invalid')
      }
      else{
        makeAppoint.setAttribute('disabled' , 'disabled' );
        fullName.classList.add('is-invalid');
      }
    }
  }


//   phone number 
  phone.onkeyup = function(){
    var pattern = /^[0-9]{10}$/;
    if(pattern.test(phone.value.trim())){
      if(phone.classList.contains('is-invalid')){
        phone.classList.replace('is-invalid' , 'is-valid')
      }else{
        makeAppoint.removeAttribute('disabled');
        phone.classList.add('is-valid');
      }
    }
    else{
      if(phone.classList.contains('is-valid')){
        CoursePrice.classList.replace('is-valid' , 'is-invalid')
      }
      else{
        makeAppoint.setAttribute('disabled' , 'disabled' );
        phone.classList.add('is-invalid');
      }
    }
  }