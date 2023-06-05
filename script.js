const form = document.querySelector("#form")
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

const emailVal = (email) => {
  return email.value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = 'form-input active'
    const small = formControl.querySelector('small')
    small.innerText = message
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-input"
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (firstName.value === '') {
        showError(firstName, "First Name cannot be empty");
    } else {
        showSuccess(firstName)
    }

    if (lastName.value === '') {
        showError(lastName, "Last Name cannot be empty");
    } else {
        showSuccess(lastName)
    }

    if (email.value === '') {
        showError(email, "Email Address cannot be empty");
    } else {
        showSuccess(email)
    }

    if (password.value === '') {
        showError(password, "Password cannot be empty");
    } else {
        showSuccess(password)
    }
})

function validate(index) {
    if (index.value.length === "") {
      return false;
    }

    return showSuccess(index);
}

function validateEmail() {
    if (email.value.length === '') {
        return false;
    } 
    else if (!emailVal(email)) {
        return showError(email, "Looks like this is not a email");
    }

    return showSuccess(email);
}