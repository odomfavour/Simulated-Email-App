// Variable
const sendBtn = document.getElementById('sendBtn'),
email = document.getElementById('email'),
subject = document.getElementById('subject'),
message = document.getElementById('message'),
resetBtn = document.getElementById('resetBtn'),
sendEmailForm = document.getElementById('email-form');


// Event Listeners
eventListeners();
function eventListeners() {
  // App Init
  document.addEventListener('DOMContentLoaded', appInit);

  // validate the form
  email.addEventListener('blur', validateField);
  subject.addEventListener('blur', validateField);
  message.addEventListener('blur', validateField);

  // Send Email and reset button
  resetBtn.addEventListener('click', resetForm);

  sendEmailForm.addEventListener('submit', sendEmail);
}


// Functions

// App initialization
function appInit() {
  sendBtn.disabled = true;
}

function sendEmail(e) {
  e.preventDefault();

  // show the spinner
  const spinner = document.getElementById('spinner');
  spinner.style.display = 'block';

  // Show the send image
  const sendEmailImg = document.createElement('img');
  sendEmailImg.src = 'img/mail.gif';
  sendEmailImg.style.display = 'block';


  // Hide spinner then show the other gif
  setTimeout(function() {
    // Hide the spinner
    spinner.style.display = 'none';

    // show the sent image
    document.getElementById('loaders').appendChild(sendEmailImg);

    // After 5 seconds remove sent image and reset the form

    setTimeout(function(){
      sendEmailForm.reset();
      sendEmailImg.remove();
    }, 5000);

  }, 3000);
}

// Validate the fields

function validateField() {
  let errors;

  // validate the length of the field
  validateLength(this);

  // validate the email
 if(this.type === email) {
   validateEmail(this);
 } 

 // errors
 errors = document.querySelectorAll('.error')
 console.log(errors)

 // Check that the inputs are not empty
 if(email.value !== '' && subject.value !== '' && message.value!== '') {
    if(errors.length === 0) {
      sendBtn.classList.remove('btn-outline-secondary');sendBtn.classList.add('btn-danger');
      sendBtn.disabled = false;
    }
 }
}

// validate the length of the fields
function validateLength(field) {
  if(field.value.length > 0) {
    field.style.borderBottomColor = 'green';
    field.classList.remove('error');
  }else {
    field.style.borderBottomColor = 'red';
    field.classList.add('error');
  }
}

// reset form

function resetForm() {
  sendEmailForm.reset();
}

// Validates email (checks for @ in value)

function validateEmail(field) {
  let emailText = field.value;

  // Check if the emailText contains the @ sign
  if(email.textContent.indexOf('@') !== -1) {
    field.style.borderBottomColor = 'green';
    field.classList.remove('error');
  }else {
    field.style.borderBottomColor = 'red';
    field.classList.add('error');
  }
}

