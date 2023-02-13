import { useState } from "react";
import "../styles/Main.css";
import "../styles/Search.css";
import React from "react";
import axios from "axios";
import Footer from "./Footer";
import BookList from "./BookList";
import Book from "./Book";

const Search = () => {
    const [notification, setNotification] = useState("Type your search word");
    const [searchWord, setSearchWord] = useState("");
    const [returnBooks, setReturnBooks] = useState([]);
    const postLink = `https://library-project-api.herokuapp.com/books/search/?search=${searchWord}`;

    const onSearch = async () => {
        setNotification("Loading...");
        try {
            const response = await axios.get(postLink);
            console.log(response);
            setNotification("Loading...");
            setReturnBooks(response.data);
            if (response.data.length === 0) {
                setNotification("Opps! Book Currently Unavailable");
            }
        } catch (err) {
            console.log("Search", err);
        }
    };

    return (
        <React.Fragment>
            <main>
                <article className="article_main_container">
                    <div className="main_container search_main_container">
                        <div className="search_text_container">
                            <h1>Search for a book</h1>
                            <p>
                                Search for books, journals, articles and
                                publications based on Access Number, Title,
                                Author, Subject or Keyword
                            </p>
                        </div>

                        <div className="search_bar">
                            <input
                                type="text"
                                placeholder="Type search word here"
                                value={searchWord}
                                onChange={(event) =>
                                    setSearchWord(event.target.value)
                                }
                            />
                            <div
                                className="search_icon"
                                onClick={() => onSearch()}
                            >
                                <img
                                    src="https://res.cloudinary.com/dj25aashz/image/upload/v1675599683/magnifying-glass_mdsrdy.png"
                                    alt="search icon"
                                />
                            </div>
                        </div>
                    </div>
                </article>

                {returnBooks.length !== 0 ? (
                    <BookList heading="Available Books">
                        {returnBooks?.map((book) => (
                            <Book
                                key={book.id}
                                title={book.title}
                                author={book.author}
                                book={book}
                            />
                        ))}
                    </BookList>
                ) : (
                    <div className="notification_info">{notification}</div>
                )}
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Search;
