import "../styles/BookList.css";

const BookList = () => {
    return (
        <div className="booklist_container">
            <h2>Available Books</h2>
            <div className="books_container">
                <div className="book">
                    <img
                        className="book_thumbnail"
                        src="https://res.cloudinary.com/dj25aashz/image/upload/v1670968237/cld-sample-3.jpg"
                        alt="book"
                    />
                    <div className="details">
                        <p className="title">title</p>
                        <p className="author">Author Rohtoa</p>
                    </div>
                    <button className="add_to_cart">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default BookList;
