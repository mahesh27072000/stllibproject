import "../styles/Form.css";

const Form = ({ children }) => {
    return (
        <form action="">
            <div className="form_container">
                <div className="form_inner_container">{children}</div>
            </div>
        </form>
    );
};

export default Form;
