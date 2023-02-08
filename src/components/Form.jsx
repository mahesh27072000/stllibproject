import "../styles/Form.css";

const Form = ({ children }) => {
    return (
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="form_container">{children}</div>
        </form>
    );
};

export default Form;
