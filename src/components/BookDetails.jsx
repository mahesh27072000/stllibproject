import "../styles/BookDetails.css";
import "../styles/Form.css";
import Notification from "./Notification";
import axios from "axios";
import appLocalStorage from "./localStorage";
import React, { useEffect, useState } from "react";

const { getItem, setItem } = appLocalStorage;

const BookDetails = () => {
    const [info, setInfo] = useState("");
    const [user, setUser] = useState([]);

    const [dueDate, setDueDate] = useState({ due_date: "" });
    const [buttonInput, setButtonInput] = useState({
        clicked: false,
        text: "",
    });

    const postReturn = {
        book: getItem("book")?.id,
        library_member: user?.id,
        date_of_return: new Date().toISOString().split("T")[0],
    };

    const returnBook = async () => {
        setInfo("Loading...");
        try {
            const response = await axios.post(
                // "http://127.0.0.1:8000/returns/",
                "http://127.0.0.1:8000/returns/",
                postReturn
            );
            setItem("userDetails", response.data.library_member);
            setInfo("Sucessful");
            console.log(response.data);
        } catch (err) {
            setInfo(
                "Unsucessful! Note:You can't perform this operation twice "
            );

            console.log("return", err);
        }
    };

    const postRenewal = {
        book: getItem("book")?.id,
        library_member: user?.id,
        due_date: dueDate.due_date,
        date_of_renewal: new Date().toISOString().split("T")[0],
    };

    const renewBook = async () => {
        console.log("here");
        setInfo("Loading...");
        try {
            const response = await axios.post(
                // "http://127.0.0.1:8000/renewals/",
                "http://127.0.0.1:8000/renewals/",
                postRenewal
            );
            setItem("userDetails", response.data.library_member);
            setInfo("Sucessful");

            setButtonInput({ ...buttonInput, clicked: false });
        } catch (err) {
            setInfo(
                "Unsucessful! Note:You can't perform this operation twice "
            );
            setButtonInput({ ...buttonInput, clicked: false });
            console.log("renew", err);
        }
    };

    const postIssues = {
        book: getItem("book")?.id,
        library_member: user?.id,
        due_date: dueDate.due_date,
        date_of_issue: new Date().toISOString().split("T")[0],
    };

    const issueBook = async () => {
        console.log("here");
        setInfo("Loading...");
        try {
            const response = await axios.post(
                // "http://127.0.0.1:8000/issues/",
                "http://127.0.0.1:8000/issues/",
                postIssues
            );

            setInfo("Sucessful");
            setItem("userDetails", response.data.library_member);
            setButtonInput({ ...buttonInput, clicked: false });
        } catch (err) {
            setInfo(
                "Unsucessful! Note:You can't perform this operation twice "
            );
            setButtonInput({ ...buttonInput, clicked: false });
            console.log("issue", err);
        }
    };

    useEffect(() => {
        if (getItem("user") !== null) {
            setUser(getItem("user").user);
        }
    }, []);

    return (
        <div className="book_details_container">
            <Notification info={info} />
            <div className="book_details_inner_container">
                <img
                    className="book_details_thumbnail"
                    src="https://res.cloudinary.com/dj25aashz/image/upload/v1670968237/cld-sample-3.jpg"
                    alt="book"
                />
                <div className="book_details">
                    <h2>{getItem("book")?.title}</h2>
                    <p>{getItem("book")?.author}</p>
                    <p>
                        {getItem("book")?.number_of_copies > 1
                            ? `${
                                  getItem("book")?.number_of_copies
                              } copies available`
                            : `${
                                  getItem("book")?.number_of_copies
                              } copy available`}
                    </p>
                </div>
                {console.log(user)}
                <div className="lower">
                    {user.is_staff ? (
                        ""
                    ) : user?.length === 0 ? (
                        <a href="/signup" className="link">
                            Sign up to get this book
                        </a>
                    ) : (
                        <div className="book_details_buttons">
                            <button
                                onClick={() =>
                                    setButtonInput({
                                        ...buttonInput,
                                        clicked: !buttonInput.clicked,
                                        text: "Issue",
                                    })
                                }
                                className="book_details_button link"
                            >
                                Issue
                            </button>
                            <button
                                onClick={() => returnBook()}
                                className="book_details_button link"
                            >
                                Return
                            </button>

                            <button
                                onClick={() =>
                                    setButtonInput({
                                        ...buttonInput,
                                        clicked: !buttonInput.clicked,
                                        text: "Renew",
                                    })
                                }
                                className="book_details_button link"
                            >
                                Renew
                            </button>
                        </div>
                    )}
                    {buttonInput.clicked ? (
                        <form onSubmit={(event) => event.preventDefault()}>
                            <div className="function_and_input">
                                <div className="input">
                                    <label htmlFor="due_date">
                                        Due Date
                                        <input
                                            type="date"
                                            onChange={(event) =>
                                                setDueDate({
                                                    ...dueDate,
                                                    due_date:
                                                        event.target.value,
                                                })
                                            }
                                        />
                                    </label>
                                </div>
                                <button
                                    onClick={() =>
                                        buttonInput.text === "Issue"
                                            ? issueBook()
                                            : renewBook()
                                    }
                                    className="button"
                                >
                                    {buttonInput.text}
                                </button>
                            </div>
                        </form>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
