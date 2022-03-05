const UserMessage = ( {lastMessage, message} ) => {

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    console.log('avatar:',message.sender.avatar);

    return(
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style= { {backgroundImage: `url(${message?.sender?.avatar})`} }
                />
            )}
            {message?.attachments?.length > 0 
                ? (
                    <img 
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{ float: 'right' }}
                    />
                )
                : (
                    <div className="message user-message">
                        {message.text}
                    </div>
                )
            }
        </div>
    )
}

export default UserMessage