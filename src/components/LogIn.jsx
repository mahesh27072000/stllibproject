import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";
import appLocalStorage from "./localStorage";
import Notification from "./Notification";

const { setItem } = appLocalStorage;

const LogIn = () => {
    const navigate = useNavigate();

    const [info, setInfo] = useState("");

    const [formField, setFormField] = useState({
        username: "",
        password: "",
    });

    const post = {
        username: formField.username,
        password: formField.password,
    };

    // const postLink = `http://127.0.0.1:8000/login/`;
    const postLink = 'http://127.0.0.1:8000/login/';

    const submitLoginForm = async () => {
        setInfo("Loading...");

        try {
            const response = await axios.post(postLink, post);

            if (response.data.error === "Invalid credentials") {
                setInfo(response.data.error);
            } else {
                setItem("user", response.data);
                navigate("/dashboard");
            }
        } catch (err) {
            console.log("Login", err);
        }
    };

    return (
        <Form>
            <div className="form_and_lower form_and_lower_login">
                <Notification info={info} />
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
                                        username: event.target.value,
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
