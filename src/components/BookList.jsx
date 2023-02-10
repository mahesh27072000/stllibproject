import "../styles/BookList.css";

const BookList = ({ heading, title, author, button, onClickButton }) => {
    return (
        <div className="booklist_container">
            <h2>{heading}</h2>
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

                        <button onClick={onClickButton} className="add_to_cart">
                            {button}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookList;
