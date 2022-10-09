import axios from "axios";
import React from "react";

export function handleMatchPassword(): void {
    try {
        const password = document.getElementById("password") as HTMLInputElement;
        const confirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;
        const registerButton = document.getElementById("register") as HTMLInputElement;

        if (confirmPassword.value !== password.value) {
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

export async function handleAvailableEmail(event: React.ChangeEvent<HTMLInputElement>) {
    try {

        const registerButton = document.getElementById("register") as HTMLInputElement;

        const email = event.target.value;
        const { data } = await axios.post("/users/available-email", { email });
        if(!data) throw new Error("Couldn't receive data from AXIOS POST: /users/available-email");
        const { available } = data;
        available ? event.target.style.borderColor = "green" : event.target.style.borderColor = "red";
    } catch (error) {
        console.error(error);
    }
}
