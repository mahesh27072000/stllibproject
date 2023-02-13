import BookList from "./BookList";
import React, { useEffect, useState } from "react";
import Book from "./Book";

import appLocalStorage from "./localStorage";

const { getItem } = appLocalStorage;

const changeDateFormat = (date) => {
    return date.split("-").reverse().join("/");
};

const UserDashboard = ({ bookList }) => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        setUserDetails(getItem("userDetails"));
    }, []);

    return (
        <React.Fragment>
            <div className="cart_container">
                <h2 className="cart_heading">Cart</h2>

                <div className="cart">
                    <div className="cart_item">
                        <h3>Issues</h3>
                        {userDetails !== null &&
                        userDetails?.issues.length !== 0 ? (
                            userDetails?.issues.map((item) => (
                                <div className="cart_item" key={item.id}>
                                    <img
                                        src="https://res.cloudinary.com/dj25aashz/image/upload/v1670968237/cld-sample-3.jpg"
                                        alt="book"
                                    />

                                    <div className="cart_book_details">
                                        <h3 className="book_title">
                                            {bookList.length !== 0
                                                ? bookList.filter(
                                                      (elem) =>
                                                          elem.id === item.book
                                                  )[0].title
                                                : ""}
                                        </h3>
                                        <p className="book_detail">
                                            Date of Issue:{" "}
                                            {changeDateFormat(
                                                item.date_of_issue
                                            )}
                                        </p>

                                        <p className="book_detail">
                                            Date Due:{" "}
                                            {changeDateFormat(item.due_date)}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no_item">Your Cart is empty</div>
                        )}
                    </div>
                </div>

                <div className="cart">
                    <div className="cart_item">
                        <h3>Renewals</h3>
                        <div className="cart">
                            {userDetails !== null &&
                            userDetails.returns.length !== 0 ? (
                                userDetails.renewals?.map((item) => (
                                    <div className="cart_item" key={item.id}>
                                        <img
                                            src="https://res.cloudinary.com/dj25aashz/image/upload/v1670968237/cld-sample-3.jpg"
                                            alt="book"
                                        />
                                        <div className="cart_book_details">
                                            <h3 className="book_title">
                                                {bookList.length !== 0
                                                    ? bookList.filter(
                                                          (elem) =>
                                                              elem.id ===
                                                              item.book
                                                      )[0].title
                                                    : ""}
                                            </h3>
                                            <p className="book_detail">
                                                Date of Renewal:{" "}
                                                {changeDateFormat(
                                                    item.date_of_renewal
                                                )}
                                            </p>

                                            <p className="book_detail">
                                                Date Due:{" "}
                                                {changeDateFormat(
                                                    item.due_date
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no_item">
                                    Your Cart is empty
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="cart">
                    <div className="cart_item">
                        <h3>Return</h3>
                        <div className="cart">
                            {userDetails !== null &&
                            userDetails.returns.length !== 0 ? (
                                userDetails.returns?.map((item) => (
                                    <div className="cart_item" key={item.id}>
                                        <img
                                            src="https://res.cloudinary.com/dj25aashz/image/upload/v1670968237/cld-sample-3.jpg"
                                            alt="book"
                                        />
                                        <div className="cart_book_details">
                                            <h3 className="book_title">
                                                {bookList.length !== 0
                                                    ? bookList.filter(
                                                          (elem) =>
                                                              elem.id ===
                                                              item.book
                                                      )[0].title
                                                    : ""}
                                            </h3>
                                            <p className="book_detail">
                                                Date of Return:
                                                {changeDateFormat(
                                                    item.date_of_return
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no_item">
                                    Your Cart is empty
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <BookList heading="Available Books">
                {bookList?.map((book) => (
                    <Book
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        book={book}
                    />
                ))}
            </BookList>
        </React.Fragment>
    );
};

export default UserDashboard;
