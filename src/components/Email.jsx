import PropTypes from "prop-types";

function Email(props){
    const toggleRead = props.toggleRead;
    const toggleStar = props.toggleStar;
    const email = props.email;
    const index = props.index;



    return(
            <>
                <li
                key={index}
                className={`email ${email.read ? 'read' : 'unread'}`}
                >
                <div className="select">
                    <input
                    className="select-checkbox"
                    type="checkbox"
                    checked={email.read}
                    onChange={() => toggleRead(email)}
                    />
                </div>
                <div className="star">
                    <input
                    className="star-checkbox"
                    type="checkbox"
                    checked={email.starred}
                    onChange={() => toggleStar(email)}
                    />
                </div>
                <div className="sender">{email.sender}</div>
                <div className="title">{email.title}</div>
                </li>
            </>
    );
}

export default Email

Email.propTypes = {
    toggleRead: PropTypes.func,
    toggleStar: PropTypes.func,
    email: PropTypes.object,
    index: PropTypes.number
}