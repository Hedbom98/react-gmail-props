import PropTypes from "prop-types"
import Email from "./Email";



function Emails(props){
    const filteredEmails = props.filteredEmails;
    const toggleRead = props.toggleRead;
    const toggleStar = props.toggleStar;

    
    
    return (

        <>
            <main className="emails">
                <ul>
                    {filteredEmails.map((email, index) => (
                        <Email email={email} key={index} toggleRead={toggleRead} toggleStar={toggleStar}/>
                    ))}
                </ul>
            </main>
        </>





    );

}

export default Emails

Emails.propTypes = {
    filteredEmails: PropTypes.array,
    toggleRead: PropTypes.func,
    toggleStar: PropTypes.func
}