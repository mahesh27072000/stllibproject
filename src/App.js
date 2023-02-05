import "./App.css";
import Footer from "./components/Footer";

import Header from "./components/Header";
// import Main from "./components/Main";
import Search from "./components/Search";

const App = () => {
    return (
        <div className="App">
            <Header />
            {/* <Main /> */}
            <Search />
            <Footer />
        </div>
    );
};

export default App;
