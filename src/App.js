import "./App.css";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Search from "./components/Search";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/search" element={<Search />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
