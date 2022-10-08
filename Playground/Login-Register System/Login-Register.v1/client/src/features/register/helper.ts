export function handleMatchPassword () : void {
    try {
        const password = document.getElementById("password") as HTMLInputElement;
        const confirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;
        const registerButton = document.getElementById("register") as HTMLInputElement;

        if(confirmPassword.value !== password.value) {
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
            registerButton.disabled = true;
        } else {
            password.style.borderColor = "green";
            confirmPassword.style.borderColor = "green";
            registerButton.disabled = false;
        }
    } catch (error) {
        console.error(error);
    }
}

