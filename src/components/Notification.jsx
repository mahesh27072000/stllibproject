const Notification = ({ info }) => {
    const visibility = info === "" ? "hidden" : "visible";

    const styles = {
        backgroundColor: "#d7d7d7",
        border: "1px solid #d7d7d7",
        fontSize: "0.8rem",
        padding: "0.5rem 2rem",
        position: "absolute",
        top: "4.5rem",
        zIndex: "111",
        visibility: `${visibility}`,
    };

    return (
        <div className="notification" style={styles}>
            {info}
        </div>
    );
};

export default Notification;
