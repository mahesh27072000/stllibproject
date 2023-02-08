import { useState } from "react";
import axios from "axios";
import Form from "./Form";

const LogIn = () => {
    const [formField, setFormField] = useState({
        username: "",
        password: "",
    });

    const post = {
        username: formField.username,
        password: formField.password,
    };

    const postLink = `https://library-project-api.herokuapp.com/login/`;

    const submitLoginForm = async () => {
        console.log("here");
        try {
            const response = await axios.post(postLink, post);
            console.log(response.data);
        } catch (err) {
            console.log("Login up", err);
        }
    };

    return (
        <Form>
            <div className="form_and_lower form_and_lower_login">
                <div className="form">
                    <h1>Log In</h1>
                    <div className="input_field">
                        <label htmlFor="username">
                            Username
                            <input
                                type="text"
                                placeholder="username"
                                onChange={(event) =>
                                    setFormField({
                                        ...formField,
                                        email: event.target.value,
                                    })
                                }
                            />
                        </label>

                        <label htmlFor="password">
                            Password
                            <input
                                type="text"
                                onChange={(event) =>
                                    setFormField({
                                        ...formField,
                                        password: event.target.value,
                                    })
                                }
                            />
                        </label>

                        <button
                            className="sign_up_button"
                            onClick={() => submitLoginForm()}
                        >
                            Log in
                        </button>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default LogIn;
