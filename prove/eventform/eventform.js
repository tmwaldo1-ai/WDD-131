const container = document.querySelector('#container');
const userType = document.querySelector('select[name="type"]');
const username = document.querySelector('#uname');
const password = document.querySelector('#pword');

//event listener for user type selection
function userTypeChange() {
    //If user selects student then display student ID field
    if (userType.value === 'student') {
        username.classList.add('fullinput');
        password.classList.remove('fullinput');
    }
    // If user selects guest then display access code field
    else if (userType.value === 'guest') {
        password.classList.add('fullinput');
        username.classList.remove('fullinput');
    }
    else {
        username.classList.remove('fullinput');
        password.classList.remove('fullinput');
    }
};

    userType.addEventListener('change', userTypeChange);


