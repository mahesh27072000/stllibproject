import "../styles/Dashboard.css";
import BookList from "./BookList";

const renderStaffDashboard = () => {
    return (
        <>
            <h1> Staff Dashboard</h1>

            <div className="user_list">
                <h2>List of users</h2>
                <table>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Names</th>
                            <th>Remove user</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>My Name</td>
                            <td>Delete</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>My Name</td>
                            <td>Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <BookList
                heading="Available Books"
                title="title"
                author="Author Rothoa"
                button="Delete book"
            />
        </>
    );
};

const renderUserDashboard = () => {
    return (
        <>
            <h1>User Dashboard</h1>
            <div className="cart">
                <div className="issues">
                    <h2>Issues</h2>
                    <div className="cart_item">
                        <img
                            src="https://res.cloudinary.com/dj25aashz/image/upload/v1670968237/cld-sample-3.jpg"
                            alt="book"
                        />
                        <div className="issue_and_cart_details">
                            <div className="cart_book_details">
                                <p className="book_title">Tittle</p>
                                <p>Category</p>
                                <p>Author</p>
                            </div>
                            <button className="issue_button">Issue</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart">
                <div className="issues">
                    <h2>To be returned</h2>
                    <div className="cart_item">
                        <img
                            src="https://res.cloudinary.com/dj25aashz/image/upload/v1670968237/cld-sample-3.jpg"
                            alt="book"
                        />
                        <div className="issue_and_cart_details">
                            <div className="cart_book_details">
                                <p className="book_title">Tittle</p>
                                <p>Category</p>
                                <p>Author</p>
                            </div>
                            <button className="issue_button">Return</button>
                            <button className="issue_button">Renew</button>
                        </div>
                    </div>
                </div>
            </div>
            <BookList
                heading="Available Books"
                title="title"
                author="Author Rothoa"
                button="Add to cart"
            />
        </>
    );
};
console.log(renderUserDashboard);

const Dashboard = () => {
    return (
        <section className="section_main_container">
            <div className="section_container">{renderStaffDashboard()}</div>
        </section>
    );
};

export default Dashboard;
