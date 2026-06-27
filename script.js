const form = document.getElementById("signupForm");

const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirmPassword");

const message = document.getElementById("message");

const toggle = document.getElementById("togglePassword");



// Show / Hide password

toggle.onclick = ()=>{

    if(password.type === "password"){

        password.type="text";
        toggle.innerHTML="🙈";

    }

    else{

        password.type="password";
        toggle.innerHTML="👁";

    }

};




// Form validation

form.addEventListener("submit",(e)=>{

    e.preventDefault();


    if(password.value.length < 6){

        message.style.color="red";
        message.innerHTML="Password must contain 6 characters";

        return;

    }



    if(password.value !== confirmPassword.value){

        message.style.color="red";
        message.innerHTML="Passwords do not match";

        return;

    }



    message.style.color="green";

    message.innerHTML="Account created successfully!";

});