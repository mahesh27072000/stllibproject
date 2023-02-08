import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";

const SignUp = () => {
    const [formField, setFormField] = useState({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        identity: "user",
        password: "",
    });

    const post = {
        username: formField.username,
        email: formField.email,
        first_name: formField.first_name,
        last_name: formField.last_name,
        password: formField.password,
        is_staff: formField.identity !== "user" ? false : true,
    };

    const postLink =
        formField.identity === "user"
            ? `https://library-project-api.herokuapp.com/library-members/`
            : "https://library-project-api.herokuapp.com/library-staff-members/";

    const submitSignUpForm = async () => {
        console.log("here");
        try {
            const response = await axios.post(postLink, post);
            console.log(response.data);
        } catch (err) {
            console.log("sign up", err);
        }
    };

    const getUser = async () => {
        try {
            const response = await axios.get(
                "https://library-project-api.herokuapp.com/user_list/",
                {
                    headers: {
                        "WWW-Authenticate": `Bearer realm="api`,
                    },
                }
            );
            console.log(response.data);
        } catch (err) {
            console.log("data", err);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <Form>
            <div className="form_and_lower">
                <div className="form">
                    <h1>Sign up</h1>
                    <div className="input_field">
                        <label htmlFor="firstname">
                            Username
                            <input
                                type="text"
                                placeholder="First Name"
                                onChange={(event) =>
                                    setFormField({
                                        ...formField,
                                        username: event.target.value,
                                    })
                                }
                            />
                        </label>
                        <label htmlFor="firstname">
                            First Name
                            <input
                                type="text"
                                placeholder="First Name"
                                onChange={(event) =>
                                    setFormField({
                                        ...formField,
                                        first_name: event.target.value,
                                    })
                                }
                            />
                        </label>

                        <label htmlFor="lastname">
                            Last Name
                            <input
                                type="text"
                                placeholder="Last Name"
                                onChange={(event) =>
                                    setFormField({
                                        ...formField,
                                        last_name: event.target.value,
                                    })
                                }
                            />
                        </label>

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
                                        checked={
                                            "library staff" ===
                                            formField.identity
                                        }
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
                                        checked={"user" === formField.identity}
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

                        <button
                            className="sign_up_button"
                            onClick={() => submitSignUpForm()}
                        >
                            Sign Up
                        </button>
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
