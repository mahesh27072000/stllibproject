import "../styles/Notification.css";

const Notification = ({ info }) => {
    return (
        <div className={`notification ${info === "" ? "hidden" : ""}`}>
            {info}
        </div>
    );
};

export default Notification;
