import React from 'react';

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Bonjour !</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    Vous avez {unreadMessages.length} message(s) non-lu(s).
                </h2>}
        </div>
    );
}
export default Mailbox;