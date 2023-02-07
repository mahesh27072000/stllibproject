import { useState } from "react";
import Form from "./Form";

const SignUp = () => {
    const [formField, setFormField] = useState({
        email: "",
        identity: "",
    });
    return (
        <Form>
            <div className="form_and_lower">
                <div className="form">
                    <h1>Sign up</h1>
                    <div className="input_field">
                        <label htmlFor="Email Address">
                            Email Address
                            <input
                                type="text"
                                placeholder="example@email.com"
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
                        <div className="radio_buttons_contaner">
                            Register as
                            <div className="radio_buttons">
                                <label
                                    htmlFor="Library staff"
                                    className="radio_input_label"
                                >
                                    <input
                                        className="radio_input"
                                        type="radio"
                                        value="library staff"
                                        onChange={(event) =>
                                            setFormField({
                                                ...formField,
                                                identity: event.target.value,
                                            })
                                        }
                                    />
                                    Library Staff
                                </label>

                                <label
                                    htmlFor="User"
                                    className="radio_input_label"
                                >
                                    <input
                                        className="radio_input"
                                        type="radio"
                                        value="user"
                                        onChange={(event) =>
                                            setFormField({
                                                ...formField,
                                                identity: event.target.value,
                                            })
                                        }
                                    />
                                    User
                                </label>
                            </div>
                        </div>

                        <button className="sign_up_button">Sign Up</button>
                    </div>
                </div>
                <div className="lower">
                    <p>
                        Already have an account?{" "}
                        <button className="log_in">Log in</button>
                    </p>
                </div>
            </div>
        </Form>
    );
};

export default SignUp;
