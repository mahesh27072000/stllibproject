import "../styles/Main.css";
import "../styles/Search.css";
import BookList from "./BookList";

const Main = () => {
    return (
        <main>
            <article>
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
                        <input type="text" />
                        <div className="search_icon">
                            <img
                                src="https://res.cloudinary.com/dj25aashz/image/upload/v1675599683/magnifying-glass_mdsrdy.png"
                                alt="search icon"
                            />
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

export default Main;
