import { useState } from "react";
import Form from "./Form";

const LogIn = () => {
    const [formField, setFormField] = useState({
        email: "",
        identity: "",
    });
    return (
        <Form>
            <div className="form_and_lower form_and_lower_login">
                <div className="form">
                    <h1>Log In</h1>
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

                        <button className="sign_up_button">Log in</button>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default LogIn;
