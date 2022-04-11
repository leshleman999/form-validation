// bring in everything to update from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Functions
//show input error message
function showError(input,message) {
   const formControl = input.parentElement;
   formControl.className = 'form-control error';
   const small = formControl.querySelector('small');
   small.innerText = message;
}


//show success error message
function showSuccess(input) {
   const formControl = input.parentElement;
   formControl.className = 'form-control success';

}

//check email is valid
function isValidEmail(email) {
   const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   //the test method takes in a string to see if it matches email
   //console.log(re.test(String(email).toLowerCase()));
   return re.test(String(email).toLowerCase())
};

//Event listeners
form.addEventListener('submit', function(e) {
   //prevent the form from submitting
   e.preventDefault();

   if(username.value ===''){
      showError(username, 'Username is required')
   } else {
      showSuccess(username);
   }

   if(email.value ===''){
      showError(email, 'Email is required')
   } else if(!isValidEmail(email.value)) {
      showError(email, 'email is not valid')
   } else {
      showSuccess(email);
   }

   if(password.value ===''){
      showError(password, 'Password is required')
   } else {
      showSuccess(password);
   }

   if(password2.value ===''){
      showError(password2, 'Password2 is required')
   } else {
      showSuccess(password2);
   }
})