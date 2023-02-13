import "../styles/BookList.css";

const BookList = ({ heading, children }) => {
    return (
        <div className="booklist_container">
            <h2>{heading}</h2>
            <div className="books">{children}</div>
        </div>
    );
};

export default BookList;
