import appLocalStorage from "./localStorage";
// import { useNavigate } from "react-router-dom";

const { getItem } = appLocalStorage;

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
        return null;
    }
};

const authVerify = (navigate) => {
    const user = getItem("user");

    if (user) {
        const decodedJwt = parseJwt(user.access);
        console.log(decodedJwt);

        if (decodedJwt.exp * 1000 < Date.now()) {
            console.log("here");
            localStorage.clear();
            navigate("/");
        } else {
            console.log("here");
        }
    }
};

export default authVerify;
