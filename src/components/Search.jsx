import { useState } from "react";
import "../styles/Main.css";
import "../styles/Search.css";
import BookList from "./BookList";

const Search = () => {
    const [searchWord, setSearchWord] = useState("");
    const [selectedOption, setSelectedOption] = useState("all");
    console.log(selectedOption);
    return (
        <main>
            <article className="article_main_container">
                <div className="main_container search_main_container">
                    <div className="search_text_container">
                        <h1>Search for a book</h1>
                        <p>
                            Search for books, journals, articles and
                            publications based on Access Number, Title, Author,
                            Subject or Keyword
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
                        <div className="search_icon">
                            <img
                                src="https://res.cloudinary.com/dj25aashz/image/upload/v1675599683/magnifying-glass_mdsrdy.png"
                                alt="search icon"
                            />
                        </div>
                    </div>

                    <div className="filter_container">
                        <div className="radio_buttons_two">
                            <label>
                                <input
                                    type="radio"
                                    value="all"
                                    checked={selectedOption === "all"}
                                    onChange={(event) =>
                                        setSelectedOption(event.target.value)
                                    }
                                />
                                All
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value="access number"
                                    checked={selectedOption === "access number"}
                                    onChange={(event) =>
                                        setSelectedOption(event.target.value)
                                    }
                                />
                                Access number
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value="title"
                                    checked={selectedOption === "title"}
                                    onChange={(event) =>
                                        setSelectedOption(event.target.value)
                                    }
                                />
                                Title
                            </label>
                        </div>

                        <div className="radio_buttons_one">
                            <label>
                                <input
                                    type="radio"
                                    value="author"
                                    checked={selectedOption === "author"}
                                    onChange={(event) =>
                                        setSelectedOption(event.target.value)
                                    }
                                />
                                Author
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value="subject"
                                    checked={selectedOption === "subject"}
                                    onChange={(event) =>
                                        setSelectedOption(event.target.value)
                                    }
                                />
                                Subject
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value="keyword"
                                    checked={selectedOption === "keyword"}
                                    onChange={(event) =>
                                        setSelectedOption(event.target.value)
                                    }
                                />
                                Keyword
                            </label>
                        </div>
                    </div>
                </div>
            </article>

            <article>
                <BookList />
            </article>
        </main>
    );
};

export default Search;
