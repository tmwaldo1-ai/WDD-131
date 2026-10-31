const container = document.querySelector('#container');
const userType = document.querySelector('select[name="type"]');
const username = document.querySelector('#uname');
const password = document.querySelector('#pword');
const output = document.querySelector("#output");
const form = document.querySelector("#ticket");

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

//Validation for username and password fields
form.addEventListener('submit', function (event) {
    event.preventDefault();
    output.textContent = '';
    const studentId = document.querySelector('#stuid');
    const sudo = document.querySelector('#sudo');
    if (studentId.value.length !== 9 && username.checkVisibility() === true) {
        output.textContent = 'Student I# must be 9 digits long';
        return;
    }
    if (studentId.value.length === 9 && username.checkVisibility() === true) {
        submitSuccess();
    }
    if (sudo.value === "EVENT131" && password.checkVisibility() === true) {
        submitSuccess();
    }
    if (sudo.value !== "EVENT131" && password.checkVisibility() === true) {
        output.textContent = 'Access code is incorrect';
        return;
    }
});

//Put ticket info into output if submit is succesful
function submitSuccess() {
    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${document.querySelector('#firstname').value} ${document.querySelector('#lastname').value}</p>
    <p>${userType.value}</p>
    <p>${document.querySelector('#date').value}
    `;
    // Clear the form after submission
    form.reset();
}

