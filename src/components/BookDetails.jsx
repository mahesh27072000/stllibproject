import "../styles/BookDetails.css";

const BookDetails = () => {
    return (
        <div className="book_details_container">
            <div className="book_details_inner_container">
                <img
                    className="book_details_thumbnail"
                    src="https://res.cloudinary.com/dj25aashz/image/upload/v1670968237/cld-sample-3.jpg"
                    alt="book"
                />
                <div className="book_details">
                    <h2>Book Tittle</h2>
                    <p>Book Author</p>
                    <p>Book Category</p>
                    <p>Number of available copy</p>
                </div>

                <div className="lower">
                    {false ? (
                        <a href="/signup" className="link">
                            Sign up to get this book
                        </a>
                    ) : (
                        <div className="book_details_buttons">
                            <button className="book_details_button link">
                                Add to Cart
                            </button>
                            <button className="book_details_button link">
                                Issue
                            </button>
                            <button className="book_details_button link">
                                Return
                            </button>
                            <button className="book_details_button link">
                                Renew
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
