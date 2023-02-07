import "../styles/BookDetails.css";

const BookDetails = () => {
    return (
        <div className="book_details_container">
            <img
                className="book_details_thumbnail"
                src="https://res.cloudinary.com/dj25aashz/image/upload/v1670968237/cld-sample-3.jpg"
                alt="book"
            />
            <div className="book_details">
                <h2>Book Tittle</h2>
                <p>Book Author</p>
            </div>
        </div>
    );
};

export default BookDetails;
