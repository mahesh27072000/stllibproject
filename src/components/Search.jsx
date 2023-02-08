import { useState } from "react";
import "../styles/Main.css";
import "../styles/Search.css";
import React from "react";
import axios from "axios";
import Footer from "./Footer";
import BookList from "./BookList";

const Search = () => {
    const [searchWord, setSearchWord] = useState("");
    const postLink = `https://library-project-api.herokuapp.com/login/books/search/?search=${searchWord}`;

    const onSearch = async () => {
        console.log("here");
        try {
            const response = await axios.get(postLink);
            console.log(response.data);
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

                <article>
                    <BookList
                        heading="Available Books"
                        title="title"
                        author="Author Rothoa"
                        button="View details"
                    />
                </article>
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Search;
