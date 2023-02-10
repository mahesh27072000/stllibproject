import "../styles/Dashboard.css";
import BookList from "./BookList";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [user, setUser] = useState({});
    const getItem = (key) => {
        const items = JSON.parse(localStorage.getItem(key));
        return items;
    };

    useEffect(() => {
        setUser(getItem("user").user);
    }, []);

    console.log(user.is_staff);

    const [formField, setFormField] = useState({
        category: "",
        title: "",
        author: "",
        ISBN: "",
        publication_date: "",
        number_of_copies: "",
    });
    const getUser = async () => {
        try {
            const response = await axios.get(
                "https://library-project-api.herokuapp.com/user_list/",
                {
                    headers: {
                        "WWW-Authenticate": `Bearer realm=api`,
                    },
                }
            );
            console.log(response.data);
        } catch (err) {
            console.log("get user", err);
        }
    };

    const getBooks = async () => {
        try {
            const response = await axios.get(
                "https://library-project-api.herokuapp.com/books",
                {
                    headers: {
                        "WWW-Authenticate": `Bearer realm="api`,
                    },
                }
            );
            console.log(response.data);
        } catch (err) {
            console.log("get books", err);
        }
    };

    const post = {
        category: formField.category,
        title: formField.title,
        author: formField.author,
        ISBN: formField.ISBN,
        publication_date: formField.publication_date,
        number_of_copies: formField.number_of_copies,
    };

    const addBooks = async () => {
        try {
            const response = await axios.post(
                "https://library-project-api.herokuapp.com/books/",
                {
                    headers: {
                        "WWW-Authenticate": `Bearer realm="api`,
                    },
                },
                post
            );
            console.log(response.data);
        } catch (err) {
            console.log("add books", err);
        }
    };

    const deleteBooks = async () => {
        try {
            const response = await axios.post(
                "https://library-project-api.herokuapp.com/books/id",
                {
                    headers: {
                        "WWW-Authenticate": `Bearer realm="api`,
                    },
                },
                post
            );
            console.log(response.data);
        } catch (err) {
            console.log("delete", err);
        }
    };

    const returnBook = async () => {
        try {
            const response = await axios.post(
                "https://library-project-api.herokuapp.com/books/id",
                {
                    headers: {
                        "WWW-Authenticate": `Bearer realm="api`,
                    },
                },
                post
            );
            console.log(response.data);
        } catch (err) {
            console.log("return", err);
        }
    };

    const renewBook = async () => {
        try {
            const response = await axios.post(
                "https://library-project-api.herokuapp.com/books/id",
                {
                    headers: {
                        "WWW-Authenticate": `Bearer realm="api`,
                    },
                },
                post
            );
            console.log(response.data);
        } catch (err) {
            console.log("renew", err);
        }
    };

    useEffect(() => {
        getUser();
        getBooks();
    }, []);

    return (
        <section className="section_main_container">
            <div className="section_container">
                <h1>Welcome {user.username}</h1>
                {user?.is_staff
                    ? renderStaffDashboard(
                          formField,
                          setFormField,
                          addBooks,
                          deleteBooks,
                          user
                      )
                    : renderUserDashboard(returnBook, renewBook, user)}
            </div>
        </section>
    );
};

const renderStaffDashboard = (
    formField,
    setFormField,
    addBooks,
    deleteBooks,
    user
) => {
    return (
        <>
            {console.log(user)}{" "}
            <div className="user_list">
                <h2>List of users</h2>
                <table>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Names</th>
                            <th>Remove user</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>My Name</td>
                            <td>Delete</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>My Name</td>
                            <td>Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <BookList
                heading="Available Books"
                title="title"
                author="Author Rothoa"
                button="Delete book"
                onClickButton={() => deleteBooks()}
            />
            <div className="add_new_books">
                <div className="form">
                    <h2>Add a book</h2>
                    <div className="input_field">
                        <label htmlFor="category">
                            Category
                            <input
                                type="text"
                                placeholder="Category"
                                onChange={(event) =>
                                    setFormField({
                                        ...formField,
                                        category: event.target.value,
                                    })
                                }
                            />
                        </label>
                        <label htmlFor="title">
                            Title
                            <input
                                type="text"
                                placeholder="Title"
                                onChange={(event) =>
                                    setFormField({
                                        ...formField,
                                        title: event.target.value,
                                    })
                                }
                            />
                        </label>

                        <label htmlFor="author">
                            Author
                            <input
                                type="text"
                                placeholder="Author"
                                onChange={(event) =>
                                    setFormField({
                                        ...formField,
                                        Author: event.target.value,
                                    })
                                }
                            />
                        </label>

                        <label htmlFor="ISBN">
                            ISBN
                            <input
                                type="text"
                                placeholder="example@email.com"
                                onChange={(event) =>
                                    setFormField({
                                        ...formField,
                                        ISBN: event.target.value,
                                    })
                                }
                            />
                        </label>

                        <label htmlFor="publication_date">
                            Publication date
                            <input
                                type="text"
                                onChange={(event) =>
                                    setFormField({
                                        ...formField,
                                        publication_date: event.target.value,
                                    })
                                }
                            />
                        </label>

                        <label htmlFor="number_of_copies">
                            Number of Copies
                            <input
                                type="text"
                                onChange={(event) =>
                                    setFormField({
                                        ...formField,
                                        number_of_copies: event.target.value,
                                    })
                                }
                            />
                        </label>

                        <button
                            className="sign_up_button"
                            onClick={() => addBooks()}
                        >
                            Add Book
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

const renderUserDashboard = (returnBook, renewBook, user) => {
    return (
        <>
            <div className="cart">
                <div className="issues">
                    <h2>Issues</h2>
                    {user.issues?.length !== 0 ? (
                        <div className="cart_item">
                            <img
                                src="https://res.cloudinary.com/dj25aashz/image/upload/v1670968237/cld-sample-3.jpg"
                                alt="book"
                            />
                            <div className="issue_and_cart_details">
                                <div className="cart_book_details">
                                    <p className="book_title">Tittle</p>
                                    <p>Category</p>
                                    <p>Author</p>
                                </div>
                                <button className="issue_button">Issue</button>
                            </div>
                        </div>
                    ) : (
                        <div className="no_item">No current Issues</div>
                    )}
                </div>
            </div>

            <div className="cart">
                <div className="issues">
                    <h2>To be returned</h2>
                    {user.returns?.length !== 0 ? (
                        <div className="cart_item">
                            <img
                                src="https://res.cloudinary.com/dj25aashz/image/upload/v1670968237/cld-sample-3.jpg"
                                alt="book"
                            />
                            <div className="issue_and_cart_details">
                                <div className="cart_book_details">
                                    <p className="book_title">Tittle</p>
                                    <p>Category</p>
                                    <p>Author</p>
                                </div>
                                <button
                                    onClick={() => returnBook}
                                    className="issue_button"
                                >
                                    Return
                                </button>
                                <button
                                    onClick={() => renewBook}
                                    className="issue_button"
                                >
                                    Renew
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="no_item">No book to be return</div>
                    )}
                </div>
            </div>
            <BookList
                heading="Available Books"
                title="title"
                author="Author Rothoa"
                button="Add to cart"
            />
        </>
    );
};

export default Dashboard;
