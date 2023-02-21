import BookList from "./BookList";
import React, { useEffect, useState } from "react";
import appLocalStorage from "./localStorage";
import axios from "axios";
import Book from "./Book";
import Notification from "./Notification";

const { getItem } = appLocalStorage;

const StaffDashboard = ({ bookList, getBooks, user }) => {
    const [info, setInfo] = useState("");
    const [userList, setUserList] = useState([]);
    const [formField, setFormField] = useState({
        category: "",
        title: "",
        author: "",
        ISBN: "",
        publication_date: "",
        number_of_copies: "",
    });

    //|||APIs Integration|||/

    const getUsers = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/user_list/",
                {
                    headers: {
                        Authorization: `Bearer ${getItem("user").access}`,
                    },
                }
            );
            setUserList(response.data);
        } catch (err) {
            console.log("get user", err);
        }
    };

    const post = {
        category: formField.category,
        title: formField.title,
        author: formField.author,
        ISBN: formField.ISBN,
        publication_date: formField.publication_date,
        number_of_copies:0,
    };

    const addBooks = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/books/add/",

                post
            );
            console.log(response.data);
            getBooks();
        } catch (err) {
            console.log("add books", err);
        }
    };

    const deleteBook = async (id) => {
        try {
            const response = await axios.delete(
                `http://127.0.0.1:8000/books/${id}/`,
                {
                    headers: {
                        Authorization: `Bearer ${getItem("user").access}`,
                    },
                },
                post
            );
            console.log(response.data);
            getBooks();
        } catch (err) {
            console.log("delete", err);
        }
    };

    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(
                `http://127.0.0.1:8000/user/${id}/`,
                {
                    headers: {
                        Authorization: `Bearer ${getItem("user").access}`,
                    },
                },
                post
            );
            console.log(response.data);
            getUsers();
        } catch (err) {
            console.log("delete user", err);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);
    return (
        <React.Fragment>
            <Notification info={info} />
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
                        {userList?.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button onClick={() => deleteUser(user.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <BookList heading="Available Books">
                {bookList?.map((book) => (
                    <Book
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        book={book}
                        staff={true}
                        onClick={() => deleteBook(book.id)}
                    />
                ))}
            </BookList>

            <div className="add_new_books">
                <div className="form">
                    <h2>Add a book</h2>
                    <div className="input_field input_field_add_book">
                        <label htmlFor="category">
                            Category
                            <input
                                type="text"
                                placeholder="1"
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
                                        author: event.target.value,
                                    })
                                }
                            />
                        </label>

                        <label htmlFor="ISBN">
                            ISBN
                            <input
                                type="text"
                                placeholder="1234"
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
                                type="date"
                                onChange={(event) =>
                                    setFormField({
                                        ...formField,
                                        publication_date: event.target.value,
                                    })
                                }
                            />
                        </label>

                        {/* <label htmlFor="number_of_copies">
                            Number of Copies
                            <input
                                type="text"
                                placeholder="9"
                                onChange={(event) =>
                                    setFormField({
                                        ...formField,
                                        number_of_copies: event.target.value,
                                    })
                                }
                            />
                        </label> */}

                        <button
                            className="sign_up_button"
                            onClick={() => addBooks()}
                        >
                            Add Book
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default StaffDashboard;
