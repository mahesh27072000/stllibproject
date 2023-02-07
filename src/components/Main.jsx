import "../styles/Main.css";
import React from "react";
import Footer from "./Footer";
import BookList from "./BookList";

const Main = () => {
    return (
        <React.Fragment>
            <main>
                <article className="article_main_container">
                    <div className="main_container">
                        <div className="text_container">
                            <h1>Web Library Application</h1>
                            <p>
                                Find books, journals, articles and publications
                                on this platform
                            </p>
                            <button className="get_started">Get Started</button>
                        </div>

                        <div className="image_container">
                            <img
                                src="https://res.cloudinary.com/dj25aashz/image/upload/v1675545927/Asset_1_ybcxjf.png"
                                alt="e-learning"
                            />
                        </div>
                    </div>
                </article>

                <article>
                    <BookList />
                </article>
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Main;
