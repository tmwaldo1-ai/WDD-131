const container = document.querySelector('#container');
const userType = document.querySelector('select[name="type"]');
const username = document.querySelector('#uname');
const password = document.querySelector('#pword');

//event listener for user type selection
function userTypeChange() {
    //If user selects student then display student ID field
    if (userType.value === 'student') {
        username.classList.toggle('fullinput');
    }
    else {
        username.classList.remove('fullinput');
    };
}

userType.addEventListener('change', userTypeChange);

