import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Search from "./components/Search";
import Dashboard from "./components/Dashboard";
import BookDetails from "./components/BookDetails";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import authVerify from "./components/authVerify";

const App = () => {
    // Get all available books
    const [bookList, setBooksList] = useState([]);

    const getBooks = async () => {
        try {
            const response = await axios.get(
                "https://library-project-api.herokuapp.com/books"
            );
            setBooksList(response.data);
        } catch (err) {
            console.log("get books", err);
        }
    };
    useEffect(() => {
        getBooks();
    }, []);

    // Session timeout for 30 minutes
    const navigate = useNavigate();
    useEffect(() => {
        authVerify(navigate);
    });

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main bookList={bookList} />} />
                <Route
                    path="/book-details"
                    element={<BookDetails bookList={bookList} />}
                />
                <Route
                    path="/dashboard"
                    element={
                        <Dashboard bookList={bookList} getBooks={getBooks} />
                    }
                />
                <Route
                    path="/search"
                    element={<Search bookList={bookList} />}
                />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    );
};

export default App;
