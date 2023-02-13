import appLocalStorage from "./localStorage";
import { useNavigate } from "react-router-dom";

const { setItem } = appLocalStorage;

const Book = ({ title, author, book, staff, onClick }) => {
    const navigate = useNavigate();
    const onButtonClick = () => {
        setItem("book", book);
        navigate("/book-details");
    };
    return (
        <div className="books_container">
            <div className="book">
                <img
                    className="book_thumbnail"
                    src="https://res.cloudinary.com/dj25aashz/image/upload/v1670968237/cld-sample-3.jpg"
                    alt="book"
                />

                <div className="details_and_button">
                    <div className="details">
                        <p className="title">{title}</p>
                        <p className="author">{author}</p>
                    </div>

                    {!staff ? (
                        <button
                            onClick={() => onButtonClick()}
                            className="add_to_cart"
                        >
                            View Details
                        </button>
                    ) : (
                        <button
                            onClick={() => onClick()}
                            className="add_to_cart"
                        >
                            Delete book
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Book;
