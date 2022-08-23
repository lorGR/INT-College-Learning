import { useState } from "react";

const Form = () => {

    const [user, setUser] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;