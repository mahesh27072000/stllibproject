import "../styles/Dashboard.css";
import React, { useEffect, useState } from "react";
import appLocalStorage from "./localStorage";
import UserDashboard from "./UserDashboard";
import StaffDashboard from "./StaffDashboard";

// local storage
const { getItem } = appLocalStorage;

const Dashboard = ({ bookList, getBooks }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        if (getItem("user") !== null) {
            setUser(getItem("user").user);
            console.log(getItem("user"));
        }
    }, []);

    return (
        <section className="section_main_container">
            <div className="section_container">
                <h2>Welcome {user?.username}</h2>
                {/* render either staff or user dashboard depending on the value of {is_staff} */}
                {user?.is_staff ? (
                    <StaffDashboard
                        bookList={bookList}
                        getBooks={getBooks}
                        user={user}
                    />
                ) : (
                    <UserDashboard bookList={bookList} user={user} />
                )}
            </div>
        </section>
    );
};
export default Dashboard;
